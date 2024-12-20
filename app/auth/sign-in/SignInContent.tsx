"use client";

import Header from "@/app/components/header/header";
import { signIn } from "next-auth/react";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useRouter, useSearchParams } from "next/navigation";
import Footer from '../../components/footer/footer';

const Login = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [pendingStates, setPendingStates] = useState({
    credentials: false,
    google: false,
    github: false
  });

  useEffect(() => {
    // Check for error message
    const error = searchParams.get('error');
    if (error) {
      toast.error(error);
    }

    // Check for success message
    const success = searchParams.get('success');
    if (success) {
      toast.success(success);
      router.push('/'); // Redirect to home page after successful sign in
    }

    // Clear URL parameters
    if ((error || success) && window.history.pushState) {
      const newUrl = window.location.pathname;
      window.history.pushState({}, '', newUrl);
    }
  }, [searchParams, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPendingStates(prev => ({ ...prev, credentials: true }));

    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: form.email,
        password: form.password,
      });

      if (res?.error) {
        toast.error(res.error);
      } else if (res?.ok) {
        router.push("/");
        toast.success("login successfully");
      }
    } catch (error) {
      console.error("Sign in error:", error);
      toast.error("Something went wrong!");
    } finally {
      setPendingStates(prev => ({ ...prev, credentials: false }));
    }
  };

  const handleProvider = async (
    event: React.MouseEvent<HTMLButtonElement>,
    value: "github" | "google"
  ) => {
    event.preventDefault();
    setPendingStates(prev => ({ ...prev, [value]: true }));
    
    try {
      await signIn(value, {
        callbackUrl: "/",
      });
    } catch {
      toast.error("Something went wrong!");
      setPendingStates(prev => ({ ...prev, [value]: false }));
    }
  };

  return (
    <div className="relative">
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow flex items-center justify-center bg-white dark:bg-black">
          <div className="w-full max-w-md mt-7">
            <div className="p-4 sm:p-7">
              <div className="text-center mb-8">
                <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-gray-800 dark:text-white mb-4">
                  Sign in
                </h1>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
                  Don&apos;t have an account yet?{" "}
                  <Link
                    className="text-black dark:text-white hover:opacity-80 font-semibold"
                    href="/auth/sign-up"
                  >
                    Sign up here
                  </Link>
                </p>
              </div>

              <div className="mt-5 space-y-6">
                <button
                  type="button"
                  onClick={(e) => handleProvider(e, "google")}
                  disabled={pendingStates.google}
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg bg-black dark:bg-white text-white dark:text-black hover:bg-black/90 dark:hover:bg-white/90 transition-colors duration-200 disabled:opacity-50"
                >
                  {pendingStates.google ? (
                    "Signing in..."
                  ) : (
                    <>
                      <svg className="w-4 h-auto" width={46} height={47} viewBox="0 0 46 47" fill="none">
                        <path
                          d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z"
                          fill="#4285F4"
                        />
                        <path
                          d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z"
                          fill="#34A853"
                        />
                        <path
                          d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z"
                          fill="#FBBC05"
                        />
                        <path
                          d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z"
                          fill="#EB4335"
                        />
                      </svg>
                      Sign in with Google
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={(e) => handleProvider(e, "github")}
                  disabled={pendingStates.github}
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg bg-black dark:bg-white text-white dark:text-black hover:bg-black/90 dark:hover:bg-white/90 transition-colors duration-200 disabled:opacity-50"
                >
                  {pendingStates.github ? (
                    "Signing in..."
                  ) : (
                    <>
                      <svg width={20} height={20} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="fill-current">
                        <path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24m3.163 21.783h-.093a.5.5 0 0 1-.382-.14.5.5 0 0 1-.14-.372v-1.406q.01-.701.01-1.416a3.7 3.7 0 0 0-.151-1.028 1.83 1.83 0 0 0-.542-.875 8 8 0 0 0 2.038-.471 4.05 4.05 0 0 0 1.466-.964c.407-.427.71-.943.885-1.506a6.8 6.8 0 0 0 .3-2.13 4.1 4.1 0 0 0-.26-1.476 3.9 3.9 0 0 0-.795-1.284 2.8 2.8 0 0 0 .162-.582q.05-.3.05-.604 0-.392-.09-.773a5 5 0 0 0-.221-.763.3.3 0 0 0-.111-.02h-.11q-.346.004-.674.111a5 5 0 0 0-.703.26 7 7 0 0 0-.661.343q-.322.191-.573.362a9.6 9.6 0 0 0-5.143 0 14 14 0 0 0-.572-.362 6 6 0 0 0-.672-.342 4.5 4.5 0 0 0-.705-.261 2.2 2.2 0 0 0-.662-.111h-.11a.3.3 0 0 0-.11.02 6 6 0 0 0-.23.763q-.08.382-.081.773 0 .304.051.604t.16.582A3.9 3.9 0 0 0 5.702 10a4.1 4.1 0 0 0-.263 1.476 6.9 6.9 0 0 0 .292 2.12c.181.563.483 1.08.884 1.516.415.422.915.75 1.466.964.653.25 1.337.41 2.033.476a1.8 1.8 0 0 0-.452.633 3 3 0 0 0-.2.744 2.75 2.75 0 0 1-1.175.27 1.8 1.8 0 0 1-1.065-.3 2.9 2.9 0 0 1-.752-.824 3 3 0 0 0-.292-.382 2.7 2.7 0 0 0-.372-.343 1.8 1.8 0 0 0-.432-.24 1.2 1.2 0 0 0-.481-.101q-.06.002-.12.01a.7.7 0 0 0-.162.02.4.4 0 0 0-.13.06.12.12 0 0 0-.06.1.33.33 0 0 0 .14.242q.14.111.232.171l.03.021q.2.155.382.333.169.148.3.33.136.178.231.381.11.2.231.463c.188.474.522.875.954 1.145.453.243.961.364 1.476.351q.262 0 .522-.03.258-.041.515-.091v1.743a.5.5 0 0 1-.533.521h-.062a10.286 10.286 0 1 1 6.324 0z" />
                      </svg>
                      Sign in with Github
                    </>
                  )}
                </button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-black/20 dark:border-white/20"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white dark:bg-black text-gray-500">Or</span>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="email"
                      placeholder="Email address"
                      className="w-full p-4 bg-transparent border border-black/20 dark:border-white/20 rounded-lg text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20 dark:bg-black"
                      required
                      disabled={pendingStates.credentials}
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>

                  <div>
                    <input
                      type="password"
                      placeholder="Password"
                      className="w-full p-4 bg-transparent border border-black/20 dark:border-white/20 rounded-lg text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20 dark:bg-black"
                      required
                      disabled={pendingStates.credentials}
                      value={form.password}
                      onChange={(e) => setForm({ ...form, password: e.target.value })}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 rounded border-black/20 dark:border-white/20 bg-transparent text-black dark:text-white focus:ring-black/20 dark:focus:ring-white/20"
                      />
                      <label htmlFor="remember-me" className="ml-2 text-sm text-gray-800 dark:text-gray-200">
                        Remember me
                      </label>
                    </div>
                    <Link
                      href="/auth/forgot-password"
                      className="text-sm text-black dark:text-white hover:opacity-80"
                    >
                      Forgot password?
                    </Link>
                  </div>

                  <button
                    type="submit"
                    disabled={pendingStates.credentials}
                    className="w-full py-3 px-4 rounded-lg bg-black hover:bg-black/90 dark:bg-white dark:hover:bg-white/90 text-white dark:text-black font-semibold transition-colors duration-200 disabled:opacity-50"
                  >
                    {pendingStates.credentials ? "Signing in..." : "Sign in"}
                  </button>
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

export default Login;
