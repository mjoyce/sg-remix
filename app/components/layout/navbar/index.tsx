import { Menu } from '@headlessui/react';
import * as OutlineIcons from '@heroicons/react/24/outline';
import * as SolidIcons from '@heroicons/react/24/solid';
import type { LinkProps } from '@remix-run/react';
import { Link } from '@remix-run/react';
import clsx from 'clsx';
import React from 'react';

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
              <AccountMenu />
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

function AccountMenu() {
  return (
    <Menu>
      <Menu.Button className="flex cursor-pointer flex-col items-center rounded p-2 pb-1 text-gray200 outline-none hover:bg-gray200/[.1] focus:bg-gray200/[.1] lg:flex-row lg:justify-between lg:gap-2 lg:py-1">
        <SolidIcons.UserCircleIcon className="h-5 w-5" />
        <span>Account</span>
      </Menu.Button>
      <Menu.Items className="z-100 absolute top-14 right-0 grid gap-2 rounded bg-white shadow outline-none lg:top-10">
        <div className="p-2">
          <Menu.Item>
            {({ active }) => {
              return (
                <MenuLink
                  to="/account"
                  className={clsx({
                    'bg-gray300/[.1]': active,
                  })}
                >
                  <OutlineIcons.CogIcon className="h-5 w-5" />
                  <span>Account</span>
                </MenuLink>
              );
            }}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <MenuLink
                to="/organization"
                className={clsx({
                  'bg-gray300/[.1]': active,
                })}
              >
                <OutlineIcons.UserGroupIcon className="h-5 w-5" />
                <span>Organization</span>
              </MenuLink>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <MenuLink
                to="/signout"
                className={clsx({
                  'bg-gray300/[.1]': active,
                })}
              >
                <OutlineIcons.ArrowRightOnRectangleIcon className="h-5 w-5" />
                <span>Sign out</span>
              </MenuLink>
            )}
          </Menu.Item>
        </div>
      </Menu.Items>
    </Menu>
  );
}

// import { Menu, Transition } from '@headlessui/react'
// import { Fragment, useEffect, useRef, useState } from 'react'
// import { ChevronDownIcon } from '@heroicons/react/20/solid'

// export default function Example() {
//   return (
//     <div className="fixed top-16 w-56 text-right">
//       <Menu as="div" className="relative inline-block text-left">
//         <div>
//           <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
//             Options
//             <ChevronDownIcon
//               className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
//               aria-hidden="true"
//             />
//           </Menu.Button>
//         </div>
//         <Transition
//           as={Fragment}
//           enter="transition ease-out duration-100"
//           enterFrom="transform opacity-0 scale-95"
//           enterTo="transform opacity-100 scale-100"
//           leave="transition ease-in duration-75"
//           leaveFrom="transform opacity-100 scale-100"
//           leaveTo="transform opacity-0 scale-95"
//         >
//           <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//             <div className="px-1 py-1 ">
//               <Menu.Item>
//                 {({ active }) => (
//                   <button
//                     className={`${
//                       active ? 'bg-violet-500 text-white' : 'text-gray-900'
//                     } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
//                   >
//                     {active ? (
//                       <EditActiveIcon
//                         className="mr-2 h-5 w-5"
//                         aria-hidden="true"
//                       />
//                     ) : (
//                       <EditInactiveIcon
//                         className="mr-2 h-5 w-5"
//                         aria-hidden="true"
//                       />
//                     )}
//                     Edit
//                   </button>
//                 )}
//               </Menu.Item>
//               <Menu.Item>
//                 {({ active }) => (
//                   <button
//                     className={`${
//                       active ? 'bg-violet-500 text-white' : 'text-gray-900'
//                     } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
//                   >
//                     {active ? (
//                       <DuplicateActiveIcon
//                         className="mr-2 h-5 w-5"
//                         aria-hidden="true"
//                       />
//                     ) : (
//                       <DuplicateInactiveIcon
//                         className="mr-2 h-5 w-5"
//                         aria-hidden="true"
//                       />
//                     )}
//                     Duplicate
//                   </button>
//                 )}
//               </Menu.Item>
//             </div>
//             <div className="px-1 py-1">
//               <Menu.Item>
//                 {({ active }) => (
//                   <button
//                     className={`${
//                       active ? 'bg-violet-500 text-white' : 'text-gray-900'
//                     } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
//                   >
//                     {active ? (
//                       <ArchiveActiveIcon
//                         className="mr-2 h-5 w-5"
//                         aria-hidden="true"
//                       />
//                     ) : (
//                       <ArchiveInactiveIcon
//                         className="mr-2 h-5 w-5"
//                         aria-hidden="true"
//                       />
//                     )}
//                     Archive
//                   </button>
//                 )}
//               </Menu.Item>
//               <Menu.Item>
//                 {({ active }) => (
//                   <button
//                     className={`${
//                       active ? 'bg-violet-500 text-white' : 'text-gray-900'
//                     } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
//                   >
//                     {active ? (
//                       <MoveActiveIcon
//                         className="mr-2 h-5 w-5"
//                         aria-hidden="true"
//                       />
//                     ) : (
//                       <MoveInactiveIcon
//                         className="mr-2 h-5 w-5"
//                         aria-hidden="true"
//                       />
//                     )}
//                     Move
//                   </button>
//                 )}
//               </Menu.Item>
//             </div>
//             <div className="px-1 py-1">
//               <Menu.Item>
//                 {({ active }) => (
//                   <button
//                     className={`${
//                       active ? 'bg-violet-500 text-white' : 'text-gray-900'
//                     } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
//                   >
//                     {active ? (
//                       <DeleteActiveIcon
//                         className="mr-2 h-5 w-5 text-violet-400"
//                         aria-hidden="true"
//                       />
//                     ) : (
//                       <DeleteInactiveIcon
//                         className="mr-2 h-5 w-5 text-violet-400"
//                         aria-hidden="true"
//                       />
//                     )}
//                     Delete
//                   </button>
//                 )}
//               </Menu.Item>
//             </div>
//           </Menu.Items>
//         </Transition>
//       </Menu>
//     </div>
//   )
// }

