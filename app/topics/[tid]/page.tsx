'use client'
import React, { useState } from 'react'
import { use } from 'react'
import Header from '@/app/components/header/header'
import { fetchQuestionsByTopic } from '@/app/utils/questionsFetcher'


const TopicId = ({ params }: { params: Promise<{ tid: string }> }) => {
    const { tid } = use(params);
    const questions = fetchQuestionsByTopic(tid);

    const [visibleAnswers, setVisibleAnswers] = useState<Record<number, boolean>>({});

    const toggleAnswer = (index: number) => {
        setVisibleAnswers((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };


    return (
        <>
            <Header />
            {
                questions.map((question, index) => (
                    <div key={index} className="max-w-5xl min-w-10xl mx-auto p-6 bg-white rounded-lg shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),2px_2px_4px_2px_rgba(0,0,0,0.06)] m-10">

                        <div className="inline-flex items-center gap-1 mb-2 text-xs text-black bg-gray-300 p-2 rounded-md font-semibold">
                            <div className="flex items-center size-[15px] text-sm font-medium">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none"><path fill="#000" fillRule="evenodd" d="M12 2H6a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-8h-6a3 3 0 0 1-3-3zm9 7v-.172a3 3 0 0 0-.879-2.12l-3.828-3.83A3 3 0 0 0 14.172 2H14v6a1 1 0 0 0 1 1z" clipRule="evenodd" /></svg>
                            </div>

                            <span>{question.topic}</span>
                        </div>

                        <div className="">
                            <div className="text-base text-gray-800 mb-4">
                                <span className='font-semibold'>{`${question.no}. `}</span>
                                <span className='whitespace-pre-line'>
                                    {question.question}
                                </span>
                            </div>

                            {String(question.answer).length === 1 ? (
                                <div className="space-y-2 mb-6">
                                    {Object.entries(question.options).map(([key, value], optionIndex) => (
                                        <div key={optionIndex} className="flex items-baseline">

                                            <label htmlFor={`${question.no}-${key}`} className={`flex items-center p-3 w-full bg-white border rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 ${visibleAnswers[index] && String(question.answer).includes(key) ? 'border-green-500' : 'border-gray-200'}`}>
                                                <input type="radio" name={`${question.no}`} id={`${question.no}-${key}`} className="shrink-0 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" />
                                                <span className="text-sm text-gray-500 ms-3 dark:text-neutral-400 font-semibold">{`${key}.`}</span>
                                                <span className="text-sm text-gray-500 ms-3 dark:text-neutral-400">{value}</span>
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            ) : (<div className="space-y-2 mb-6">
                                {Object.entries(question.options).map(([key, value], optionIndex) => (
                                    <div key={optionIndex} className="flex items-baseline">

                                        <label htmlFor={`${question.no}-${key}`} className={`flex items-center p-3 w-full bg-white border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 ${visibleAnswers[index] && String(question.answer).includes(key) ? 'border-green-500' : 'border-gray-200'}`}>
                                            <input type="checkbox" id={`${question.no}-${key}`} className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" />
                                            <span className="text-sm text-gray-500 ms-3 dark:text-neutral-400 font-semibold">{`${key}.`}</span>
                                            <span className="text-sm text-gray-500 ms-3 dark:text-neutral-400">{value}</span>
                                        </label>
                                    </div>
                                ))}
                            </div>)
                            }

                            <button
                                onClick={() => toggleAnswer(index)}
                                className="w-full flex items-center justify-between p-3 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors duration-200"
                                aria-expanded={visibleAnswers[index]}
                            >
                                <span className="font-medium text-gray-800">Show Answer</span>
                                {visibleAnswers[index] ? (
                                    <div className="flex justify-center items-center size-[25px] text-sm font-medium rounded-full border border-transparent text-white focus:outline-none disabled:opacity-50 disabled:pointer-events-none">
                                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035q-.016-.005-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093q.019.005.029-.008l.004-.014-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" /><path d="M10.94 7.94a1.5 1.5 0 0 1 2.12 0l5.658 5.656a1.5 1.5 0 1 1-2.122 2.121L12 11.122l-4.596 4.596a1.5 1.5 0 1 1-2.122-2.12z" fill="#000000" /></g></svg>
                                    </div>
                                ) : (
                                    <div className="flex justify-center items-center size-[25px] text-sm font-medium rounded-full border border-transparent text-white focus:outline-none disabled:opacity-50 disabled:pointer-events-none">
                                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035q-.016-.005-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093q.019.005.029-.008l.004-.014-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" /><path d="M13.06 16.06a1.5 1.5 0 0 1-2.12 0l-5.658-5.656a1.5 1.5 0 1 1 2.122-2.121L12 12.879l4.596-4.596a1.5 1.5 0 0 1 2.122 2.12z" fill="#000000" /></g></svg>
                                    </div>

                                )}
                            </button>

                            {visibleAnswers[index] && (
                                <div className="mt-4 p-4 bg-blue-50 rounded-md">
                                    <p className="font-semibold text-blue-800 mb-2">{`Answer: Option ${question.answer}`}</p>
                                    <p className="whitespace-pre-line text-gray-700">
                                        {question.reason}
                                    </p>
                                </div>
                            )}

                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default TopicId