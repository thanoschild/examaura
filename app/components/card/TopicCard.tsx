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
      className="group relative rounded-xl bg-white dark:bg-black border border-black/20 dark:border-white/20 p-6 transition-all duration-300 hover:border-black/40 dark:hover:border-white/40 w-[450px] h-[200px] flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center gap-2">
          <h2 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white truncate">
            {company_name}
          </h2>
        </div>
        <div className="mt-4">
          <div className="relative group/tooltip">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-600 dark:text-gray-300 truncate">
              {topic_name}
            </h1>
            <div className="absolute left-0 -top-2 translate-y-[-100%] hidden group-hover/tooltip:block z-10">
              <div className="bg-gray-900 dark:bg-gray-100 text-white dark:text-black text-sm rounded-lg py-2 px-4 max-w-[400px] break-words">
                {topic_name}
              </div>
            </div>
          </div>
          <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Last Updated: {new Date(last_update_date).toLocaleDateString()}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between text-base font-semibold">
        <div className="text-gray-700 dark:text-gray-300">
          {total_qn} Questions
        </div>
        <Link
          href={`/topics/${formatTopicName(topic_name)}`}
          className="group/btn flex items-center gap-2 rounded-lg bg-black hover:bg-black/90 dark:bg-white dark:hover:bg-white/90 text-white dark:text-black px-4 py-2 font-semibold transition-colors duration-200"
        >
          View Questions
          <div className="transition-transform group-hover/btn:translate-x-0.5">
            <FaChevronRight className="w-3 h-3" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default TopicCard; 