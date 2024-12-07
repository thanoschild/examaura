"use client";

import React, { use, useState } from "react";
import Header from "@/app/components/header/header";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Props = {};

const ResetPassword = ({ params }: { params: Promise<{ token: string }> }) => {
  const router = useRouter();
  const { token } = use(params);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setMessage('Passwords do not match');
      return;
    }

    if (newPassword.length < 6) {
      setMessage('Password must be at least 6 character long');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/auth/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          token: token,
          newPassword
        })
      });

      const data = await res.json();

      if (res.ok) {
        setMessage('Password reset successful');
        setTimeout(() => router.push('/auth/sign-in'), 2000);
      } else {
        setMessage(data.error || 'Something went wrong');
      }
    } catch (error) {
      setMessage('Failed to reset password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow flex items-center justify-center bg-white dark:bg-black">
        <div className="w-full max-w-md mt-7">
          <div className="p-4 sm:p-7">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
                Create new password
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Enter your new password to complete the reset.
              </p>
            </div>

            <div className="mt-5">
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm mb-2 text-gray-800 dark:text-white"
                    >
                      Password
                    </label>
                    <div>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        className="w-full p-4 bg-transparent border border-black/20 dark:border-white/20 rounded-lg text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20 dark:bg-black"
                        required
                        aria-describedby="password-error"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        disabled={loading}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="confirmPassword"
                      className="block text-sm mb-2 text-gray-800 dark:text-white"
                    >
                      Confirm Password
                    </label>
                    <div>
                      <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        className="w-full p-4 bg-transparent border border-black/20 dark:border-white/20 rounded-lg text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20 dark:bg-black"
                        required
                        aria-describedby="confirm-password-error"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        disabled={loading}
                      />
                    </div>
                  </div>

                  {message && (
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 text-center">
                      {message}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 px-4 rounded-lg bg-black hover:bg-black/90 dark:bg-white dark:hover:bg-white/90 text-white dark:text-black font-semibold transition-colors duration-200 disabled:opacity-50"
                  >
                    {loading ? 'Resetting...' : 'Reset Password'}
                  </button>

                  <div className="text-center">
                    <Link
                      href="/auth/sign-in"
                      className="text-sm text-black dark:text-white hover:opacity-80"
                    >
                      Back to sign in
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
