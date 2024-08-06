import { useState } from "react";

import SectionDivider from "../../component/sectiondivider.tsx";

import { Link } from "react-router-dom";
import { HiArrowUpRight } from "react-icons/hi2";
import { GoHourglass } from "react-icons/go";
import { PostShowcase } from "../../lib/dat";

export const LayoutCourse: React.FC = () => {
  const [search, setSearch] = useState("");
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };
  const filteredPosts = PostShowcase.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );
  /*
  const postStartWithSearch = PostShowcase.filter((item) =>
    item.name.toLowerCase().startsWith(search.toLowerCase()),
  ).length;
  */

  return (
    <div className="flex h-full w-full bg-transparent">
      <div className="mx-4 lg:ml-[14rem]">
        <h1 className="mt-[15rem] text-4xl font-semibold uppercase text-[#0b1215] dark:text-white">
          Course
        </h1>
        <h2 className="mt-[5rem] text-xl text-[#0b1215] dark:text-[#E2E8F0]">
          Improve your web development skills in a variety of languages and
          frameworks, including HTML, CSS, JavaScript, React, TypeScript, and
          cutting-edge methods in AI.(this is a random text)
        </h2>
        <div className="flex pt-10">
          <ul className="flex space-x-5">
            <span className="text-lg text-[#0b1215] dark:text-[#E2E8F0]">
              Total
            </span>{" "}
            <span className="inline-block rounded-lg bg-transparent px-2 py-1 text-sm text-[#0b1215] backdrop-brightness-110 dark:text-[#E2E8F0] dark:backdrop-brightness-200">
              {" "}
              {filteredPosts.length}
            </span>
          </ul>
        </div>
        <div className="3xl:w-[140rem]">
          <SectionDivider></SectionDivider>
        </div>
        <input
          type="text"
          placeholder="Search courses..."
          value={search}
          onChange={handleSearchChange}
          className="w-full rounded-md border-transparent bg-transparent p-2 brightness-95 backdrop-blur placeholder:text-[#878f9b] hover:brightness-110 focus:border-transparent focus:ring-0 focus:brightness-110 dark:text-[#E2E8F0] dark:brightness-125 dark:hover:brightness-200 dark:focus:brightness-200 sm:w-full"
        ></input>

        <div className="pt-10">
          <div className="mb-20 flex flex-col items-center justify-center space-y-10 md:grid md:grid-cols-2 md:gap-x-8 xl:grid-cols-3 2xl:grid-cols-4">
            {filteredPosts.length === 0 ? (
              <p className="mb-[4.4rem] text-4xl text-[#0b1215] dark:text-[#E2E8F0] md:mb-[40rem]">
                {" "}
                No matches for "{search}"
              </p>
            ) : (
              filteredPosts.map((item, index) => (
                <Link
                  key={index}
                  id={item.name}
                  to={`/course/${item.name}/${item.name}`}
                  className="group h-fit w-[18rem] rounded-xl bg-transparent p-4 brightness-90 backdrop-blur first:h-fit hover:brightness-105 dark:brightness-125 dark:hover:brightness-200 md:w-[22rem] first:md:col-span-2 first:md:w-full xl:w-[22rem] first:xl:col-span-3 first:2xl:col-span-4"
                >
                  <div className="">
                    <div>
                      <span className="font-semibold text-[#0b1215] dark:text-white 2xl:text-xl">
                        {item.name}
                      </span>{" "}
                      <HiArrowUpRight className="mb-1 inline-block text-sky-500 opacity-0 group-hover:opacity-100"></HiArrowUpRight>
                    </div>
                    <span className="text-justify text-[#101720] dark:text-[#7A8BA3] 2xl:text-lg">
                      {item.description}
                    </span>
                    <div className="mt-6">
                      <p className="space-x-10 text-sm">
                        <span className="text-[#0b1215] dark:text-white">
                          <GoHourglass className="mb-[0.2rem] inline-block text-[#0b1215] dark:text-white" />{" "}
                          {item.time} weeks
                        </span>
                        <span className="text-[#0b1215] dark:text-white">
                          Lessons: {item.lesson}
                        </span>
                      </p>
                    </div>
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
