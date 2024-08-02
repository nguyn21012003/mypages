import React from "react";
import { PiCopyright } from "react-icons/pi";

import { FiGithub, FiFacebook } from "react-icons/fi";
import { AiOutlineGlobal } from "react-icons/ai";
import { CiLinkedin } from "react-icons/ci";
export const MyFooter: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="flex w-full items-center justify-center bg-white dark:bg-black md:w-[20rem]">
      <ul className="my-10 flex space-x-10">
        <li className="rounded-full bg-black p-3 text-white dark:bg-white dark:text-black">
          <a
            href="https://jeremy-tran.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="hover:scale-110">
              <AiOutlineGlobal />
            </div>
          </a>
        </li>
        <li className="rounded-full bg-black p-3 text-white dark:bg-white dark:text-black">
          <a
            href="https://github.com/nguyn21012003"
            target="_blank"
            rel="noopener noreferrer"
            title="github"
            data-popover-target="pop"
          >
            <div className="hover:scale-110">
              <FiGithub />
            </div>
          </a>
        </li>
        <li className="rounded-full bg-black p-3 text-white dark:bg-white dark:text-black">
          <a
            href="https://www.facebook.com/nguyn.kool/"
            target="_blank"
            rel="noopener noreferrer"
            title="facebook"
          >
            <div className="hover:scale-110">
              <FiFacebook />
            </div>
          </a>
        </li>
        <li className="rounded-full bg-black p-3 text-white dark:bg-white dark:text-black">
          <a
            href="https://www.linkedin.com/in/nguyenkool/"
            target="_blank"
            rel="noopener noreferrer"
            title="Likedin"
          >
            <div className="hover:scale-110">
              <CiLinkedin />
            </div>
          </a>
        </li>
      </ul>
      {year} <PiCopyright></PiCopyright>
    </footer>
  );
};