// function EditInactiveIcon(props) {
//   return (
//     <svg
//       {...props}
//       viewBox="0 0 20 20"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M4 13V16H7L16 7L13 4L4 13Z"
//         fill="#EDE9FE"
//         stroke="#A78BFA"
//         strokeWidth="2"
//       />
//     </svg>
//   )
// }

// function EditActiveIcon(props) {
//   return (
//     <svg
//       {...props}
//       viewBox="0 0 20 20"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M4 13V16H7L16 7L13 4L4 13Z"
//         fill="#8B5CF6"
//         stroke="#C4B5FD"
//         strokeWidth="2"
//       />
//     </svg>
//   )
// }

// function DuplicateInactiveIcon(props) {
//   return (
//     <svg
//       {...props}
//       viewBox="0 0 20 20"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M4 4H12V12H4V4Z"
//         fill="#EDE9FE"
//         stroke="#A78BFA"
//         strokeWidth="2"
//       />
//       <path
//         d="M8 8H16V16H8V8Z"
//         fill="#EDE9FE"
//         stroke="#A78BFA"
//         strokeWidth="2"
//       />
//     </svg>
//   )
// }

// function DuplicateActiveIcon(props) {
//   return (
//     <svg
//       {...props}
//       viewBox="0 0 20 20"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M4 4H12V12H4V4Z"
//         fill="#8B5CF6"
//         stroke="#C4B5FD"
//         strokeWidth="2"
//       />
//       <path
//         d="M8 8H16V16H8V8Z"
//         fill="#8B5CF6"
//         stroke="#C4B5FD"
//         strokeWidth="2"
//       />
//     </svg>
//   )
// }

// function ArchiveInactiveIcon(props) {
//   return (
//     <svg
//       {...props}
//       viewBox="0 0 20 20"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <rect
//         x="5"
//         y="8"
//         width="10"
//         height="8"
//         fill="#EDE9FE"
//         stroke="#A78BFA"
//         strokeWidth="2"
//       />
//       <rect
//         x="4"
//         y="4"
//         width="12"
//         height="4"
//         fill="#EDE9FE"
//         stroke="#A78BFA"
//         strokeWidth="2"
//       />
//       <path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
//     </svg>
//   )
// }

// function ArchiveActiveIcon(props) {
//   return (
//     <svg
//       {...props}
//       viewBox="0 0 20 20"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <rect
//         x="5"
//         y="8"
//         width="10"
//         height="8"
//         fill="#8B5CF6"
//         stroke="#C4B5FD"
//         strokeWidth="2"
//       />
//       <rect
//         x="4"
//         y="4"
//         width="12"
//         height="4"
//         fill="#8B5CF6"
//         stroke="#C4B5FD"
//         strokeWidth="2"
//       />
//       <path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
//     </svg>
//   )
// }

// function MoveInactiveIcon(props) {
//   return (
//     <svg
//       {...props}
//       viewBox="0 0 20 20"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path d="M10 4H16V10" stroke="#A78BFA" strokeWidth="2" />
//       <path d="M16 4L8 12" stroke="#A78BFA" strokeWidth="2" />
//       <path d="M8 6H4V16H14V12" stroke="#A78BFA" strokeWidth="2" />
//     </svg>
//   )
// }

// function MoveActiveIcon(props) {
//   return (
//     <svg
//       {...props}
//       viewBox="0 0 20 20"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path d="M10 4H16V10" stroke="#C4B5FD" strokeWidth="2" />
//       <path d="M16 4L8 12" stroke="#C4B5FD" strokeWidth="2" />
//       <path d="M8 6H4V16H14V12" stroke="#C4B5FD" strokeWidth="2" />
//     </svg>
//   )
// }

// function DeleteInactiveIcon(props) {
//   return (
//     <svg
//       {...props}
//       viewBox="0 0 20 20"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <rect
//         x="5"
//         y="6"
//         width="10"
//         height="10"
//         fill="#EDE9FE"
//         stroke="#A78BFA"
//         strokeWidth="2"
//       />
//       <path d="M3 6H17" stroke="#A78BFA" strokeWidth="2" />
//       <path d="M8 6V4H12V6" stroke="#A78BFA" strokeWidth="2" />
//     </svg>
//   )
// }

// function DeleteActiveIcon(props) {
//   return (
//     <svg
//       {...props}
//       viewBox="0 0 20 20"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <rect
//         x="5"
//         y="6"
//         width="10"
//         height="10"
//         fill="#8B5CF6"
//         stroke="#C4B5FD"
//         strokeWidth="2"
//       />
//       <path d="M3 6H17" stroke="#C4B5FD" strokeWidth="2" />
//       <path d="M8 6V4H12V6" stroke="#C4B5FD" strokeWidth="2" />
//     </svg>
//   )
// }
