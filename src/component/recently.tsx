import { NewestPost } from "../lib/dat";

import { Link } from "react-router-dom";
import { HiArrowUpRight } from "react-icons/hi2";

export const RecentlyPost = () => {
  return (
    <div className="space-y-[2.5rem]">
      <h1 className="text-center text-3xl font-semibold text-[#0b1215] dark:text-white">
        Recently
      </h1>
      <div className="flex flex-col gap-10">
        {NewestPost.map((item, index) => (
          <Link
            key={index}
            id={item.name}
            to={`/course/${item.name}/${item.name}`}
            className="group"
          >
            <div className="h-fit w-[20rem] rounded-xl bg-transparent p-4 brightness-105 backdrop-blur group-hover:brightness-110 dark:backdrop-brightness-125 dark:group-hover:backdrop-brightness-200 md:w-[30rem] xl:w-[40rem]">
              <div className="space-y-2"></div>
              <p>
                <span className="font-semibold text-[#0b1215] dark:text-white">
                  {item.name}
                </span>{" "}
                <HiArrowUpRight className="mb-1 inline-block text-sky-500 opacity-0 group-hover:opacity-100"></HiArrowUpRight>
              </p>
              <span className="text-[#101720] dark:text-[#7A8BA3]">
                {item.description}
              </span>
              <div className="mt-6">
                <p className="space-x-10 text-sm">
                  <span className="text-[#0b1215] dark:text-white">
                    Week : {item.time} weeks
                  </span>
                  <span className="text-[#0b1215] dark:text-white">
                    Lessons: {item.lesson}
                  </span>
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
