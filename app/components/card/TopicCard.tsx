import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

type TopicCardProps = {
  id: number;
  company_name: string;
  topic_name: string;
  total_qn: number;
  last_update_date: string;
  formatTopicName: (topic: string) => string;
};

const TopicCard = ({
  id,
  company_name,
  topic_name,
  total_qn,
  last_update_date,
  formatTopicName,
}: TopicCardProps) => {
  return (
    <div
      key={id}
      className="group relative rounded-xl bg-gradient-to-br from-gray-50 to-gray-400 p-6 shadow-md transition-all duration-300 hover:shadow-lg dark:from-gray-900 dark:to-[#45454b] w-[450px]"
    >
      <div className="flex items-center gap-2 text-primary">
        <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100">
          {company_name}
        </h2>
      </div>
      <div className="mt-4 space-y-2">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-600 dark:text-gray-300">
          {topic_name}
        </h1>
        <div className="mt-2 text-sm text-gray-500">
          Last Updated: {new Date(last_update_date).toLocaleDateString()}
        </div>
        <div className="mt-6 flex items-center justify-between text-base font-semibold">
          <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
            {total_qn} Questions
          </div>
          <Link
            href={`/topics/${formatTopicName(topic_name)}`}
            className="group/btn flex items-center gap-1 rounded-lg bg-gray-900 text-white dark:bg-gray-200 dark:text-black px-4 py-2 text-base font-bold text-primary transition-colors hover:text-primary-foreground"
          >
            View Questions
            <div className="flex justify-center items-center size-[20px] text-sm font-bold rounded-full border border-transparent hover:text-white focus:outline-none disabled:opacity-50 disabled:pointer-events-none transition-transform group-hover/btn:translate-x-0.5">
              <FaChevronRight />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopicCard; 