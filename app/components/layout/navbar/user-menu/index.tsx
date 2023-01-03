import { Menu } from '@headlessui/react';
import * as OutlineIcons from '@heroicons/react/24/outline';
import * as SolidIcons from '@heroicons/react/24/solid';
import type { LinkProps } from '@remix-run/react';
import { Link } from '@remix-run/react';
import clsx from 'clsx';
import React from 'react';

const links = [
  {
    Icon: OutlineIcons.CogIcon,
    href: '/account',
    label: 'Account',
  },
  {
    Icon: OutlineIcons.UserGroupIcon,
    href: '/organization',
    label: 'Organization',
  },
  {
    Icon: OutlineIcons.ArrowRightOnRectangleIcon,
    href: '/sign-out',
    label: 'Sign out',
  },
];

const MenuLink = React.forwardRef<HTMLAnchorElement, LinkProps>(
  function MenuLink({ children, className, ...props }, ref) {
    return (
      <Link
        {...props}
        className={clsx(
          'flex w-full flex-row items-center gap-3 rounded py-1 px-2 text-gray300',
          className
        )}
        ref={ref}
      >
        {children}
      </Link>
    );
  }
);

export function UserMenu() {
  return (
    <Menu>
      <Menu.Button className="flex cursor-pointer flex-col items-center rounded p-2 pb-1 text-gray200 outline-none hover:bg-gray200/[.1] focus:bg-gray200/[.1] lg:flex-row lg:justify-between lg:gap-2 lg:py-1">
        <SolidIcons.UserCircleIcon className="h-5 w-5" />
        <span>Account</span>
      </Menu.Button>
      <Menu.Items className="z-100 absolute top-14 right-0 grid gap-2 rounded bg-white p-2 shadow outline-none lg:top-10">
        {links.map(({ Icon, href, label }) => (
          <Menu.Item key={href}>
            {({ active }) => (
              <MenuLink
                to={href}
                className={clsx({
                  'bg-gray300/[.1]': active,
                })}
              >
                <Icon className="h-5 w-5" />
                <span>{label}</span>
              </MenuLink>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
}
