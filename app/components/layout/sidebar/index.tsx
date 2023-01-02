import * as Icons from '@heroicons/react/24/outline';
import type { LinkProps } from '@remix-run/react';
import { Link } from '@remix-run/react';

const links = [
  {
    text: 'Dashboard',
    to: '/dashboard',
    icon: Icons.ChartBarSquareIcon,
  },
  {
    text: 'Status Page',
    to: '/status-pages',
    icon: Icons.BookOpenIcon,
  },
  {
    text: 'Notifications',
    to: '/notifications',
    icon: Icons.BellIcon,
  },
  {
    text: 'Account',
    to: '/account',
    icon: Icons.CogIcon,
  },
  {
    text: 'Organization',
    to: '/organization',
    icon: Icons.UserGroupIcon,
  },
  {
    text: 'Sign out',
    to: '/signout',
    icon: Icons.ArrowRightOnRectangleIcon,
  },
];

const SidebarLink = ({ children, ...props }: LinkProps) => (
  <Link
    {...props}
    className="flex w-full flex-row items-center gap-3 rounded p-2 text-lg text-gray300 hover:bg-gray300/[.1]"
  >
    {children}
  </Link>
);

interface SidebarProps extends React.HtmlHTMLAttributes<HTMLElement> {
  onLinkClick: () => void;
}

export function Sidebar({ onLinkClick }: SidebarProps): JSX.Element {
  return (
    <div className="grid-rows-sidebar flex w-52 flex-col rounded-l-2xl bg-gray300">
      <div className="self flex h-16 basis-16 items-center justify-end px-4">
        <label
          htmlFor="drawer"
          className="flex cursor-pointer flex-col items-center rounded p-2 text-white hover:bg-white/[.1] lg:flex-row lg:justify-between lg:gap-2 lg:pt-2"
        >
          <Icons.XMarkIcon className="h-5 w-5" />
        </label>
      </div>
      <div className="flex w-full flex-1 flex-col items-start gap-4 self-start bg-white p-4">
        {links.map(({ icon: Icon, text, ...props }) => (
          <SidebarLink key={text} {...props} onClick={onLinkClick}>
            <Icon className="h-6 w-6" />
            {text}
          </SidebarLink>
        ))}
      </div>
      <div className="basis-18 flex justify-start p-4 px-6">
        <Link to="/">
          <img alt="StatusGator" src="/logo-dark.svg" className="w-[100px]" />
        </Link>
      </div>
    </div>
  );
}
