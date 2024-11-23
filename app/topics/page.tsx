import React from 'react'
import Header from '../components/header/header'
import Link from 'next/link'

type Props = {}

const data = [
    {
        "id": 1,
        "topic": "Associate Cloud Engineer",
        "company": "Google Cloud",
        "totalQuestions": 279,
        "lastUpdated": "2 weeks ago"
    },
    {
        "id": 2,
        "topic": "Professional Data Engineer",
        "company": "Google Cloud",
        "totalQuestions": 311,
        "lastUpdated": "5 days ago"
    },
    {
        "id": 3,
        "topic": "Professional Cloud Architect",
        "company": "Google Cloud",
        "totalQuestions": 341,
        "lastUpdated": "1 month ago"
    },
]


const Topics = (props: Props) => {

    const formatTopicName = (topic: string) => {
        return topic.toLowerCase().replace(/\s+/g, '-');
    }

    return (
        <>
            <Header />
            <div className="flex items-center justify-center lg:m-16 ">
                {/* Use flex-wrap to allow the items to wrap to the next line if needed */}
                <div className="w-full max-w-[94rem] p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                    {data.map((item) => (
                        <div
                            key={item.id}
                            className="group relative overflow-hidden rounded-xl border bg-gradient-to-br from-white to-gray-50 p-6 shadow-md transition-all duration-300 hover:shadow-lg dark:from-gray-900 dark:to-gray-950"
                        >

                            <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-br from-black/30 to-black/0 blur-3xl transition-all duration-500 group-hover:scale-150" />

                            <div className="flex items-center gap-2 text-primary">
                                <div className="flex justify-center items-center size-[30px] text-sm font-medium rounded-full border border-transparent text-white focus:outline-none disabled:opacity-50 disabled:pointer-events-none">
                                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="text-gray-900 fill-current font-thin"><path d="M15.79 9.159a6.65 6.65 0 0 1 4.37 1.448l-.014-.01a6.47 6.47 0 0 1 2.328 4.975l-.001.127v-.006.647l.063-.001a3.245 3.245 0 0 1 0 6.49l-.066-.001h.003-6.489l-.01.011v-.05H9.483c-.483 0-.942-.106-1.353-.296l.02.008h.001a3.25 3.25 0 0 1-1.907-2.956 3.245 3.245 0 0 1 6.193-1.359l.008.02 3.765-3.764a8.45 8.45 0 0 0-5.018-3.134l-.054-.009c.022-.012.05-.032.067-.029a6.47 6.47 0 0 1 4.576-2.112h.01zm.447-5.181-.271-.003c-5.36 0-9.877 3.612-11.249 8.535l-.02.082c.066-.025-.069.016 0 0-2.242 1.526-3.696 4.066-3.696 6.945a8.36 8.36 0 0 0 3.365 6.711l.022.016.008-.009-.009.037a8.33 8.33 0 0 0 5.057 1.695h6.501l.037.037h6.554a8.44 8.44 0 0 0 4.755-15.414l-.029-.019a11.75 11.75 0 0 0-3.514-5.678l-.012-.01-.054.054.008-.062a11.62 11.62 0 0 0-7.443-2.916h-.014z" strokeWidth="0" /></svg>
                                </div>
                                <h2 className="text-2xl font-bold">{item.company}</h2>
                            </div>
                            <div className="mt-4 space-y-2">
                                <h1 className="text-4xl font-bold tracking-tight text-gray-600 dark:text-gray-300">
                                    {item.topic}
                                </h1>

                                <div className="mt-6 flex items-center justify-between text-base font-semibold">
                                    <div className="flex items-center gap-2 text-gray-700">
                                        {item.totalQuestions} Questions
                                    </div>
                                    <Link
                                        href={`/topics/${formatTopicName(item.topic)}`}
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
    )
}

export default Topics