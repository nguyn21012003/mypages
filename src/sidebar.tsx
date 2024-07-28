import SectionDivider from "./component/sectiondivider";
import { HiOutlineHome, HiOutlineUserCircle } from "react-icons/hi2";
import { VscFeedback } from "react-icons/vsc";

import { TbGridDots } from "react-icons/tb";
import { PiFlowArrowLight, PiPuzzlePiece, PiBooks } from "react-icons/pi";

export const Sidebar = () => {
  return (
    <div>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="ml-3 mt-2 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 xl:hidden"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="h-6 w-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>
      <div className="fixed h-screen w-20 rounded-full bg-[#253a4d] blur-[10rem]"></div>
      <aside
        id="default-sidebar"
        className="fixed left-0 top-0 z-40 h-full w-[203px] -translate-x-full transition-transform xl:translate-x-0"
        aria-label="Sidenav"
      >
        <div className="h-full overflow-y-auto border-r border-gray-200 bg-transparent px-3 py-5 dark:border-gray-700 dark:bg-gray-800">
          <ul className="space-y-2">
            <li>
              <a
                href="/"
                className="group flex items-center rounded-lg p-2 text-base font-normal text-white hover:backdrop-brightness-125 dark:text-white dark:hover:bg-gray-700"
              >
                <HiOutlineHome></HiOutlineHome>
                <span className="ml-3">Homepage</span>
              </a>
              <SectionDivider></SectionDivider>
              <a
                href="/about"
                className="group flex items-center rounded-lg p-2 text-base font-normal text-[#878f9b] hover:backdrop-brightness-125 dark:text-white dark:hover:bg-gray-700"
              >
                <HiOutlineUserCircle></HiOutlineUserCircle>
                <span className="ml-3">About me</span>
              </a>
              <a
                href="/course/layout"
                className="group flex items-center rounded-lg p-2 text-base font-normal text-[#878f9b] hover:backdrop-brightness-125 dark:text-white dark:hover:bg-gray-700"
              >
                <PiFlowArrowLight />
                <span className="ml-3">Course</span>
              </a>
              <a
                href="/about"
                className="group flex items-center rounded-lg p-2 text-base font-normal text-[#878f9b] hover:backdrop-brightness-125 dark:text-white dark:hover:bg-gray-700"
              >
                <PiBooks />
                <span className="ml-3">Topics</span>
              </a>
              <a
                href="/blog/mission"
                className="group flex items-center rounded-lg p-2 text-base font-normal text-[#878f9b] hover:backdrop-brightness-125 dark:text-white dark:hover:bg-gray-700"
              >
                <PiPuzzlePiece />
                <span className="ml-3">Projects</span>
              </a>
              <a
                href="/about"
                className="group flex items-center rounded-lg p-2 text-base font-normal text-[#878f9b] hover:backdrop-brightness-125 dark:text-white dark:hover:bg-gray-700"
              >
                <TbGridDots />
                <span className="ml-3">Extras</span>
              </a>
              <a
                href="/feedback/form"
                className="group flex items-center rounded-lg p-2 text-base font-normal text-[#878f9b] hover:backdrop-brightness-125 dark:text-white dark:hover:bg-gray-700"
              >
                <VscFeedback />
                <span className="ml-3">Feedback</span>
              </a>

              <SectionDivider></SectionDivider>
              <a className="font-Poppins text-sm italic text-[#878f9b] dark:text-white dark:hover:bg-gray-700">
                <span className="">Following</span>
              </a>
              <SectionDivider></SectionDivider>

              <a className="font-Poppins text-sm italic text-[#878f9b] dark:text-white dark:hover:bg-gray-700">
                <span className="">Poppular</span>
              </a>
              <a
                href="/about"
                className="group flex items-center rounded-lg p-2 text-base font-normal text-[#878f9b] hover:backdrop-brightness-125 dark:text-white dark:hover:bg-gray-700"
              >
                <VscFeedback />
                <span className="ml-3">De cac khoa hoc</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};
