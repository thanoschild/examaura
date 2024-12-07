'use client'
import { signOut, useSession } from "next-auth/react";
import { useTheme } from "next-themes";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { FiMoon } from "react-icons/fi";
import { IoSearchSharp } from "react-icons/io5";
import { MdOutlineShoppingCart, MdOutlineWbSunny } from "react-icons/md";
import { TbLogout } from "react-icons/tb";

type Props = {};

const Header = (props: Props) => {
  const { data: session, status } = useSession();
  const [showDropdown, setShowDropdown] = useState(false);
  const {theme, setTheme} = useTheme();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleTheme = (e: React.MouseEvent) => {
    e.preventDefault();
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

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

  return (
    <header className="flex flex-wrap  md:justify-start md:flex-nowrap z-50 w-full bg-white border-b border-gray-200 dark:bg-black dark:border-neutral-700 sticky top-0" ref={dropdownRef}>
      <nav className="relative max-w-[85rem] w-full mx-auto md:flex md:items-center md:justify-between md:gap-3 py-3 px-4 sm:px-6 lg:px-8 font-sans">
        <div className="flex justify-between items-center gap-x-8 text-gray-600 text-md font-[500]">
          <Link href="/" className="flex items-center cursor-pointer">
            <div
              className="flex-none font-extrabold text-xl focus:outline-none focus:opacity-80"
              aria-label="Brand"
            >
              <span className="text-black dark:text-white">EXAM</span>
              <span className="text-[#F59558]">AURA</span>
            </div>
          </Link>

          <Link href="/topics" className="hover:text-black dark:text-gray-400 dark:hover:text-white cursor-pointer">
            All Exams
          </Link>
          <Link href="#" className="hover:text-black dark:text-gray-400 dark:hover:text-white cursor-pointer">About</Link>
          <Link href="/contact" className="hover:text-black dark:text-gray-400 dark:hover:text-white cursor-pointer">Contacts</Link>
        </div>

        <div className="flex items-center gap-x-3 text-gray-600 font-semibold">
          <Link href="#">
            <button
              onClick={toggleTheme}
              type="button"
              className="py-3 px-3 flex justify-center items-center size-[46px] text-sm font-medium rounded-full border border-transparent text-black hover:bg-gray-100 hover:border-gray-200 dark:text-gray-300 dark:hover:text-white dark:hover:border-gray-800 dark:hover:bg-[#27272A] focus:outline-none disabled:opacity-50 disabled:pointer-events-none"
            >
             {theme === 'dark' ? (
              <MdOutlineWbSunny className="w-8 h-8"/>
            ) : (
              <FiMoon className="w-8 h-8"/>
            )}
            </button>
          </Link>

          <Link href="#">
            <button
              type="button"
              className="py-3 px-3 flex justify-center items-center size-[46px] text-sm font-medium rounded-full border border-transparent text-black hover:bg-gray-100 hover:border-gray-200 dark:text-gray-300 dark:hover:text-white dark:hover:border-gray-800 dark:hover:bg-[#27272A] focus:outline-none disabled:opacity-50 disabled:pointer-events-none"
            >
              <IoSearchSharp className="w-8 h-8"/>
            </button>
          </Link>

          <Link href="#">
            <button
              type="button"
              className="py-2 px-2 flex justify-center items-center size-[46px] text-sm font-medium rounded-full border border-transparent text-black hover:bg-gray-100 hover:border-gray-200 dark:text-gray-300 dark:hover:text-white dark:hover:border-gray-800 dark:hover:bg-[#27272A] focus:outline-none disabled:opacity-50 disabled:pointer-events-none"
            >
              <MdOutlineShoppingCart className="w-5 h-5" />
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
              <div className="absolute flex items-center justify-center right-1/2 translate-x-1/2 mt-2 w-36 bg-white rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5 text-gray-700 hover:bg-gray-100 dark:bg-[#27272A] dark:text-gray-200 dark:hover:bg-[#3e3e43]">
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
                <TbLogout className="w-5 h-5" />
                </div>
              </div>
            )}
          </div>
        ) : (
          <Link
            href="/auth/sign-in"
            type="button"
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 p-2 dark:bg-gray-200 dark:text-black dark:hover:bg-gray-50 dark:focus:ring-gray-700 dark:border-gray-700"
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
