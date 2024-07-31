import SectionDivider from "../../component/sectiondivider.tsx";

import { PostCourse } from "./post.tsx";

export const LayoutCourse: React.FC = () => {
  return (
    <div className="flex h-full w-full bg-transparent">
      <div className="lg:ml-[14rem]">
        <p className="mt-[5rem] px-5">
          <a className="text-4xl uppercase text-white">Course</a>
        </p>
        <p className="mt-[5rem] px-5">
          <a className="text-xl text-white">
            Improve your web development skills in a variety of languages and
            frameworks, including HTML, CSS, JavaScript, React, TypeScript, and
            cutting-edge methods in AI.
          </a>
        </p>
        <div className="3xl:w-[140rem] px-5">
          <SectionDivider></SectionDivider>
        </div>
        <div className="flex space-x-10">
          <ul>
            <li>React</li>
          </ul>
          <ul className="flex space-x-5">
            <li>React</li>
            <li>React</li>
            <li>React</li>
            <li>React</li>
          </ul>
        </div>
        <div className="mb-10 space-y-10">
          <div className="flex space-x-10 px-5">
            <PostCourse></PostCourse>
            <PostCourse></PostCourse>
          </div>
          <div className="flex space-x-10 px-5">
            <PostCourse></PostCourse>
            <PostCourse></PostCourse>
          </div>
        </div>
      </div>
    </div>
  );
};
