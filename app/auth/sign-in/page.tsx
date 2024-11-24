'use client'

import Header from "@/app/components/header/header";
import { signIn } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

type Props = {};

const Login = (props: Props) => {
  const router = useRouter();
  const [form, setForm] = useState({
    email: "",
    password: ""
  })
  const [pending, setPending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
     e.preventDefault();
     setPending(true);

     try {
      const res = await signIn("credentials", {
        redirect: false,
        email: form.email,  
        password: form.password,
      });
  
      if (res?.error) {
        toast.error(res.error);
      } else if (res?.ok) {
        router.push('/'); 
        toast.success("login successfully")
      }
    } catch (error) {
      console.error('Sign in error:', error);
      toast.error('Something went wrong!');
    } finally {
      setPending(false);
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow flex items-center justify-center bg-gray-100 dark:bg-neutral-800">
        <div className="w-full max-w-md mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-neutral-900 dark:border-neutral-700">
          <div className="p-4 sm:p-7">
            <div className="text-center">
              <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                Sign in
              </h1>
              <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
                Don't have an account yet?
                <Link
                  className="text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500"
                  href="/auth/sign-up"
                >
                  Sign up here
                </Link>
              </p>
            </div>
            <div className="mt-5">
              <button
                type="button"
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
              >
                <svg
                  className="w-4 h-auto"
                  width={46}
                  height={47}
                  viewBox="0 0 46 47"
                  fill="none"
                >
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
              </button>
              <button
                type="button"
                className="w-full mt-3 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
              >
                <svg width={20} height={20} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24m3.163 21.783h-.093a.5.5 0 0 1-.382-.14.5.5 0 0 1-.14-.372v-1.406q.01-.701.01-1.416a3.7 3.7 0 0 0-.151-1.028 1.83 1.83 0 0 0-.542-.875 8 8 0 0 0 2.038-.471 4.05 4.05 0 0 0 1.466-.964c.407-.427.71-.943.885-1.506a6.8 6.8 0 0 0 .3-2.13 4.1 4.1 0 0 0-.26-1.476 3.9 3.9 0 0 0-.795-1.284 2.8 2.8 0 0 0 .162-.582q.05-.3.05-.604 0-.392-.09-.773a5 5 0 0 0-.221-.763.3.3 0 0 0-.111-.02h-.11q-.346.004-.674.111a5 5 0 0 0-.703.26 7 7 0 0 0-.661.343q-.322.191-.573.362a9.6 9.6 0 0 0-5.143 0 14 14 0 0 0-.572-.362 6 6 0 0 0-.672-.342 4.5 4.5 0 0 0-.705-.261 2.2 2.2 0 0 0-.662-.111h-.11a.3.3 0 0 0-.11.02 6 6 0 0 0-.23.763q-.08.382-.081.773 0 .304.051.604t.16.582A3.9 3.9 0 0 0 5.702 10a4.1 4.1 0 0 0-.263 1.476 6.9 6.9 0 0 0 .292 2.12c.181.563.483 1.08.884 1.516.415.422.915.75 1.466.964.653.25 1.337.41 2.033.476a1.8 1.8 0 0 0-.452.633 3 3 0 0 0-.2.744 2.75 2.75 0 0 1-1.175.27 1.8 1.8 0 0 1-1.065-.3 2.9 2.9 0 0 1-.752-.824 3 3 0 0 0-.292-.382 2.7 2.7 0 0 0-.372-.343 1.8 1.8 0 0 0-.432-.24 1.2 1.2 0 0 0-.481-.101q-.06.002-.12.01a.7.7 0 0 0-.162.02.4.4 0 0 0-.13.06.12.12 0 0 0-.06.1.33.33 0 0 0 .14.242q.14.111.232.171l.03.021q.2.155.382.333.169.148.3.33.136.178.231.381.11.2.231.463c.188.474.522.875.954 1.145.453.243.961.364 1.476.351q.262 0 .522-.03.258-.041.515-.091v1.743a.5.5 0 0 1-.533.521h-.062a10.286 10.286 0 1 1 6.324 0z" /></svg>
                Sign in with Github
              </button>
              <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-neutral-500 dark:before:border-neutral-600 dark:after:border-neutral-600">
                Or
              </div>
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
                        disabled={pending}
                        value={form.email}
                        onChange={(e) => setForm({...form, email:e.target.value})}
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
                  {/* Form Group */}
                  <div>
                    <div className="flex justify-between items-center">
                      <label
                        htmlFor="password"
                        className="block text-sm mb-2 dark:text-white"
                      >
                        Password
                      </label>
                      <a
                        className="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500"
                        href="#"
                      >
                        Forgot password?
                      </a>
                    </div>
                    <div className="relative border border-gray-200 rounded-lg">
                      <input
                        type="password"
                        id="password"
                        name="password"
                        className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                        required
                        aria-describedby="password-error"
                        disabled={pending}
                        value={form.password}
                        onChange={(e) => setForm({...form, password:e.target.value})}
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
                      id="password-error"
                    >
                      8+ characters required
                    </p>
                  </div>
                  {/* End Form Group */}
                  {/* Checkbox */}
                  <div className="flex items-center">
                    <div className="flex">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                      />
                    </div>
                    <div className="ms-3">
                      <label
                        htmlFor="remember-me"
                        className="text-sm dark:text-white"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  {/* End Checkbox */}
                  <button
                    type="submit"
                    className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    Sign in
                  </button>
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

export default Login;
