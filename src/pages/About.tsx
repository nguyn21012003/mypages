import React from "react";

import { HiOutlineDocumentDownload } from "react-icons/hi";
import { FiGithub, FiFacebook } from "react-icons/fi";
import { AiOutlineGlobal } from "react-icons/ai";
import { CiLinkedin } from "react-icons/ci";

import Trimmed from "../component/trimmed";
import Skills from "../component/skill";
import RecentlyPost from "../component/recently";
import Timeline from "../component/timeline";

export const About: React.FC = () => {
  return (
    <div className="w-full space-y-[6.1rem]">
      <div className="flex items-center justify-center">
        <div className="mt-10 bg-transparent sm:backdrop-blur-none md:max-w-[50rem] md:backdrop-blur-sm lg:backdrop-blur-sm 2xl:backdrop-blur-sm">
          <div className="md:flex">
            <div className="p-8 text-white dark:text-black md:shrink-0">
              <img
                alt="Khoi Nguyen Tran"
                className="size-20 self-start rounded-full border-[4px]"
                src="/me.jpg"
              ></img>
              <p>
                <a className="font-Poppins text-lg font-semibold">
                  Khoi Nguyen Tran
                </a>
              </p>
              <p>
                <a className="font-Poppins text-lg font-semibold">
                  Dep. of Theoretical Physics
                </a>
              </p>
              <p>
                <a className="font-Poppins text-lg font-semibold">
                  CONTACT ME AT
                </a>
              </p>
              <div className="flex space-x-2">
                <a
                  href="https://jeremy-tran.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="hover:scale-110">
                    <AiOutlineGlobal />
                  </div>
                </a>
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
              </div>
              <div className="flex h-6 w-6 items-center justify-center"></div>
              <a
                href="/document.pdf"
                target="_blank"
                rel="noreferrer noopener"
                className="group flex items-center justify-center rounded-full bg-sky-800 p-2 text-base font-normal text-[#878f9b] hover:text-white hover:brightness-125 dark:text-white dark:hover:bg-gray-700"
              >
                <span className="text-center">Check out my CV</span>{" "}
                <HiOutlineDocumentDownload className="ml-1" />
              </a>
            </div>
            <div className="space-y-14 p-8">
              <div className="space-y-5">
                <div className="text-justify font-Poppins text-3xl font-semibold uppercase tracking-wide text-white">
                  # who am i
                </div>
                <p className="text-justify">
                  <a className="font-Poppins text-lg font-normal leading-tight text-[#7A8BA3] md:max-w-[64em]">
                    👋 You can call me Jeremy . As you can see, my name is
                    inspired alot by the character Jeremy Jonhson in Phineas &
                    Ferb cartoon.
                  </a>
                </p>
                <p className="text-justify">
                  <a className="font-Poppins text-lg font-normal leading-tight text-[#7A8BA3] md:max-w-[64em]">
                    Tran Khoi Nguyen aka Khoi Nguyen Tran aka Jeremy is a senior
                    physics student with a passion for Theoretical Physics
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Trimmed></Trimmed>
      </div>

      <div className="flex items-center justify-center">
        <Skills></Skills>
      </div>
      <div className="flex items-center justify-center pb-[10rem]">
        <RecentlyPost></RecentlyPost>
      </div>
      <div className="flex items-center justify-center pb-[10rem]">
        <Timeline></Timeline>
      </div>
    </div>
  );
};
