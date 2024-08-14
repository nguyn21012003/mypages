import React from "react";

import { PiCopyright } from "react-icons/pi";

import { FiGithub, FiFacebook } from "react-icons/fi";
import { AiOutlineGlobal } from "react-icons/ai";
import { CiLinkedin } from "react-icons/ci";
import { Link } from "react-router-dom";

export const MyFooter: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#ffffff] p-4 dark:bg-gray-900">
      <Link className="mt-4 text-2xl" to="/">
        Theoretical Physics
      </Link>
      <div className="flex flex-wrap py-4">
        <div>
          <span>
            <PiCopyright className="inline-block" /> {year} by{" "}
            <a
              href="https://www.facebook.com/nguyn.kool/"
              className="decoration-slice underline"
            >
              Tran Khoi Nguyen
            </a>
          </span>
        </div>
      </div>
      <div className="flex space-x-10">
        <div className="flex flex-col">
          <span className="text-xl font-semibold">Popular searches</span>
          <Link to={`/course/Learn Python/Learn Python`}>Learn Python</Link>
        </div>
        <div className="flex flex-col">
          <span className="text-xl font-semibold">Course</span>
          <Link to={`/course/Learn Python/Learn Python`}>Learn Python</Link>
        </div>
      </div>
    </footer>
  );
};
