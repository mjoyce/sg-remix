import type { LinkProps } from '@remix-run/react';
import { Link } from '@remix-run/react';

const FooterLink = ({ children, ...props }: LinkProps) => (
  <Link {...props} className="hover:underline">
    {children}
  </Link>
);

export function Footer(): JSX.Element {
  return (
    <footer className="bg-green100 text-blue">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 border-b border-gray200 px-4 py-8 md:grid-cols-2">
          <div className="mb-8 flex flex-col items-center gap-1 md:mb-0 md:items-start">
            <img
              alt="StatusGator"
              src="/logo.svg"
              className="w-[120px] md:w-[240px]"
            />
          </div>
          <div className="mx-auto grid w-full grid-cols-3 gap-4 text-sm">
            <div className="justify-self-center">
              <div className="flex flex-col gap-2">
                <div className="font-bold">Solutions for</div>
                <FooterLink to="/">Devops</FooterLink>
                <FooterLink to="/">Education</FooterLink>
                <FooterLink to="/">IT Helpdesk</FooterLink>
              </div>
            </div>
            <div className="justify-self-center">
              <div className="flex flex-col gap-2">
                <FooterLink to="/">Plans & Pricing</FooterLink>
                <FooterLink to="/">Search Services</FooterLink>
                <FooterLink to="/">Recently Added</FooterLink>
                <FooterLink to="/">Blog</FooterLink>
                <FooterLink to="/">Changelog</FooterLink>
                <FooterLink to="/">Suggestions</FooterLink>
              </div>
            </div>
            <div className="justify-self-center">
              <div className="flex flex-col gap-2">
                <FooterLink to="/">Support</FooterLink>
                <FooterLink to="/">Status</FooterLink>
                <FooterLink to="/">Privacy</FooterLink>
                <FooterLink to="/">Terms</FooterLink>
                <FooterLink to="/">Trust</FooterLink>
                <FooterLink to="/">Security</FooterLink>
              </div>
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
