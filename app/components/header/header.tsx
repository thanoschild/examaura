'use client'
import { signOut, useSession } from "next-auth/react";
import { useTheme } from "next-themes";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { FiMoon, FiMenu } from "react-icons/fi";
import { IoSearchSharp } from "react-icons/io5";
import { MdOutlineShoppingCart, MdOutlineWbSunny } from "react-icons/md";
import { TbLogout } from "react-icons/tb";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const { data: session, status } = useSession();
  const [showDropdown, setShowDropdown] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);
    if (!localStorage.getItem('theme')) {
      setTheme('system');
    }
  }, [setTheme]);

  const toggleTheme = (e: React.MouseEvent) => {
    e.preventDefault();
    const currentTheme = theme === 'system' ? systemTheme : theme;
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }

      if (
        showMobileMenu &&
        mobileMenuRef.current &&
        hamburgerRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        !hamburgerRef.current.contains(event.target as Node)
      ) {
        setShowMobileMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showMobileMenu]);

  // Don't render theme toggle until mounted to prevent hydration mismatch
  if (!mounted) {
    return null; // or a loading placeholder
  }

  // Determine which icon to show based on current theme
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const ThemeIcon = currentTheme === 'dark' ? MdOutlineWbSunny : FiMoon;

  return (
    <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full bg-white border-b border-gray-200 dark:bg-black dark:border-neutral-700 sticky top-0" ref={dropdownRef}>
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

          <div className="hidden md:flex items-center gap-x-8">
            <Link href="/topics" className="hover:text-black dark:text-gray-400 dark:hover:text-white cursor-pointer">
              All Exams
            </Link>
            <Link href="/about" className="hover:text-black dark:text-gray-400 dark:hover:text-white cursor-pointer">
              About
            </Link>
            <Link href="/contact" className="hover:text-black dark:text-gray-400 dark:hover:text-white cursor-pointer">
              Contacts
            </Link>
          </div>

          <button
            ref={hamburgerRef}
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-lg"
          >
            {showMobileMenu ? (
              <IoMdClose className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            ) : (
              <FiMenu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            )}
          </button>
        </div>

        <div className="hidden md:flex items-center gap-x-3 text-gray-600 font-semibold">
          <Link href="#">
            <button
              onClick={toggleTheme}
              type="button"
              className="py-3 px-3 flex justify-center items-center size-[46px] text-sm font-medium rounded-full border border-transparent text-black hover:bg-gray-100 hover:border-gray-200 dark:text-gray-300 dark:hover:text-white dark:hover:border-gray-800 dark:hover:bg-[#27272A] focus:outline-none disabled:opacity-50 disabled:pointer-events-none"
            >
              <ThemeIcon className="w-8 h-8"/>
            </button>
          </Link>

          <Link href="/topics">
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

        {showMobileMenu && (
          <div 
            ref={mobileMenuRef}
            className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-black border-b border-gray-200 dark:border-neutral-700 shadow-lg"
          >
            <div className="flex flex-col p-4 space-y-3">
              <Link href="/topics" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white py-2" onClick={() => setShowMobileMenu(false)}>
                All Exams
              </Link>
              <Link href="/about" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white py-2" onClick={() => setShowMobileMenu(false)}>
                About
              </Link>
              <Link href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white py-2" onClick={() => setShowMobileMenu(false)}>
                Contacts
              </Link>
              
              <div className="flex items-center gap-3 pt-3 border-t border-gray-200 dark:border-neutral-700">
                <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800">
                  <ThemeIcon className="w-6 h-6 text-gray-700 dark:text-gray-300"/>
                </button>
                <Link href="/topics">
                  <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800">
                    <IoSearchSharp className="w-6 h-6 text-gray-700 dark:text-gray-300"/>
                  </button>
                </Link>
                <Link href="#">
                  <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800">
                    <MdOutlineShoppingCart className="w-5 h-5 text-gray-700 dark:text-gray-300"/>
                  </button>
                </Link>
                {status === "authenticated" ? (
                  <button
                    onClick={() => signOut()}
                    className="ml-auto text-white bg-gray-800 hover:bg-gray-900 px-4 py-2 rounded-lg dark:bg-gray-200 dark:text-black dark:hover:bg-gray-50"
                  >
                    Logout
                  </button>
                ) : (
                  <Link
                    href="/auth/sign-in"
                    className="ml-auto text-white bg-gray-800 hover:bg-gray-900 px-4 py-2 rounded-lg dark:bg-gray-200 dark:text-black dark:hover:bg-gray-50"
                    onClick={() => setShowMobileMenu(false)}
                  >
                    Login
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
