import { useEffect, useRef } from 'react';

import { Footer } from './footer';
import { Navbar } from './navbar';
import { Sidebar } from './sidebar';

interface LayoutProps extends React.HtmlHTMLAttributes<HTMLElement> {}

export function Layout({ children }: LayoutProps): JSX.Element {
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
    <div className="drawer drawer-end">
      <input
        id="drawer"
        type="checkbox"
        className="drawer-toggle"
        ref={toggleRef}
      />
      <div className="drawer-content flex flex-1 flex-col bg-white">
        <Navbar />
        <main className="flex-1 bg-gradient-to-b from-white to-green100">
          {children}
        </main>
        <Footer />
      </div>
      <div className="drawer-side">
        <label htmlFor="drawer" className="drawer-overlay"></label>
        <Sidebar onLinkClick={closeDrawer} />
      </div>
    </div>
  );
}
