'use client'

import React, { useState } from "react";
import Header from "@/app/components/header/header";
import Link from "next/link";

type Props = {};

const ForgetPassword = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch('/api/auth/forgot-password', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email })
            });

            const data = await res.json();

            if (res.ok) {
                setMessage('Check your email for reset instructions');
            } else {
                setMessage(data.error || 'Something went wrong');
            }
        } catch (error) {
            setMessage('Failed to send reset email');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-grow flex items-center justify-center bg-gray-100 dark:bg-neutral-800">
                <div className="w-full max-w-md mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-neutral-900 dark:border-neutral-700">
                    <div className="p-4 sm:p-7">
                        <div className="text-center">
                            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                                Forgot password?
                            </h1>
                            <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
                                Remember your password?
                                <Link
                                    className="text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500"
                                    href="/auth/sign-in"
                                >
                                    Sign in here
                                </Link>
                            </p>
                        </div>
                        <div className="mt-5">
                            {/* Form */}
                            <form onSubmit={handleSubmit}>
                                <div className="grid gap-y-4">
                                    {/* Form Group */}
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block text-sm mb-2 dark:text-white"
                                        >
                                            Email address
                                        </label>
                                        <div className="relative border border-gray-200 rounded-lg">
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                                required
                                                aria-describedby="email-error"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                            <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                                                <svg
                                                    className="size-5 text-red-500"
                                                    width={16}
                                                    height={16}
                                                    fill="currentColor"
                                                    viewBox="0 0 16 16"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <p
                                            className="hidden text-xs text-red-600 mt-2"
                                            id="email-error"
                                        >
                                            Please include a valid email address so we can get back to
                                            you
                                        </p>
                                    </div>
                                    {/* End Form Group */}
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                                    >
                                        {loading ? 'Sending...' : 'Reset password'}
                                    </button>
                                    {message && (
                                        <p className="mt-2 text-sm text-center">
                                            {message}
                                        </p>
                                    )}
                                </div>
                            </form>
                            {/* End Form */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgetPassword;
