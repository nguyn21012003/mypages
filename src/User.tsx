import React from "react";
import Logo from "M:/codespace/NewVite/src/assets/images/logo.png";
import CVpdf from "M:/codespace/NewVite/src/assets/CV/document.pdf";

export const Usercard: React.FC = () => {
  return (
    <div>
      <div
        className="mt-10 flex items-stretch space-x-32 border bg-[#F8FAFC] px-4 py-4 drop-shadow-md dark:border-0 dark:bg-[#374151]"
        id="AboutMe"
      >
        <div className="shrink-0">
          <img
            alt=""
            className="size-20 self-start rounded-full border-[4px] border-[]"
            src={Logo}
          ></img>
          <ul className="font-Poppins space-x-0 text-3xl font-semibold">
            <li>
              <p>Khoi Nguyen Tran</p>
            </li>
            <li>
              <p>Dep. of Theoretical Physics</p>
            </li>
            <li>
              <p className="text-4xl">CONTACT ME AT</p>
            </li>
          </ul>
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
              href="https://nguyn21012003.github.io/theoreticalphysics.github.io/vn/"
              target="_blank"
              rel="noopener noreferrer"
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
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                  </svg>
                </div>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/nguyenkool/"
              target="_blank"
              rel="noopener noreferrer"
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
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
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
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
                  </svg>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="space-y-5">
          <a className="font-Poppins text-2xl font-bold">ABOUT ME</a>
          <p className="font-Poppins w-[70rem] text-lg">
            Khoi Nguyen Tran is a senior physics student with a passion for
            Theoretical Physics, and he is deeply engaged in studying the
            subject. Khoi Nguyen Tran is a senior physics student with a passion
            for Theoretical Physics, and he is deeply engaged in studying the
            subject.Khoi Nguyen Tran is a senior physics student with a passion
            for Theoretical Physics, and he is deeply engaged in studying the
            subject.Khoi Nguyen Tran is a senior physics student with a passion
            for Theoretical Physics, and he is deeply engaged in studying the
            subject.
          </p>
          <div className="w-[12rem] justify-center rounded-xl border border-gray-400 px-4 py-2 text-center text-sm font-medium text-gray-600 focus:ring-4 focus:ring-blue-500 dark:text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="mr-1 inline-block size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
              />
            </svg>

            <a href={CVpdf}>Download CV</a>
          </div>
          <div className="flex gap-x-10 space-x-32">
            <ul className="font-Poppins list-inside list-disc text-2xl font-bold">
              <li className="list-none">INTERESTS</li>
              <li className="font-Poppins text-xl font-normal">Coding</li>
              <li className="font-Poppins text-xl font-normal">Writing</li>
              <li className="font-Poppins text-xl font-normal">
                Theoretical Physics
              </li>
            </ul>
            <ul>
              <li className="font-Poppins list-inside text-2xl font-bold">
                EDUCATION
                <li className="font-Poppins text-xl font-normal">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="mr-4 inline-block size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                    />
                  </svg>
                  <a>List</a>
                </li>
                <li className="font-Poppins text-xl font-normal">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="mr-4 inline-block size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                    />
                  </svg>
                  <a>List</a>
                </li>
                <li className="font-Poppins text-xl font-normal">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="mr-4 inline-block size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                    />
                  </svg>
                  <a>
                    BSc of Theoretical Physics
                    <br />
                    Ho Chi Minh City University of Science - Vietnam National
                    University
                  </a>
                </li>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
