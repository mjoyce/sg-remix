import { Link } from '@remix-run/react';
import clsx from 'clsx';

import { Heading } from '~/components/typography';

const Section = ({
  children,
  className,
}: React.HtmlHTMLAttributes<HTMLElement>) => (
  <div className={clsx('px-4 py-16', className)}>
    <div className="container mx-auto grid grid-cols-1 gap-4">{children}</div>
  </div>
);

export default function Index() {
  return (
    <div>
      <Section>
        <Heading.One>Instant Cloud Status Monitoring</Heading.One>
        <Heading.Two className="mx-auto lg:w-2/5">
          Our instant status pages aggregate the status of all the services you
          depend on.
        </Heading.Two>
        <Link
          to="/dashboard"
          className="mx-auto flex min-w-fit items-center justify-center rounded border-none bg-green200 px-3 py-2 text-white"
        >
          Go to your dashboard
        </Link>
      </Section>
    </div>
  );
}
