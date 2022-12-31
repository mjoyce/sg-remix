import type { LoaderArgs } from '@remix-run/node';
import { json } from '@remix-run/node';
import invariant from 'tiny-invariant';

import db from '~/db.server';

export async function loader({ request }: LoaderArgs) {
  const url = new URL(request.url);
  const query = url.searchParams.get('query');

  invariant(typeof query === 'string', 'query is required');

  const items = await db.service.findMany({
    where: {
      name: {
        contains: query,
        mode: 'insensitive',
      },
    },
  });

  return json({
    items: items.map((item) => ({
      name: item.name,
      value: item.id.toString(),
    })),
  });
}
