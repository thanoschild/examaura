import React from 'react';
import Header from '../components/header/header';
import Link from 'next/link';

type Topic = {
    id: number;
    topic_name: string;
    company_name: string;
    total_qn: number;
    last_update_date: string; 
};

const Topics = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/topics`);
    const topics: Topic[] = await res.json();

    const formatTopicName = (topic: string) => {
        return topic.toLowerCase().replace(/\s+/g, '-');
    };

    return (
        <>
            <Header />
            <div className="flex items-center justify-center lg:m-16 p-4">
                <div className="w-full max-w-[90rem] min-w-[80rem] grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
                    {topics.map((item) => (
                        <div
                            key={item.id}
                            className="group relative rounded-xl border bg-gradient-to-br from-white to-gray-50 p-6 shadow-md transition-all duration-300 hover:shadow-lg dark:from-gray-900 dark:to-gray-950 min-w-[300px]"
                            >
                            {/* <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-br from-black/30 to-black/0 blur-3xl transition-all duration-500 group-hover:scale-150" /> */}
                            <div className="flex items-center gap-2 text-primary">
                                <h2 className="text-lg sm:text-xl font-bold">{item.company_name}</h2>
                            </div>
                            <div className="mt-4 space-y-2">
                                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-600 dark:text-gray-300">
                                    {item.topic_name}
                                </h1>
                                <div className="mt-2 text-sm text-gray-500">
                                    Last Updated: {new Date(item.last_update_date).toLocaleDateString()}
                                </div>
                                <div className="mt-6 flex items-center justify-between text-base font-semibold">
                                    <div className="flex items-center gap-2 text-gray-700">
                                        {item.total_qn} Questions
                                    </div>
                                    <Link
                                        href={`/topics/${formatTopicName(item.topic_name)}`}
                                        className="group/btn flex items-center gap-1 rounded-lg bg-gray-200 px-4 py-2 text-base font-bold text-primary transition-colors hover:text-primary-foreground"
                                    >
                                        View Questions
                                        <div className="flex justify-center items-center size-[20px] text-sm font-bold rounded-full border border-transparent hover:text-white focus:outline-none disabled:opacity-50 disabled:pointer-events-none transition-transform group-hover/btn:translate-x-0.5">
                                            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" fillOpacity=".01" d="M0 0h48v48H0z" /><path d="m19 12 12 12-12 12" stroke="#000" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" /></svg>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Topics;