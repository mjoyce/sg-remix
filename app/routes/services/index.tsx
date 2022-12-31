import type { Service } from '@prisma/client';
import type { ActionFunction, LoaderFunction } from '@remix-run/node';
import { redirect } from '@remix-run/node';
import { Form, Link, useLoaderData } from '@remix-run/react';
import slugify from 'slugify';
import invariant from 'tiny-invariant';

import { Heading } from '~/components/typography';
import db from '~/db.server';

type LoaderData = { services: Array<Service> };

export const loader: LoaderFunction = async () => {
  try {
    const data = {
      services: await await db.service.findMany(),
    };

    return data;
  } catch (error) {
    console.error(error);
    return { services: [] };
  }
};

export const action: ActionFunction = async ({ request }) => {
  const body = new URLSearchParams(await request.text());
  const name = body.get('name');
  invariant(name, 'Name is required');
  const slug = slugify(name as string, { lower: true });
  await db.service.create({ data: { name, slug } });
  return redirect('/services');
};

export default function () {
  const data = useLoaderData<LoaderData>();

  return (
    <div className="grid grid-cols-1 gap-8 px-4 py-12">
      <Heading.One>Services</Heading.One>
      <Form method="post" action="/services?index">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" />
      </Form>
      <ul>
        {data.services.map((service) => (
          <li key={service.id}>
            <Link to={`/services/${service.slug}`}>{service.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
