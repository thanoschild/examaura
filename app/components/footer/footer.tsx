'use client';

import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full bg-white dark:bg-black border-t border-gray-200 dark:border-neutral-700">
      <div className="max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 cursor-pointer">
              <span className="flex-none text-xl font-extrabold">
                <span className="text-black dark:text-white">EXAM</span>
                <span className="text-[#F59558]">AURA</span>
              </span>
            </Link>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Your trusted platform for certification exam preparation. Practice with real exam questions and boost your confidence.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white">Quick Links</h4>
            <div className="mt-3 grid space-y-3">
              <Link href="/topics" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">
                Exam Topics
              </Link>
              <Link href="/about" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">
                About Us
              </Link>
              <Link href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white">Connect</h4>
            <div className="mt-4 flex gap-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright and Legal */}
        <div className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} ExamAura. All rights reserved.
            </p>
            
            {/* Legal Links */}
            <div className="flex items-center space-x-6">
              <Link 
                href="/terms" 
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
              >
                Terms & Conditions
              </Link>
              <span className="text-gray-300 dark:text-gray-700">|</span>
              <Link 
                href="/privacy" 
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;