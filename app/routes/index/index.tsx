import * as Icons from '@heroicons/react/24/outline';
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
  // const fetcher = useFetcher<typeof searchLoader>();

  return (
    <div>
      <Section className="bg-base-200">
        <Heading.One>Instant Cloud Status Monitoring</Heading.One>
        <Heading.Two className="mx-auto lg:w-2/5">
          Our instant status pages aggregate the status of all the services you
          depend on.
        </Heading.Two>
        <Link to="/dashboard" className="btn-primary btn sm:mx-auto">
          Go to your dashboard
        </Link>
      </Section>

      <Section className="bg-base-200">
        <Heading.One className="mx-auto text-3xl lg:w-1/2">
          Now Monitoring and Normalizing Data from{' '}
          <span className="text-primary">2,620 Services</span>
        </Heading.One>
      </Section>

      <Section className="bg-base-200">
        <Heading.One className="mx-auto text-3xl lg:w-1/2">
          Solutions for Everyone
        </Heading.One>
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div>
            <Link to="/'" className="btn-accent btn-square btn">
              <Icons.BuildingLibraryIcon className="h-6 w-6" />
            </Link>
            Education
            <ol className="list-disc marker:text-primary">
              <li>Keep students and staff informed</li>
              <li>Reduce ticket volume</li>
              <li>Essential for remote learning</li>
            </ol>
          </div>
          <div>
            <Link to="/'" className="btn-accent btn-square btn">
              <Icons.CloudIcon className="h-6 w-6" />
            </Link>
            DevOps
            <ol className="list-disc marker:text-primary">
              <li>Shorten incident downtime</li>
              <li>Unify maintenance schedules</li>
              <li>Integrates with incident tools</li>
            </ol>
          </div>
          <div>
            <Link to="/'" className="btn-accent btn-square btn">
              <Icons.ComputerDesktopIcon className="h-6 w-6" />
            </Link>
            IT HelpDesk
            <ol className="list-disc marker:text-primary">
              <li>Reduce ticket volumes</li>
              <li>Improve transparency</li>
              <li>Shorten resolution times</li>
            </ol>
          </div>
        </div>
      </Section>

      <Section className="bg-accent">
        <Heading.One className="mx-auto text-3xl lg:w-1/2">
          Instant enriched data from{' '}
          <span className="text-primary">2,620 status pages</span>
        </Heading.One>
      </Section>

      <Section className="bg-base-200">
        <Heading.One className="mx-auto text-3xl lg:w-1/2">
          Features for teams of all sizes
        </Heading.One>
      </Section>

      <Section className="bg-base-200">
        <Heading.One className="mx-auto text-3xl lg:w-1/2">
          Additional Features
        </Heading.One>
      </Section>

      <Section className="bg-base-200">
        <Heading.One className="mx-auto text-3xl lg:w-1/2">
          What our customers say
        </Heading.One>
      </Section>

      <Section className="bg-base-200">
        <Heading.One className="mx-auto text-3xl lg:w-1/2">
          Trusted by more than <span className="text-primary">15,000</span>{' '}
          organizations
        </Heading.One>
      </Section>

      <Section className="bg-base-200">
        <Heading.One>Start your free trial now</Heading.One>
        <Heading.Two className="mx-auto lg:w-2/5">
          Every plan pays for itself in time saved:
        </Heading.Two>
      </Section>
      {/* <Combobox
        items={fetcher.data ? fetcher.data.items : []}
        itemToString={(item) => item?.name ?? ''}
        onInputValueChange={(changes) => {
          fetcher.submit(
            { query: changes.inputValue ?? '' },
            { method: 'get', action: '/services/search?index' }
          );
        }}
        renderItem={(combobox) => (item, index) =>
          (
            <li
              className={clsx({
                'bg-primary': combobox.highlightedIndex === index,
              })}
              key={item.value}
              {...combobox.getItemProps({ item, index })}
            >
              {item.name}
            </li>
          )}
      /> */}
    </div>
  );
}
