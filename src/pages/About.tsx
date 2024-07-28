import React from "react";
import Logo from "./../lib/logo.svg";

import { HiAcademicCap } from "react-icons/hi";
import Trimmed from "../component/trimmed";
import Skills from "../component/skill";
import RecentlyPost from "../component/recently";

export const About: React.FC = () => {
  return (
    <div className="w-full space-y-[6.1rem]">
      <div className="flex items-center justify-center">
        <div className="bg-transparent sm:backdrop-blur-none md:max-w-[50rem] md:backdrop-blur-sm lg:backdrop-blur-sm 2xl:backdrop-blur-sm">
          <div className="md:flex">
            <div className="p-8 text-white dark:text-black md:shrink-0">
              <img
                alt="Khoi Nguyen Tran"
                className="size-20 self-start rounded-full border-[4px]"
                src={Logo}
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
                  href="https://nguyn21012003.github.io/theoreticalphysics.github.io/vn/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="hover:scale-110">
                    <div className="flex h-6 w-6 items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                        />
                      </svg>
                    </div>
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
                    <div className="flex size-[1.4rem] items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-brand-github"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                      </svg>
                    </div>
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/nguyenkool/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Likedin"
                >
                  <div className="hover:scale-110">
                    <div className="flex size-[1.4rem] items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-brand-linkedin"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                        <path d="M8 11l0 5"></path>
                        <path d="M8 8l0 .01"></path>
                        <path d="M12 16l0 -5"></path>
                        <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                      </svg>
                    </div>
                  </div>
                </a>
                <a
                  href="https://www.facebook.com/nguyn.kool/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="facebook"
                >
                  <div className="hover:scale-110">
                    <div className="flex size-[1.4rem] items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-brand-facebook"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="space-y-14 p-8">
              <div>
                <div className="text-justify font-Poppins text-3xl font-semibold uppercase tracking-wide text-white">
                  # who am i
                </div>
                <p className="text-justify">
                  <a className="font-Poppins text-lg font-normal leading-tight text-[#7A8BA3] md:max-w-[64rem]">
                    heoretical Physics, and he is deeply engaged in studying the
                    subject.Khoi Nguyen Tran is a senior physics student with a
                    passion for Theoretical Physics, and he is deeply engaged in
                    studying the subject.Khoi Nguyen Tran is a senior physics
                    student with a passion for Theoretical Physics, and he is
                    deeply engaged in studying the subject.Khoi Nguyen Tran is a
                    senior physics student with a passion for Theoretical
                    Physics, and he is deeply engaged in studying the subject.
                    Khoi Nguyen Tran is a senior physics student with a passion
                    for Theoretical Physics, and he is deeply engaged in
                    studying the subject.Khoi Nguyen Tran is a senior physics
                    student with a passion for Theoretical Physics, and he is
                    deeply engaged in studying the subject.Khoi Nguyen Tran is a
                    senior physics student with a passion for Theoretical
                    Physics, and he is deeply engaged in studying the subject.
                  </a>
                </p>
              </div>
              <div className="flex space-x-14 sm:space-x-28">
                <ul className="list-disc">
                  <a className="font-Poppins text-2xl text-white">Interest</a>
                  <li className="text-normal font-Poppins text-[#7A8BA3]">
                    Solid Matter
                  </li>
                  <li className="text-normal font-Poppins text-[#7A8BA3]">
                    Learning something new
                  </li>
                  <li className="text-normal font-Poppins text-[#7A8BA3]">
                    Coding
                  </li>
                </ul>
                <ul>
                  <a className="font-Poppins text-2xl text-white">Education</a>
                  <li className="text-normal font-Poppins text-[#7A8BA3]">
                    <HiAcademicCap className="inline-block" /> Education1
                  </li>
                  <li className="text-normal font-Poppins text-[#7A8BA3]">
                    <HiAcademicCap className="inline-block" /> Some Cert
                  </li>
                  <li className="text-normal font-Poppins text-[#7A8BA3]">
                    <HiAcademicCap className="inline-block" /> MSc at Department
                    of Theoretical Physics HCMUS-VNU
                  </li>
                </ul>
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
    </div>
  );
};
