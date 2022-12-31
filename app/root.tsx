import type { MetaFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import { useEffect, useRef } from 'react';

import { Layout } from './components/layout';
import { Heading } from './components/typography';
import styles from './styles/app.css';

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'StatusGator',
  viewport: 'width=device-width,initial-scale=1',
});

export default function App() {
  const toggleRef = useRef<HTMLInputElement>(null);
  const closeDrawer = () => {
    if (toggleRef.current) {
      toggleRef.current.checked = false;
    }
  };
  const handleEscape = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      closeDrawer();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleEscape, false);
  });

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="font-sans">
        <Layout>
          <Outlet />
        </Layout>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <html>
      <head>
        <title>StatusGator - Oops!</title>
        <Meta />
        <Links />
      </head>
      <body className="font-sans">
        <div className="grid grid-cols-1 items-center gap-8 px-4 pt-24">
          <Heading.One>Oops!</Heading.One>
          <Heading.Two>
            We may have just made a huge mistake :/ One of our staff will have
            to fix it.
          </Heading.Two>
        </div>
        <Scripts />
      </body>
    </html>
  );
}
