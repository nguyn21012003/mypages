import { Link } from "react-router-dom";
import TopicList from "../../component/counting.tsx";
import SearchBar from "../../component/searchbar";
import SectionDivider from "../../component/sectiondivider.tsx";

import NavBar from "../../component/poptitle.tsx";

export const LayoutCourse: React.FC = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div>
        <p>
          <a href="" className="text-white">
            Course
          </a>
        </p>
        <p>
          <a className="text-center text-white">
            Explore the Theoretical Physics Courses
          </a>
        </p>
        <p>
          <a className="text-center text-white">
            Search for courses, materials & teaching resources
          </a>
        </p>
        <div className="-mb-[0.55rem] flex gap-x-5">
          <p className="flex">
            <Link
              to=""
              className="group flex items-center rounded-lg p-2 font-Poppins text-base focus:underline focus:decoration-sky-600 active:underline dark:hover:bg-gray-700"
            >
              <img className="text-[#878f9b] group-focus:text-sky-500" />
              <span className="ml-3 text-[#878f9b] group-focus:text-white dark:text-white">
                De cac khoa hoc
              </span>
            </Link>
            <TopicList></TopicList>
          </p>
          <p>
            <a href="">Browse</a>
          </p>
          <p>
            <a href="">Browse</a>
          </p>
        </div>
        <SectionDivider></SectionDivider>
        <div>
          <SearchBar></SearchBar>
        </div>
      </div>
      <NavBar></NavBar>
    </div>
  );
};
