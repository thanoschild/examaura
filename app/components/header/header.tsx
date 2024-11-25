'use client'
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

type Props = {};

const Header = (props: Props) => {
  const { data: session, status } = useSession();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent event from bubbling up
    setShowDropdown(!showDropdown);
  };

  return (
    <header className="flex flex-wrap  md:justify-start md:flex-nowrap z-50 w-full bg-white border-b border-gray-200 dark:bg-neutral-800 dark:border-neutral-700 sticky top-0" ref={dropdownRef}>
      <nav className="relative max-w-[85rem] w-full mx-auto md:flex md:items-center md:justify-between md:gap-3 py-3 px-4 sm:px-6 lg:px-8 font-sans">
        <div className="flex justify-between items-center gap-x-8 text-gray-600 text-md font-semibold">
          <Link href="/" className="flex items-center cursor-pointer">
            <div
              className="flex-none font-extrabold text-xl focus:outline-none focus:opacity-80"
              aria-label="Brand"
            >
              <span className="text-black dark:text-white">EXAM</span>
              <span className="text-[#F59558]">AURA</span>
            </div>
          </Link>

          <Link href="/topics" className="hover:text-black cursor-pointer">
            Exams Topics
          </Link>
          <a className="hover:text-black cursor-pointer">About</a>
          <a className="hover:text-black cursor-pointer">Contacts</a>
        </div>

        <div className="flex items-center gap-x-3 text-gray-600 font-semibold">
          <Link href="#">
            <button
              type="button"
              className="py-3 px-3 flex justify-center items-center size-[46px] text-sm font-medium rounded-full border border-transparent text-white hover:bg-gray-100 hover:border-gray-200 focus:outline-none disabled:opacity-50 disabled:pointer-events-none"
            >
              <svg
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10 14a4 4 0 1 0 0-8 4 4 0 0 0 0 8m0-6a2 2 0 1 1 0 4 2 2 0 0 1 0-4"
                  fill="#000"
                />
                <path
                  d="M.5 10a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1m15 0a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1M14 14a1 1 0 0 1 1.414 0l1.414 1.414a1 1 0 1 1-1.414 1.414L14 15.414A1 1 0 0 1 14 14M3 3a1 1 0 0 1 1.414 0l1.414 1.414a1 1 0 1 1-1.414 1.414L3 4.414A1 1 0 0 1 3 3m7 12.5a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1m0-15a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1M16.828 3a1 1 0 0 1 0 1.414l-1.414 1.414A1 1 0 1 1 14 4.414L15.414 3a1 1 0 0 1 1.414 0m-11 12.414-1.414 1.414A1 1 0 1 1 3 15.414L4.414 14a1 1 0 0 1 1.414 1.414"
                  fill="#000"
                />
              </svg>
            </button>
          </Link>

          <Link href="#">
            <button
              type="button"
              className="py-3 px-3 flex justify-center items-center size-[46px] text-sm font-medium rounded-full border border-transparent text-white hover:bg-gray-100 hover:border-gray-200 focus:outline-none disabled:opacity-50 disabled:pointer-events-none"
            >
              <svg viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M49.62 45.27 36.22 32a18.9 18.9 0 1 0-34.1-9.2A18.91 18.91 0 0 0 32 36.27l13.3 13.3a1.45 1.45 0 0 0 2.1 0l2.1-2.1a1.68 1.68 0 0 0 .12-2.2m-28.7-11.5a12.9 12.9 0 1 1 12.9-12.9 12.87 12.87 0 0 1-12.9 12.9"
                  fillRule="evenodd"
                />
              </svg>
            </button>
          </Link>

          <Link href="#">
            <button
              type="button"
              className="py-2 px-2 flex justify-center items-center size-[46px] text-sm font-medium rounded-full border border-transparent text-white hover:bg-gray-100 hover:border-gray-200 focus:outline-none disabled:opacity-50 disabled:pointer-events-none"
            >
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
              >
                <circle cx="7.5" cy="18.5" r="1.5" fill="#000" />
                <circle cx="16.5" cy="18.5" r="1.5" fill="#000" />
                <path
                  stroke="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5h2l.6 3m0 0L7 15h10l2-7z"
                />
              </svg>
            </button>
          </Link>
          {status === "authenticated" ? (
          <div className="relative px-2">
            <button
              type="button"
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none"
            >
              <span className="text-sm font-medium">
                {session.user?.email?.[0].toUpperCase()}
              </span>
            </button>

            {showDropdown && (
              <div className="absolute flex items-center justify-center right-1/2 translate-x-1/2 mt-2 w-36 bg-white rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5 text-gray-700 hover:bg-gray-100">
                <button
                  onClick={() => {
                    signOut();
                    setShowDropdown(false);
                  }}
                  className="block text-left px-2 py-2 text-sm"
                >
                  Logout 
                </button>
                <div className="">
                <svg width={20} height={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M21.593 10.943c.584.585.584 1.53 0 2.116L18.71 15.95c-.39.39-1.03.39-1.42 0a.996.996 0 0 1 0-1.41 9.6 9.6 0 0 1 1.689-1.345l.387-.242-.207-.206a10 10 0 0 1-2.24.254H8.998a1 1 0 1 1 0-2h7.921a10 10 0 0 1 2.24.254l.207-.206-.386-.241a9.6 9.6 0 0 1-1.69-1.348.996.996 0 0 1 0-1.41c.39-.39 1.03-.39 1.42 0zM14 16a1 1 0 0 0-1 1v1.5a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1.505a1 1 0 1 0 2 0V5.5A2.5 2.5 0 0 0 12.5 3h-7A2.5 2.5 0 0 0 3 5.5v13A2.5 2.5 0 0 0 5.5 21h7a2.5 2.5 0 0 0 2.5-2.5V17a1 1 0 0 0-1-1" fill="#000" /></svg>
                </div>
              </div>
            )}
          </div>
        ) : (
          <Link
            href="/auth/sign-in"
            type="button"
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 p-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            Login
          </Link>
        )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
