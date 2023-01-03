import * as OutlineIcons from '@heroicons/react/24/outline';
import type { LinkProps } from '@remix-run/react';
import { Link } from '@remix-run/react';
import clsx from 'clsx';
import React from 'react';

import { UserMenu } from './user-menu';

const NavbarLink = ({ children, ...props }: LinkProps) => (
  <Link
    className="flex flex-col items-center rounded p-2 pb-1 text-gray200 outline-none hover:bg-gray200/[.1] focus:bg-gray200/[.1] lg:flex-row lg:justify-between lg:gap-2 lg:py-1"
    {...props}
  >
    {children}
  </Link>
);

const MenuLink = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ children, className, ...props }, ref) => (
    <Link
      {...props}
      className={clsx(
        'flex w-full flex-row items-center gap-3 rounded p-2 text-gray300',
        className
      )}
      ref={ref}
    >
      {children}
    </Link>
  )
);
MenuLink.displayName = 'MenuLink';

export function Navbar(): JSX.Element {
  return (
    <div className="z-10 flex min-h-[64px] items-center bg-blue p-0 shadow">
      <div className="container mx-auto">
        <div className="relative flex flex-row items-center justify-between px-4">
          <Link to="/">
            <img alt="StatusGator" src="/logo-dark.svg" className="w-[123px]" />
          </Link>
          <div className="hidden justify-end gap-2 sm:flex">
            <NavbarLink to="/dashboard">
              <OutlineIcons.ChartBarSquareIcon className="h-5 w-5" />
              <span>Dashboard</span>
            </NavbarLink>
            <NavbarLink to="/status-pages">
              <OutlineIcons.BookOpenIcon className="h-5 w-5" />
              <span>Status Page</span>
            </NavbarLink>
            <NavbarLink to="/notifications">
              <OutlineIcons.BellIcon className="h-5 w-5" />
              <span>Notifications</span>
            </NavbarLink>
            <div className="relative flex items-center">
              <UserMenu />
            </div>
          </div>
          <div className="flex justify-end gap-2 sm:hidden">
            <label
              htmlFor="drawer"
              className="flex cursor-pointer flex-col items-center rounded p-2 text-gray200 hover:bg-gray200/[.1]"
            >
              <OutlineIcons.Bars2Icon className="h-5 w-5" />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
