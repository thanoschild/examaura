'use client';

import React, { useState } from 'react';
import Header from "@/app/components/header/header";
import toast from 'react-hot-toast';
import Footer from '../components/footer/Footer';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [pending, setPending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPending(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      toast.success('Message sent successfully!');
      setForm({ name: '', email: '', message: '' }); // Reset form
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setPending(false);
    }
  };

  return (
    <div className="flex flex-col">
      <Header />
      <div className="min-h-screen flex-grow flex items-center justify-center bg-white dark:bg-black">
        <div className="w-full max-w-2xl p-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
              We appreciate your feedback!
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              <span>Thank you for choosing </span>
              <span className='text-black dark:text-white font-semibold'>EXAM</span>
              <span className='text-[#F59558] font-semibold'>AURA</span>
              <span> as your trusted educational platform. We remain committed to enhancing your learning experience and continuously seek opportunities for improvement.</span>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full p-4 bg-transparent border border-black/20 dark:border-white/20 rounded-lg text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20 dark:bg-black"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full p-4 bg-transparent border border-black/20 dark:border-white/20 rounded-lg text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20 dark:bg-black"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
            </div>

            <div>
              <textarea
                placeholder="Enter your message here."
                rows={6}
                className="w-full p-4 bg-transparent border border-black/20 dark:border-white/20 rounded-lg text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20 dark:bg-black resize-none"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
              />
            </div>

            <div className="flex justify-start">
              <button
                type="submit"
                disabled={pending}
                className="px-8 py-3 rounded-lg bg-black hover:bg-black/90 dark:bg-white dark:hover:bg-white/90 text-white dark:text-black font-semibold transition-colors duration-200 disabled:opacity-50"
              >
                {pending ? 'Sending...' : 'Submit'}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
