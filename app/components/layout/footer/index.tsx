import { Link } from '@remix-run/react';

export function Footer(): JSX.Element {
  return (
    <footer>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 border-b border-base-300 px-4 py-8 md:grid-cols-2">
          <div className="mb-8 flex flex-col items-center gap-1 md:items-start">
            <img
              alt="StatusGator"
              src="/logo.svg"
              className="w-[120px] md:w-[240px]"
            />
          </div>
          <div className="jsu mx-auto grid grid-cols-3 gap-4 text-sm sm:gap-12">
            <div className="flex flex-col gap-2">
              <div className="font-bold">Solutions for</div>
              <Link to="/" className="link-hover link">
                Devops
              </Link>
              <Link to="/" className="link-hover link">
                Education
              </Link>
              <Link to="/" className="link-hover link">
                IT Helpdesk
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <Link to="/" className="link-hover link">
                Plans & Pricing
              </Link>
              <Link to="/" className="link-hover link">
                Search Services
              </Link>
              <Link to="/" className="link-hover link">
                Recently Added
              </Link>
              <Link to="/" className="link-hover link">
                Blog
              </Link>
              <Link to="/" className="link-hover link">
                Changelog
              </Link>
              <Link to="/" className="link-hover link">
                Suggestions
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <Link to="/" className="link-hover link">
                Support
              </Link>
              <Link to="/" className="link-hover link">
                Status
              </Link>
              <Link to="/" className="link-hover link">
                Privacy
              </Link>
              <Link to="/" className="link-hover link">
                Terms
              </Link>
              <Link to="/" className="link-hover link">
                Trust
              </Link>
              <Link to="/" className="link-hover link">
                Security
              </Link>
            </div>
          </div>
        </div>
        <div className="p-6 text-center text-xs">
          StatusGator has been monitoring the world's status pages since 2015.
          Copyright © 2022 Nimble Industries, Inc.
        </div>
      </div>
    </footer>
  );
}
