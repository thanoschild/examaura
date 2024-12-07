import React from "react";
import Header from "../components/header/header";
import TopicCard from "../components/card/TopicCard";


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
    return topic.toLowerCase().replace(/\s+/g, "-");
  };

  // Group topics by company_name
  const groupedTopics = topics.reduce((acc, topic) => {
    const company = topic.company_name;
    if (!acc[company]) {
      acc[company] = [];
    }
    acc[company].push(topic);
    return acc;
  }, {} as Record<string, Topic[]>);

  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center lg:m-16 p-4">
        {Object.entries(groupedTopics).map(([company, companyTopics]) => (
          <div key={company} className="w-full max-w-[90rem] mb-12">
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                {company}
              </h2>
              <div className="flex-grow h-0.5 bg-gray-200 dark:bg-gray-700"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
              {companyTopics.map((item) => (
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
        ))}
      </div>
    </>
  );
};

export default Topics;
