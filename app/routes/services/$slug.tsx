import type { Service } from '@prisma/client';
import type { LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

import db from '~/db.server';

type LoaderData = { service: Service };

export const loader: LoaderFunction = async ({ params }) => {
  const { slug } = params;

  const data = {
    service: await db.service.findUniqueOrThrow({
      where: { slug },
    }),
  };

  return data;
};

export default function () {
  const { service } = useLoaderData<LoaderData>();

  return (
    <div className="grid grid-cols-1 items-center gap-8 px-4 pt-24">
      <h1 className="text-center text-4xl font-bold">{service.name}</h1>
    </div>
  );
}
