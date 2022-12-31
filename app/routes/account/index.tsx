import type { ActionFunction } from '@remix-run/node';
import { redirect } from '@remix-run/node';

import { Heading } from '~/components/typography';

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  console.log({ formData });
  return redirect('/account');
};

export default function Account() {
  return (
    <div className="grid grid-cols-1 gap-8 px-4 py-12">
      <Heading.One>Update Your Profile</Heading.One>
    </div>
  );
}
