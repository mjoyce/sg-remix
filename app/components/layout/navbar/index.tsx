import * as Icons from '@heroicons/react/24/outline';
import type { LinkProps } from '@remix-run/react';
import { Link } from '@remix-run/react';

const NavbarLink = ({ children, ...props }: LinkProps) => (
  <Link
    className="flex flex-col items-center rounded p-2 pb-1 text-gray200 hover:bg-gray200/[.1] lg:flex-row lg:justify-between lg:gap-2 lg:py-1"
    {...props}
  >
    {children}
  </Link>
);

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
              <Icons.ChartBarSquareIcon className="h-5 w-5" />
              <span>Dashboard</span>
            </NavbarLink>
            <NavbarLink to="/status-pages">
              <Icons.BookOpenIcon className="h-5 w-5" />
              <span>Status Page</span>
            </NavbarLink>
            <NavbarLink to="/notifications">
              <Icons.BellIcon className="h-5 w-5" />
              <span>Notifications</span>
            </NavbarLink>
            <NavbarLink to="/account">
              <Icons.UserCircleIcon className="h-5 w-5" />
              <span>Account</span>
            </NavbarLink>
          </div>
          <div className="flex justify-end gap-2 sm:hidden">
            <label
              htmlFor="drawer"
              className="flex cursor-pointer flex-col items-center rounded p-2 text-gray200 hover:bg-gray200/[.1]"
            >
              <Icons.Bars2Icon className="h-5 w-5" />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
