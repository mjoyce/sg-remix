import * as Icons from '@heroicons/react/24/outline';
import { Link } from '@remix-run/react';

const links = [
  {
    text: 'Dashboard',
    url: '/dashboard',
    icon: Icons.HomeIcon,
  },
  {
    text: 'Status Page',
    url: '/status-pages',
    icon: Icons.DocumentIcon,
  },
  {
    text: 'Notifications',
    url: '/notifications',
    icon: Icons.BellIcon,
  },
  {
    text: 'Account',
    url: '/account',
    icon: Icons.CogIcon,
  },
  {
    text: 'Organization',
    url: '/organization',
    icon: Icons.UserGroupIcon,
  },
  {
    text: 'Logout',
    url: '/logout',
    icon: Icons.ArrowRightOnRectangleIcon,
  },
];

interface SidebarLinkProps extends React.HtmlHTMLAttributes<HTMLElement> {
  text: string;
  url: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const SidebarLinkItem = ({ text, url, icon: Icon }: SidebarLinkProps) => (
  <Link to={url} className="hover:bg-base-300">
    <Icon className="h-5 w-5" />
    {text}
  </Link>
);

interface SidebarProps extends React.HtmlHTMLAttributes<HTMLElement> {
  onLinkClick: () => void;
}

export function Sidebar({ onLinkClick }: SidebarProps): JSX.Element {
  return (
    <ul className="menu w-72 bg-base-100 px-4 py-2">
      <div className="mb-4 flex items-start justify-end">
        <button className="btn-ghost btn-square btn" onClick={onLinkClick}>
          <Icons.XMarkIcon className="h- w-6" />
        </button>
      </div>
      {links.map((link) => (
        <li key={link.text}>
          <SidebarLinkItem key={link.url} {...link} onClick={onLinkClick} />
        </li>
      ))}
    </ul>
  );
}
