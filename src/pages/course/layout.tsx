import SectionDivider from "../../component/sectiondivider.tsx";

import { Link } from "react-router-dom";
import { HiArrowUpRight } from "react-icons/hi2";
import { GoHourglass } from "react-icons/go";
import { PostShowcase } from "../../lib/dat";

import { useState } from "react";

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
        <h1 className="mt-[5rem] text-4xl uppercase text-white">Course</h1>
        <h2 className="mt-[5rem] text-xl text-white">
          Improve your web development skills in a variety of languages and
          frameworks, including HTML, CSS, JavaScript, React, TypeScript, and
          cutting-edge methods in AI.(this is a random text)
        </h2>
        <div className="flex pt-10">
          <ul className="flex space-x-5 text-white">
            <a className="text-lg">Total</a>{" "}
            <a className="inline-block rounded-lg px-2 py-1 text-sm backdrop-brightness-200">
              {" "}
              {filteredPosts.length}
            </a>
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
          className="w-[12rem] rounded-md border-transparent bg-transparent p-2 text-[#d9d9d9] placeholder:text-[#878f9b] focus:border-transparent focus:ring-0 focus:backdrop-brightness-150 sm:w-full"
        ></input>

        <div className="pt-10">
          <div className="mb-20 flex flex-col items-center justify-center space-y-10 md:grid md:grid-cols-2 md:gap-x-8 xl:grid-cols-3 2xl:grid-cols-4">
            {filteredPosts.length === 0 ? (
              <p className="mb-[4.4rem] text-4xl text-white md:mb-[40rem]">
                {" "}
                No matches for "{search}"
              </p>
            ) : (
              filteredPosts.map((item, index) => (
                <Link
                  key={index}
                  id={item.name}
                  to={`/course/${item.name}/${item.name}`}
                  className="group h-fit w-[18rem] rounded-xl bg-transparent p-4 backdrop-blur backdrop-brightness-125 first:h-fit hover:backdrop-brightness-200 md:w-[22rem] first:md:col-span-2 first:md:w-full xl:w-[22rem] first:xl:col-span-3 first:2xl:col-span-4"
                >
                  <div className="">
                    <p>
                      <span className="font-semibold text-white 2xl:text-xl">
                        {item.name}
                      </span>{" "}
                      <HiArrowUpRight className="mb-1 inline-block text-sky-500 opacity-0 group-hover:opacity-100"></HiArrowUpRight>
                    </p>
                    <span className="text-justify text-[#878f9b] 2xl:text-lg">
                      {item.description}
                    </span>
                    <div className="mt-6">
                      <p className="space-x-10 text-sm text-[#878f9b]">
                        <span>
                          <GoHourglass className="mb-[0.2rem] inline-block" />{" "}
                          {item.time} weeks
                        </span>
                        <span>Lessons: {item.lesson}</span>
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
