import React from "react";
import Header from "../components/header/header";
import TopicCard from "../components/card/TopicCard";
import ExamSelector from "../components/search/ExamSelector";
import SearchTopic from "./SearchTopic";
import Footer from "../components/footer/Footer";


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
    <div className="relative">
      
      <div className="h-screen flex flex-col">
        <Header />
        <div className="flex flex-col items-center justify-center lg:m-16 p-4">
          <div className="flex items-center justify-center">
            <SearchTopic />
          </div>
        </div>
      </div>

      <div className="relative">
        <Footer />
      </div>
    </div>
  );
};

export default Topics;
