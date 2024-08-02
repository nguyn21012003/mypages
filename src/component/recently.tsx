import { NewestPost } from "../lib/dat";

import { Link } from "react-router-dom";
import { HiArrowUpRight } from "react-icons/hi2";

export const RecentlyPost = () => {
  return (
    <div className="space-y-[2.5rem]">
      <h1 className="text-center text-3xl text-white">Recently</h1>
      <div className="flex flex-col gap-10">
        {NewestPost.map((item, index) => (
          <Link
            key={index}
            id={item.name}
            to={`/course/${item.name}/${item.name}`}
            className="group"
          >
            <div className="h-fit w-[20rem] rounded-xl bg-transparent p-4 backdrop-blur backdrop-brightness-125 group-hover:backdrop-brightness-200 md:w-[30rem] xl:w-[40rem]">
              <div className="space-y-2"></div>
              <p>
                <span className="font-semibold text-white">{item.name}</span>{" "}
                <HiArrowUpRight className="mb-1 inline-block text-sky-500 opacity-0 group-hover:opacity-100"></HiArrowUpRight>
              </p>
              <span className="text-white">{item.description}</span>
              <div className="mt-6">
                <p className="space-x-10 text-sm text-white">
                  <span>Week : {item.time} weeks</span>
                  <span>Lessons: {item.lesson}</span>
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
