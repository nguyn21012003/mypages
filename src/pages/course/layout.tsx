import SectionDivider from "../../component/sectiondivider.tsx";

import { Link } from "react-router-dom";
import { HiArrowUpRight } from "react-icons/hi2";
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

  return (
    <div className="flex h-full w-full bg-transparent">
      <div className="space-y-10 lg:ml-[14rem]">
        <p className="mx-5 mt-[5rem]">
          <a className="text-4xl uppercase text-white">Course</a>
        </p>
        <p className="mx-5 mt-[5rem]">
          <a className="text-xl text-white">
            Improve your web development skills in a variety of languages and
            frameworks, including HTML, CSS, JavaScript, React, TypeScript, and
            cutting-edge methods in AI.(this is a random text)
          </a>
        </p>
        <div className="3xl:w-[140rem] mx-5">
          <SectionDivider></SectionDivider>
        </div>
        <div className="flex space-x-10">
          <ul className="mx-5 flex space-x-5">
            <li>Browse {PostShowcase.length}</li>
          </ul>
        </div>
        <div className="3xl:w-[140rem]">
          <input
            type="text"
            placeholder="Search courses..."
            value={search}
            onChange={handleSearchChange}
            className="mx-5 w-[17rem] rounded-md border-transparent bg-transparent p-2 text-[#d9d9d9] focus:border-transparent focus:ring-0 focus:backdrop-brightness-150 sm:w-full"
          ></input>
        </div>
        <div className="">
          <div className="mb-20 flex flex-col items-center justify-center space-y-10">
            {filteredPosts.map((item, index) => (
              <Link
                key={index}
                id={item.name}
                to={`/course/${item.name}/${item.name}`}
                className="group"
              >
                <div className="h-fit w-[18rem] rounded-xl bg-transparent p-4 backdrop-blur backdrop-brightness-125 group-hover:backdrop-brightness-200 md:w-[30rem] xl:w-[40rem]">
                  <p>
                    <span className="font-semibold text-white">
                      {item.name}
                    </span>{" "}
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
      </div>
    </div>
  );
};
