'use client';

import React, { useState } from 'react';
import Image from 'next/image';

type QuestionOption = {
    option_key: string; // A, B, C, D
    option_text: string;
    option_image?: string; // Optional, as it may not always be present
};

type Question = {
    id: number;
    topic: string;
    question_no: string;
    question_image: string;
    question_text: string;
    correct_answer: string;
    reason: string;
    options: QuestionOption[];
};

const QuestionList: React.FC<{ questions: Question[] }> = ({ questions }) => {
    const [visibleAnswers, setVisibleAnswers] = useState<Record<number, boolean>>({});

    const toggleAnswer = (index: number) => {
        setVisibleAnswers((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    return (
        <>
            {questions.map((question, index) => (
                <div key={index} className="max-w-5xl min-w-10xl mx-auto p-6 bg-white dark:bg-black border border-black/20 dark:border-white/20 rounded-lg m-10 transition-all duration-300 hover:border-black/40 dark:hover:border-white/40">
                    {/* <div className="inline-flex items-center gap-1 mb-4 text-sm bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-lg font-semibold">
                        <div className="flex items-center size-[15px] text-sm font-medium">
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" className="fill-white dark:fill-black">
                                <path fillRule="evenodd" d="M12 2H6a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-8h-6a3 3 0 0 1-3-3zm9 7v-.172a3 3 0 0 0-.879-2.12l-3.828-3.83A3 3 0 0 0 14.172 2H14v6a1 1 0 0 0 1 1z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <span>{question.topic}</span>
                    </div> */}

                    <div>
                        <div className="text-base text-gray-800 dark:text-gray-200 mb-4">
                            <span className="font-semibold">{`${question.question_no}. `}</span>
                            <span className="whitespace-pre-line">{question.question_text}</span>
                        </div>

                        {question.question_image && (
                            <div className="mb-4 w-full max-w-full md:max-w-md lg:max-w-lg">
                                <Image
                                    src={question.question_image}
                                    alt={`Question ${question.question_no} image`}
                                    width={500}
                                    height={150}
                                    className="w-full max-h-[300px] max-w-full rounded-lg object-contain"
                                />
                            </div>
                        )}

                        <div className="space-y-3 mb-6">
                            {question.options.map((option) => (
                                <div key={option.option_key} className="flex items-baseline">
                                    <label
                                        htmlFor={`${question.question_no}-${option.option_key}`}
                                        className={`flex items-center p-4 w-full bg-white dark:bg-black border ${visibleAnswers[index] && question.correct_answer.includes(option.option_key) ? "border-green-400" : "border-black/20 dark:border-white/20"} rounded-lg text-sm hover:border-black/40 dark:hover:border-white/40 transition-all duration-200`}
                                    >
                                        <input
                                            type={String(question.correct_answer).length > 1 ? "checkbox" : "radio"}
                                            name={`${question.question_no}`}
                                            id={`${question.question_no}-${option.option_key}`}
                                            className={`shrink-0 mt-0.5 border-black/20 dark:border-white/20 ${String(question.correct_answer).length > 1 ? "rounded" : "rounded-full"} text-black dark:text-white focus:ring-black/20 dark:focus:ring-white/20`}
                                        />
                                        <span className="text-sm text-gray-800 dark:text-gray-200 ms-3 font-semibold">{`${option.option_key}.`}</span>
                                        <span className="text-sm text-gray-600 dark:text-gray-400 ms-3">
                                            {option.option_text}
                                            {option.option_image && (
                                                <Image
                                                    src={option.option_image}
                                                    alt={`Option ${option.option_key} image`}
                                                    width={200}
                                                    height={200}
                                                    className="mt-2 rounded-lg"
                                                />
                                            )}
                                        </span>
                                    </label>
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={() => toggleAnswer(index)}
                            className="w-full flex items-center justify-between p-3 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:bg-black/90 dark:hover:bg-white/90 transition-colors duration-200 font-semibold"
                            aria-expanded={visibleAnswers[index]}
                        >
                            <span>Show Answer</span>
                            <div className="flex justify-center items-center size-[20px]">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="fill-white dark:fill-black">
                                    <g fillRule="evenodd">
                                        <path d="M24 0v24H0V0z" fill="none"/>
                                        <path d={visibleAnswers[index] 
                                            ? "M10.94 7.94a1.5 1.5 0 0 1 2.12 0l5.658 5.656a1.5 1.5 0 1 1-2.122 2.121L12 11.122l-4.596 4.596a1.5 1.5 0 1 1-2.122-2.12z"
                                            : "M13.06 16.06a1.5 1.5 0 0 1-2.12 0l-5.658-5.656a1.5 1.5 0 1 1 2.122-2.121L12 12.879l4.596-4.596a1.5 1.5 0 0 1 2.122 2.12z"
                                        } />
                                    </g>
                                </svg>
                            </div>
                        </button>

                        {visibleAnswers[index] && (
                            <div className="mt-4 p-4 bg-white dark:bg-black border border-black/20 dark:border-white/20 rounded-lg">
                                <p className="font-semibold text-gray-800 dark:text-gray-200">
                                    {`Answer: Option ${question.correct_answer}`}
                                </p>
                                {question.reason && (
                                    <p className="whitespace-pre-line text-gray-600 dark:text-gray-400">
                                        {question.reason}
                                    </p>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </>
    );
};

export default QuestionList;
