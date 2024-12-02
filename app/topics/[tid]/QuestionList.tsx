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
                <div key={index} className="max-w-5xl min-w-10xl mx-auto p-6 bg-white rounded-lg shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),2px_2px_4px_2px_rgba(0,0,0,0.06)] m-10">
                    <div className="inline-flex items-center gap-1 mb-2 text-xs text-black bg-gray-300 p-2 rounded-md font-semibold">
                        <div className="flex items-center size-[15px] text-sm font-medium">
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none">
                                <path fill="#000" fillRule="evenodd" d="M12 2H6a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-8h-6a3 3 0 0 1-3-3zm9 7v-.172a3 3 0 0 0-.879-2.12l-3.828-3.83A3 3 0 0 0 14.172 2H14v6a1 1 0 0 0 1 1z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <span>{question.topic}</span>
                    </div>

                    <div className="">
                        <div className="text-base text-gray-800 mb-4">
                            <span className="font-semibold">{`${question.question_no}. `}</span>
                            <span className="whitespace-pre-line">{question.question_text}</span>
                        </div>

                        {/* Display question image if exists */}
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

                        <div className="space-y-2 mb-6">
                            {question.options.map((option) => (
                                <div key={option.option_key} className="flex items-baseline">
                                    <label
                                        htmlFor={`${question.question_no}-${option.option_key}`}
                                        className={`flex items-center p-3 w-full bg-white border rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400`}
                                    >
                                        <input
                                            type={String(question.correct_answer).length > 1 ? "checkbox" : "radio"}
                                            name={`${question.question_no}`}
                                            id={`${question.question_no}-${option.option_key}`}
                                            className={`shrink-0 mt-0.5 border-gray-200 ${String(question.correct_answer).length > 1 ? "rounded" : "rounded-full"} text-blue-600 focus:ring-blue-500`}
                                        />
                                        <span className="text-sm text-gray-500 ms-3 dark:text-neutral-400 font-semibold">{`${option.option_key}.`}</span>
                                        <span className="text-sm text-gray-500 ms-3 dark:text-neutral-400">
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
                            className="w-full flex items-center justify-between p-3 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors duration-200"
                            aria-expanded={visibleAnswers[index]}
                        >
                            <span className="font-medium text-gray-800">Show Answer</span>
                            {visibleAnswers[index] ? (
                                <div className="flex justify-center items-center size-[25px] text-sm font-medium">
                                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <g fill="none" fillRule="evenodd">
                                            <path d="M24 0v24H0V0z" />
                                            <path fill="#000" d="M10.94 7.94a1.5 1.5 0 0 1 2.12 0l5.658 5.656a1.5 1.5 0 1 1-2.122 2.121L12 11.122l-4.596 4.596a1.5 1.5 0 1 1-2.122-2.12z" />
                                        </g>
                                    </svg>
                                </div>
                            ) : (
                                <div className="flex justify-center items-center size-[25px] text-sm font-medium">
                                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <g fill="none" fillRule="evenodd">
                                            <path d="M24 0v24H0V0z" />
                                            <path fill="#000" d="M13.06 16.06a1.5 1.5 0 0 1-2.12 0l-5.658-5.656a1.5 1.5 0 1 1 2.122-2.121L12 12.879l4.596-4.596a1.5 1.5 0 0 1 2.122 2.12z" />
                                        </g>
                                    </svg>
                                </div>
                            )}
                        </button>

                        {visibleAnswers[index] && (
                            <div className="mt-4 p-4 bg-blue-50 rounded-md">
                                <p className="font-semibold text-blue-800 mb-2">{`Answer: Option ${question.correct_answer}`}</p>
                                {question.reason && (
                                    <p className="whitespace-pre-line text-gray-700">
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
