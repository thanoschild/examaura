import Link from 'next/link'
import React from 'react'

type Props = {}

const Header = (props: Props) => {
    return (
        <header className="flex flex-wrap  md:justify-start md:flex-nowrap z-50 w-full bg-white border-b border-gray-200 dark:bg-neutral-800 dark:border-neutral-700 sticky top-0">
            <nav className="relative max-w-[85rem] w-full mx-auto md:flex md:items-center md:justify-between md:gap-3 py-3 px-4 sm:px-6 lg:px-8 font-sans">
                <div className="flex justify-between items-center gap-x-8 text-gray-600 text-md font-semibold">
                    <Link href="/" className="flex items-center cursor-pointer">
                        <div>
                            <button type="button" className="py-0.5 flex justify-center items-center size-[46px] text-sm font-medium rounded-full border border-transparent text-white focus:outline-none disabled:opacity-50 disabled:pointer-events-none">
                                <svg viewBox="0 0 1024 1024" className="icon" xmlns="http://www.w3.org/2000/svg"><path d="M583.6 479.3c82.5 29.1 141.7 107.8 141.7 200.3 0 117.3-95.1 212.4-212.4 212.4s-212.4-95.1-212.4-212.4c0-89.8 55.7-166.6 134.5-197.7V233.5h148.7z" fill="#EDEDED" /><path d="M466.8 148.6h85v85h-85z" fill="#EFE2C2" strokeWidth="1" /><path d="M704.2 756.8c-11.1-11.5-20.4-24.8-42.1-24.8-38.2 0-38.2 41.2-76.4 41.2S547.5 732 509.3 732s-38.2 41.2-76.4 41.2-38.2-41.2-76.4-41.2c-21.7 0-31.1 13.3-42.2 24.8 0 0 56.4 135.2 194.9 135.2S703.9 773.6 708 763.4zM512.9 638.9c0 17.4-14.1 31.4-31.4 31.4-17.4 0-31.4-14.1-31.4-31.4 0-17.4 14.1-31.4 31.4-31.4s31.4 14.1 31.4 31.4m74.7-72.2c0 12-9.7 21.6-21.6 21.6s-21.6-9.7-21.6-21.6 9.7-21.6 21.6-21.6 21.6 9.7 21.6 21.6" fill="#F59558" /><path d="M727.9 771c12-28.1 18.6-59 18.6-91.4 0-93.8-56.3-178.3-141.6-214.8V233.5c0-11.7-9.5-21.2-21.2-21.2H573v-63.7c0-11.7-9.5-21.2-21.2-21.2h-85c-11.7 0-21.2 9.5-21.2 21.2v63.7H435c-11.7 0-21.2 9.5-21.2 21.2V468c-82.2 38.4-134.5 119.9-134.5 211.6 0 28.3 5.1 55.5 14.4 80.7.3 1.6.6 3.2 1.2 4.7.4 1 2.4 5.7 6.2 12.8 20.6 44.2 54.5 80.9 96.6 104.9 29.8 17.9 66.8 30.6 111.7 30.6.4 0 .8-.1 1.2-.1.8 0 1.5.1 2.3.1 92 0 171.7-53.4 209.8-130.9 2.1-4 3.9-7.9 5.2-11.1q-.15-.15 0-.3M488.1 169.8h42.5v42.5h-42.5zm-45.3 331.9c8.1-3.2 13.5-11 13.5-19.8V254.8h106.2v222.8c-.8 9.4 4.8 18.4 14.1 21.7C652.8 526.2 704 598.7 704 679.6c0 14.8-1.8 29.1-5 42.9-9.1-6.6-20.7-11.8-36.9-11.8-28.4 0-43.1 15.8-53.8 27.4-9.1 9.8-13.2 13.8-22.6 13.8s-13.5-4-22.6-13.8c-10.7-11.6-25.4-27.4-53.8-27.4s-43 15.8-53.7 27.4C446.5 748 442.4 752 433 752s-13.5-4-22.6-13.8c-10.7-11.6-25.4-27.4-53.8-27.4-12.8 0-22.7 3.3-30.8 7.9-2.6-12.6-4-25.7-4-39.1-.1-79.1 47.4-148.9 121-177.9m-18.7 347.1c-2.6-1.5-5.3-2.9-7.7-4.4-.2-.1-.4-.2-.6-.4-40.3-25.3-64.4-62.2-75.1-81.9-.2-.5-.5-.9-.7-1.4 5.4-5.2 9.5-7.5 16.5-7.5 9.5 0 13.5 4 22.6 13.8 10.7 11.6 25.4 27.4 53.8 27.4s43.1-15.8 53.8-27.4c9.1-9.8 13.2-13.8 22.6-13.8s13.5 4 22.6 13.8c10.7 11.6 25.4 27.4 53.7 27.4 28.4 0 43.1-15.8 53.8-27.4 9.1-9.8 13.2-13.8 22.6-13.8 9 0 13.1 3.6 21.2 12.3-15.4 27.9-67.2 104.2-172.1 105.1-31.3-.2-60.9-8.1-87-21.8" fill="#211F1E" strokeWidth="1" /><path d="M481.4 681c23.2 0 42-18.9 42-42s-18.9-42-42-42-42 18.9-42 42 18.9 42 42 42m0-62.9c11.5 0 20.8 9.3 20.8 20.8s-9.3 20.8-20.8 20.8-20.8-9.3-20.8-20.8 9.4-20.8 20.8-20.8m84.5-19.1c17.8 0 32.3-14.5 32.3-32.3s-14.5-32.3-32.3-32.3-32.3 14.5-32.3 32.3c.1 17.8 14.5 32.3 32.3 32.3m0-43.3c6.1 0 11 4.9 11 11s-4.9 11-11 11-11-4.9-11-11c0-6 4.9-11 11-11" fill="#211F1E" strokeWidth="1" /></svg>
                            </button>
                        </div>
                        <div
                            className="flex-none font-extrabold text-xl focus:outline-none focus:opacity-80"
                            aria-label="Brand"
                        >
                            <span className="text-black dark:text-white">EXAM</span>
                            <span className="text-[#F59558]">AURA</span>
                        </div>
                    </Link>

                    <Link href="/topics" className='hover:text-black cursor-pointer'>
                        Exams Topics
                    </Link>
                    <a className='hover:text-black cursor-pointer'>
                        About
                    </a>
                    <a className='hover:text-black cursor-pointer'>
                        Contacts
                    </a>
                </div>

                <div className="flex items-center gap-x-3 text-gray-600 font-semibold">
                    <Link href="#">
                        <button type="button" className="py-3 px-3 flex justify-center items-center size-[46px] text-sm font-medium rounded-full border border-transparent text-white hover:bg-gray-100 hover:border-gray-200 focus:outline-none disabled:opacity-50 disabled:pointer-events-none">
                            <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M10 14a4 4 0 1 0 0-8 4 4 0 0 0 0 8m0-6a2 2 0 1 1 0 4 2 2 0 0 1 0-4" fill="#000" /><path d="M.5 10a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1m15 0a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1M14 14a1 1 0 0 1 1.414 0l1.414 1.414a1 1 0 1 1-1.414 1.414L14 15.414A1 1 0 0 1 14 14M3 3a1 1 0 0 1 1.414 0l1.414 1.414a1 1 0 1 1-1.414 1.414L3 4.414A1 1 0 0 1 3 3m7 12.5a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1m0-15a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1M16.828 3a1 1 0 0 1 0 1.414l-1.414 1.414A1 1 0 1 1 14 4.414L15.414 3a1 1 0 0 1 1.414 0m-11 12.414-1.414 1.414A1 1 0 1 1 3 15.414L4.414 14a1 1 0 0 1 1.414 1.414" fill="#000" /></svg>
                        </button>
                    </Link>

                    <Link href="#">
                        <button type="button" className="py-3 px-3 flex justify-center items-center size-[46px] text-sm font-medium rounded-full border border-transparent text-white hover:bg-gray-100 hover:border-gray-200 focus:outline-none disabled:opacity-50 disabled:pointer-events-none">
                            <svg viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg"><path d="M49.62 45.27 36.22 32a18.9 18.9 0 1 0-34.1-9.2A18.91 18.91 0 0 0 32 36.27l13.3 13.3a1.45 1.45 0 0 0 2.1 0l2.1-2.1a1.68 1.68 0 0 0 .12-2.2m-28.7-11.5a12.9 12.9 0 1 1 12.9-12.9 12.87 12.87 0 0 1-12.9 12.9" fillRule="evenodd" /></svg>
                        </button>
                    </Link>

                    <Link href="#">
                        <button type="button" className="py-2 px-2 flex justify-center items-center size-[46px] text-sm font-medium rounded-full border border-transparent text-white hover:bg-gray-100 hover:border-gray-200 focus:outline-none disabled:opacity-50 disabled:pointer-events-none">
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none"><circle cx="7.5" cy="18.5" r="1.5" fill="#000" /><circle cx="16.5" cy="18.5" r="1.5" fill="#000" /><path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h2l.6 3m0 0L7 15h10l2-7z" /></svg>
                        </button>
                    </Link>
                    <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 p-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Login</button>
                </div>
            </nav>
        </header>
    )
}

export default Header