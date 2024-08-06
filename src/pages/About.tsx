import React from "react";

import { HiOutlineDocumentDownload } from "react-icons/hi";
import { FiGithub, FiFacebook } from "react-icons/fi";
import { AiOutlineGlobal } from "react-icons/ai";
import { CiLinkedin } from "react-icons/ci";

import Skills from "../component/skill";
import { RecentlyPost } from "../component/recently";
import MyExperience from "../component/experience";

export const About: React.FC = () => {
  return (
    <div className="w-full select-none">
      <div className="space-y-[20rem] lg:ml-[10rem] xl:ml-10">
        <div className="flex items-center justify-center">
          <div>
            <div className="mt-14 bg-transparent md:max-w-[50rem]">
              <div className="md:flex">
                <div className="p-8 md:shrink-0">
                  <img
                    alt="Khoi Nguyen Tran"
                    className="size-20 self-start rounded-full border-[4px]"
                    src="/me.jpg"
                  ></img>
                  <span className="relative flex h-3 w-3">
                    <span className="absolute -right-14 -top-[1rem] inline-flex h-full w-full animate-ping rounded-full bg-green-300 opacity-75"></span>
                    <span className="relative -right-14 -top-[1rem] inline-flex h-3 w-3 rounded-full bg-green-400"></span>
                  </span>
                  <p>
                    <a className="text-lg font-semibold text-[#0b1215] dark:text-white">
                      Khoi Nguyen Tran
                    </a>
                  </p>
                  <p>
                    <a className="text-lg font-semibold text-[#0b1215] dark:text-white">
                      Dep. of Theoretical Physics
                    </a>
                  </p>
                  <p>
                    <a className="text-lg font-semibold text-[#0b1215] dark:text-white">
                      CONTACT ME AT
                    </a>
                  </p>
                  <div className="flex space-x-2">
                    <a
                      href="https://jeremy-tran.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className=""
                    >
                      <div className="hover:scale-110">
                        <AiOutlineGlobal className="text-[#0b1215] dark:text-white" />
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
                        <FiGithub className="text-[#0b1215] dark:text-white" />
                      </div>
                    </a>
                    <a
                      href="https://www.facebook.com/nguyn.kool/"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="facebook"
                    >
                      <div className="hover:scale-110">
                        <FiFacebook className="text-[#0b1215] dark:text-white" />
                      </div>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/nguyenkool/"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Likedin"
                    >
                      <div className="hover:scale-110">
                        <CiLinkedin className="text-[#0b1215] dark:text-white" />
                      </div>
                    </a>
                  </div>
                  <div className="flex h-6 w-6 items-center justify-center"></div>
                  <a
                    href="/document.pdf"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="border-1 group flex animate-pulse items-center justify-center rounded-full bg-sky-800 p-2 text-base font-normal text-[white] shadow-2xl hover:scale-110 hover:brightness-125 dark:bg-slate-500 dark:hover:brightness-125"
                  >
                    <span className="text-center">Check out my CV</span>{" "}
                    <HiOutlineDocumentDownload className="ml-1" />
                  </a>
                </div>
                <div className="space-y-14 p-8">
                  <div className="space-y-5">
                    <div className="text-justify text-3xl font-semibold uppercase tracking-wide text-[#0b1215] dark:text-white">
                      # who am i
                    </div>
                    <p className="text-left md:text-justify">
                      <a className="text-xl font-normal text-[#101720] dark:text-[#7A8BA3] md:max-w-[64em]">
                        👋 You can call me Jeremy . As you can see, my name is
                        inspired alot by the character Jeremy Jonhson in Phineas
                        & Ferb cartoon.
                      </a>
                    </p>
                    <p className="text-left md:text-justify">
                      <a className="text-xl font-normal text-[#101720] dark:text-[#7A8BA3] md:max-w-[64em]">
                        Tran Khoi Nguyen aka Khoi Nguyen Tran aka Jeremy is a
                        senior physics student with a passion not only for
                        learning Theoretical Physics but also building digital
                        services/stuff he wants. When not on time 
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Skills></Skills>
        </div>
        <div className="flex items-center justify-center pb-[10rem]">
          <RecentlyPost></RecentlyPost>
        </div>
        <div className="flex items-center justify-center pb-[10rem]">
          <MyExperience></MyExperience>
        </div>
      </div>
    </div>
  );
};
