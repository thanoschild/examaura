'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { FaChevronRight } from "react-icons/fa";
import TopicCard from '../card/TopicCard';

type Topic = {
  id: number;
  topic_name: string;
  company_name: string;
  total_qn: number;
  last_update_date: string;
};

const ExamSelector = () => {
  const [topics, setTopics] = useState<Topic[]>([]);
  const [selectedProvider, setSelectedProvider] = useState('');
  const [providers, setProviders] = useState<string[]>([]);
  const [filteredExams, setFilteredExams] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isExamOpen, setIsExamOpen] = useState(false);
  const [selectedExam, setSelectedExam] = useState('');
  const examDropdownRef = useRef<HTMLDivElement>(null);

  // Group topics by company_name
  const groupedTopics = topics.reduce((acc, topic) => {
    const company = topic.company_name;
    if (!acc[company]) {
      acc[company] = [];
    }
    acc[company].push(topic);
    return acc;
  }, {} as Record<string, Topic[]>);

  const formatTopicName = (topic: string) => {
    return topic.toLowerCase().replace(/\s+/g, "-");
  };

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const res = await fetch('/api/topics');
        const data = await res.json();
        setTopics(data);

        // Extract unique providers
        const uniqueProviders = Array.from(new Set(data.map((topic: Topic) => topic.company_name))) as string[];
        setProviders(uniqueProviders);
      } catch (error) {
        console.error('Error fetching topics:', error);
      }
    };

    fetchTopics();
  }, []);

  useEffect(() => {
    if (selectedProvider) {
      const exams = topics
        .filter(topic => topic.company_name === selectedProvider)
        .map(topic => topic.topic_name);
      setFilteredExams(exams);
    } else {
      setFilteredExams([]);
    }
  }, [selectedProvider, topics]);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
      if (examDropdownRef.current && !examDropdownRef.current.contains(event.target as Node)) {
        setIsExamOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Dropdowns Section */}
      <div className="flex flex-col items-center justify-center space-y-6 mt-20">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">
          Select Your Certification Path
        </h1>

        <div className="flex flex-col md:flex-row gap-4 w-full px-4">
          <div className="w-full md:min-w-[400px]">
            <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
              Select Certification Provider
            </label>
            <div className="relative inline-flex w-full" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-3 px-4 inline-flex justify-between items-center gap-x-2 text-sm font-medium rounded-lg border-2 border-gray-800 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700"
              >
                {selectedProvider || 'Select Provider'}
                <svg
                  className={`size-4 text-gray-600 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              {isOpen && (
                <div className="absolute left-0 top-full w-full z-10 mt-2 bg-white dark:bg-neutral-800 shadow-md rounded-lg p-2">
                  {providers.map((provider) => (
                    <button
                      key={provider}
                      onClick={() => {
                        setSelectedProvider(provider);
                        setIsOpen(false);
                      }}
                      className="w-full flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-700 focus:outline-none"
                    >
                      {provider}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="w-full md:min-w-[400px]">
            <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
              Select Certification Exam
            </label>
            <div className="relative inline-flex w-full" ref={examDropdownRef}>
              <button
                type="button"
                onClick={() => setIsExamOpen(!isExamOpen)}
                disabled={!selectedProvider}
                className="w-full py-3 px-4 inline-flex justify-between items-center gap-x-2 text-sm font-medium rounded-lg border-2 border-gray-900 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700"
              >
                {selectedExam || 'Select Exam'}
                <svg
                  className={`size-4 text-gray-600 transition-transform ${isExamOpen ? 'rotate-180' : ''}`}
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              {isExamOpen && filteredExams.length > 0 && (
                <div className="absolute left-0 top-full w-full z-10 mt-2 bg-white dark:bg-neutral-800 shadow-md rounded-lg p-2">
                  {filteredExams.map((exam) => (
                    <button
                      key={exam}
                      onClick={() => {
                        setSelectedExam(exam);
                        setIsExamOpen(false);
                      }}
                      className="w-full flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-700 focus:outline-none"
                    >
                      {exam}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Topics Display Section */}
      <div className="flex flex-col items-center justify-center lg:m-16 p-4 w-full">
        {/* Selected Topic Section */}
        {selectedExam && (
          <div className="w-full max-w-[90rem] mb-12">
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Selected Certification
              </h2>
              <div className="flex-grow h-0.5 bg-gray-200 dark:bg-gray-700"></div>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {topics
                .filter(topic => topic.topic_name === selectedExam)
                .map(item => (
                  <TopicCard
                    key={item.id}
                    id={item.id}
                    company_name={item.company_name}
                    topic_name={item.topic_name}
                    total_qn={item.total_qn}
                    last_update_date={item.last_update_date}
                    formatTopicName={formatTopicName}
                  />
                ))}
            </div>
          </div>
        )}

        {/* Related Topics Section */}
        {selectedExam && (
          <div className="w-full max-w-[90rem] mb-12">
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                More from {selectedProvider}
              </h2>
              <div className="flex-grow h-0.5 bg-gray-200 dark:bg-gray-700"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
              {topics
                .filter(topic =>
                  topic.company_name === selectedProvider &&
                  topic.topic_name !== selectedExam
                )
                .map(item => (
                  <TopicCard
                    key={item.id}
                    id={item.id}
                    company_name={item.company_name}
                    topic_name={item.topic_name}
                    total_qn={item.total_qn}
                    last_update_date={item.last_update_date}
                    formatTopicName={formatTopicName}
                  />
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExamSelector; 