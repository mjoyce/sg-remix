import * as Icons from '@heroicons/react/24/outline';
import { Link } from '@remix-run/react';

export function Navbar(): JSX.Element {
  return (
    <div className="navbar z-10 bg-base-100 p-4 shadow">
      <div className="container mx-auto">
        <div className="flex-1">
          <Link to="/">
            <img alt="StatusGator" src="/logo.svg" className="w-[120px]" />
          </Link>
        </div>
        <div className="hidden flex-none lg:block">
          <ul className="menu menu-normal menu-horizontal">
            <li>
              <Link to="/dashboard" className="gap-2 rounded text-neutral">
                <Icons.HomeIcon className="h-5 w-5" />
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/status-pages"
                className="gap-2 rounded text-neutral hover:bg-base-content/[.2]"
              >
                <Icons.BookOpenIcon className="h-5 w-5" />
                Status Page
              </Link>
            </li>
            <li>
              <Link
                to="/notifications"
                className="gap-2 rounded text-neutral hover:bg-base-content/[.2]"
              >
                <Icons.BellIcon className="h-5 w-5" />
                Notifications
              </Link>
            </li>
          </ul>
          <div className="dropdown-end dropdown">
            <label tabIndex={0} className="btn-ghost btn-square btn">
              <Icons.UserIcon className="h-5 w-5" />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
            >
              <li>
                <Link
                  to="/account"
                  className="text-neutral hover:bg-base-content/[.2]"
                >
                  <Icons.CogIcon className="h-5 w-5" />
                  Account
                </Link>
              </li>
              <li>
                <Link
                  to="/organization"
                  className="text-neutral hover:bg-base-content/[.2]"
                >
                  <Icons.UserGroupIcon className="h-5 w-5" />
                  Organization
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-neutral hover:bg-base-content/[.2]"
                >
                  <Icons.ArrowRightOnRectangleIcon className="h-5 w-5" />
                  Log Out
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-none lg:hidden">
          <label htmlFor="drawer" className="btn-ghost btn-square btn">
            <Icons.UserIcon className="h-5 w-5" />
          </label>
        </div>
      </div>
    </div>
  );
}
