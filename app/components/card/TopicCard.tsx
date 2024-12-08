import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

type TopicCardProps = {
  id: number;
  company_name: string;
  topic_name: string;
  total_qn: number;
  last_update_date: string;
};

const TopicCard = ({
  id,
  company_name,
  topic_name,
  total_qn,
  last_update_date,
}: TopicCardProps) => {
  const formattedTopicUrl = topic_name.toLowerCase().replace(/\s+/g, "-");

  return (
    <div
      key={id}
      className="group relative rounded-xl bg-white dark:bg-black border border-black/20 dark:border-white/20 p-4 transition-all duration-300 hover:border-black/40 dark:hover:border-white/40 w-full min-h-[180px] flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center gap-2">
          <h2 className="text-base sm:text-lg lg:text-xl font-bold text-gray-800 dark:text-white truncate">
            {company_name}
          </h2>
        </div>
        <div className="mt-3 sm:mt-4">
          <div className="relative group/tooltip">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-600 dark:text-gray-300 truncate">
              {topic_name}
            </h1>
            <div className="absolute left-0 -top-2 translate-y-[-100%] hidden group-hover/tooltip:block z-10">
              <div className="bg-gray-900 dark:bg-gray-100 text-white dark:text-black text-xs sm:text-sm rounded-lg py-1.5 sm:py-2 px-3 sm:px-4 max-w-[250px] sm:max-w-[300px] md:max-w-[400px] break-words">
                {topic_name}
              </div>
            </div>
          </div>
          <div className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            Last Updated: {new Date(last_update_date).toLocaleDateString()}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between text-sm sm:text-base font-semibold">
        <div className="text-gray-700 dark:text-gray-300">
          {total_qn} Questions
        </div>
        <Link
          href={`/topics/${formattedTopicUrl}`}
          className="group/btn flex items-center gap-1.5 sm:gap-2 rounded-lg bg-black hover:bg-black/90 dark:bg-white dark:hover:bg-white/90 text-white dark:text-black px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base font-semibold transition-colors duration-200"
        >
          View Questions
          <div className="transition-transform group-hover/btn:translate-x-0.5">
            <FaChevronRight className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default TopicCard; 