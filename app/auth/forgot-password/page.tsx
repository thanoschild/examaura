'use client'

import React, { useState } from "react";
import Header from "@/app/components/header/header";
import Link from "next/link";
import Footer from "@/app/components/footer/Footer";

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
        <div className="relative">
            <div className="h-screen flex flex-col">
                <Header />
                <div className="flex-1 flex items-center justify-center bg-white dark:bg-black">
                    <div className="w-full max-w-md px-4">
                        <div className="p-4 sm:p-7">
                            <div className="text-center mb-8">
                                <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
                                    Forgot password?
                                </h1>
                                <p className="text-lg text-gray-600 dark:text-gray-400">
                                    Remember your password?{" "}
                                    <Link
                                        className="text-black dark:text-white hover:opacity-80 font-semibold"
                                        href="/auth/sign-in"
                                    >
                                        Sign in here
                                    </Link>
                                </p>
                            </div>

                            <div className="mt-5">
                                <form onSubmit={handleSubmit}>
                                    <div className="space-y-4">
                                        <div>
                                            <label
                                                htmlFor="email"
                                                className="block text-sm mb-2 text-gray-800 dark:text-white"
                                            >
                                                Email address
                                            </label>
                                            <div>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    className="w-full p-4 bg-transparent border border-black/20 dark:border-white/20 rounded-lg text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20 dark:bg-black"
                                                    required
                                                    aria-describedby="email-error"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    disabled={loading}
                                                />
                                            </div>
                                            {message && (
                                                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 text-center">
                                                    {message}
                                                </p>
                                            )}
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={loading}
                                            className="w-full py-3 px-4 rounded-lg bg-black hover:bg-black/90 dark:bg-white dark:hover:bg-white/90 text-white dark:text-black font-semibold transition-colors duration-200 disabled:opacity-50"
                                        >
                                            {loading ? 'Sending...' : 'Reset password'}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative">
                <Footer />
            </div>
        </div>
    );
};

export default ForgetPassword;
