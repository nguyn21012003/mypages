import { Link, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

import SectionDivider from "./component/sectiondivider";
import {
  HiOutlineHome,
  HiOutlineUserCircle,
  HiMiniBars3,
} from "react-icons/hi2";
import { GrArticle } from "react-icons/gr";
import { VscFeedback } from "react-icons/vsc";
import { TbGridDots } from "react-icons/tb";
import { PiFlowArrowLight, PiPuzzlePiece, PiBooks } from "react-icons/pi";

export const Sidebar = () => {
  const [activeNav, setActiveNav] = useState<string>("home");
  const [SidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const location = useLocation();

  const sidebarRef = useRef<HTMLElement>(null);
  const homeRef = useRef<HTMLAnchorElement>(null);
  const aboutRef = useRef<HTMLAnchorElement>(null);
  const courseRef = useRef<HTMLAnchorElement>(null);
  const topicsRef = useRef<HTMLAnchorElement>(null);
  const projectRef = useRef<HTMLAnchorElement>(null);
  const extrasRef = useRef<HTMLAnchorElement>(null);
  const feedbackRef = useRef<HTMLAnchorElement>(null);
  const articleRef = useRef<HTMLAnchorElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleSidebar = () => {
    setSidebarOpen(!SidebarOpen);
  };
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node) &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (location.pathname === "/" && homeRef.current) {
      homeRef.current.focus();
    } else if (location.pathname === "/about" && aboutRef.current) {
      aboutRef.current.focus();
    } else if (location.pathname === "/course/layout" && courseRef.current) {
      courseRef.current.focus();
    } else if (location.pathname === "/topics/layout" && topicsRef.current) {
      topicsRef.current.focus();
    } else if (location.pathname === "/blog/layout" && projectRef.current) {
      projectRef.current.focus();
    } else if (location.pathname === "/extras/layout" && extrasRef.current) {
      extrasRef.current.focus();
    } else if (location.pathname === "/feedback/form" && feedbackRef.current) {
      feedbackRef.current.focus();
    }
  }, [location.pathname]);

  const handleNavClick = (path: string) => {
    setActiveNav(path);
    toggleSidebar();
  };

  return (
    <div>
      <div className="group">
        <button
          data-drawer-target="default-sidebar"
          data-drawer-toggle="default-sidebar"
          aria-controls="default-sidebar"
          type="button"
          ref={buttonRef}
          onClick={toggleSidebar}
          className="fixed right-[1rem] top-0 z-10 mt-2 rounded-lg p-2 text-sm text-gray-500 ease-linear hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 xl:hidden"
        >
          <span className="sr-only">Open sidebar</span>
          <HiMiniBars3 className="size-7" />
        </button>
      </div>
      <div className="fixed h-screen w-20 -translate-x-[40rem] rounded-full bg-[#253a4d] blur-[10rem] md:translate-x-[0rem]"></div>
      <aside
        id="default-sidebar"
        className={`fixed left-0 top-0 z-40 h-full w-[200px] backdrop-blur-xl transition-transform ${
          SidebarOpen ? "translate-x-0 duration-700" : "-translate-x-full"
        } xl:translate-x-0 xl:backdrop-blur-none`}
        aria-label="Sidenav"
        ref={sidebarRef}
      >
        <div className="h-full overflow-y-auto border-r border-gray-200 bg-transparent px-3 py-5 dark:border-gray-700 dark:bg-gray-800">
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                ref={homeRef}
                onClick={() => handleNavClick("/")}
                className={`group flex items-center rounded-lg p-2 text-base hover:backdrop-brightness-125 dark:hover:bg-gray-700 ${activeNav === "/" ? "text-white backdrop-brightness-200 hover:backdrop-brightness-200" : "hover:backdrop-brightness-125"}`}
              >
                <HiOutlineHome
                  className={`text-[#878f9b] ${
                    activeNav === "/"
                      ? "text-sky-500"
                      : "group-focus:text-sky-500 group-active:text-sky-500"
                  }`}
                />

                <span
                  className={`ml-3 ${
                    activeNav === "/" ? "text-white" : "text-[#878f9b]"
                  }`}
                >
                  Homepage
                </span>
              </Link>
              <SectionDivider />
              <Link
                to="/about"
                ref={aboutRef}
                onClick={() => handleNavClick("/about")}
                className={`group flex items-center rounded-lg p-2 text-base hover:backdrop-brightness-125 dark:hover:bg-gray-700 ${activeNav === "/about" ? "text-white backdrop-brightness-200 hover:backdrop-brightness-200" : "hover:backdrop-brightness-125"}`}
              >
                <HiOutlineUserCircle
                  className={`text-[#878f9b] ${
                    activeNav === "/about"
                      ? "text-sky-500"
                      : "group-focus:text-sky-500 group-active:text-sky-500"
                  }`}
                />
                <span
                  className={`ml-3 ${
                    activeNav === "/about" ? "text-white" : "text-[#878f9b]"
                  }`}
                >
                  About me
                </span>
              </Link>
              <Link
                to="/course/layout"
                ref={courseRef}
                onClick={() => handleNavClick("/course/layout")}
                className={`group flex items-center rounded-lg p-2 text-base hover:backdrop-brightness-125 dark:hover:bg-gray-700 ${activeNav === "/course/layout" ? "text-white backdrop-brightness-200 hover:backdrop-brightness-200" : "hover:backdrop-brightness-125"}`}
              >
                <PiFlowArrowLight
                  className={`text-[#878f9b] ${
                    activeNav === "/course/layout"
                      ? "text-sky-500"
                      : "group-focus:text-sky-500 group-active:text-sky-500"
                  }`}
                />
                <span
                  className={`ml-3 ${
                    activeNav === "/course/layout"
                      ? "text-white"
                      : "text-[#878f9b]"
                  }`}
                >
                  Course
                </span>
              </Link>
              <Link
                to="/topics/layout"
                ref={topicsRef}
                onClick={() => handleNavClick("/topics/layout")}
                className={`group flex items-center rounded-lg p-2 text-base hover:backdrop-brightness-125 dark:hover:bg-gray-700 ${activeNav === "/topics/layout" ? "text-white backdrop-brightness-200 hover:backdrop-brightness-200" : "hover:backdrop-brightness-125"}`}
              >
                <PiBooks
                  className={`text-[#878f9b] ${
                    activeNav === "/topics/layout"
                      ? "text-sky-500"
                      : "group-focus:text-sky-500 group-active:text-sky-500"
                  }`}
                />
                <span
                  className={`ml-3 ${
                    activeNav === "/topics/layout"
                      ? "text-white"
                      : "text-[#878f9b]"
                  }`}
                >
                  Topics
                </span>
              </Link>
              <Link
                to="/blog/layout"
                ref={projectRef}
                onClick={() => handleNavClick("/blog/layout")}
                className={`group flex items-center rounded-lg p-2 text-base hover:backdrop-brightness-125 dark:hover:bg-gray-700 ${activeNav === "/blog/layout" ? "text-white backdrop-brightness-200 hover:backdrop-brightness-200" : "hover:backdrop-brightness-125"}`}
              >
                <PiPuzzlePiece
                  className={`text-[#878f9b] ${
                    activeNav === "/blog/layout"
                      ? "text-sky-500"
                      : "group-focus:text-sky-500 group-active:text-sky-500"
                  }`}
                />
                <span
                  className={`ml-3 ${
                    activeNav === "/blog/layout"
                      ? "text-white"
                      : "text-[#878f9b]"
                  }`}
                >
                  Blog
                </span>
              </Link>
              <Link
                to="/extras/layout"
                ref={extrasRef}
                onClick={() => handleNavClick("/extras/layout")}
                className={`group flex items-center rounded-lg p-2 text-base hover:backdrop-brightness-125 dark:hover:bg-gray-700 ${activeNav === "/extras/layout" ? "text-white backdrop-brightness-200 hover:backdrop-brightness-200" : "hover:backdrop-brightness-125"}`}
              >
                <TbGridDots
                  className={`text-[#878f9b] ${
                    activeNav === "/extras/layout"
                      ? "text-sky-500"
                      : "group-focus:text-sky-500 group-active:text-sky-500"
                  }`}
                />
                <span
                  className={`ml-3 ${
                    activeNav === "/extras/layout"
                      ? "text-white"
                      : "text-[#878f9b]"
                  }`}
                >
                  Extras
                </span>
              </Link>
              <Link
                to="/feedback/form"
                ref={feedbackRef}
                onClick={() => handleNavClick("/feedback/form")}
                className={`group flex items-center rounded-lg p-2 text-base hover:backdrop-brightness-125 dark:hover:bg-gray-700 ${activeNav === "/feedback/form" ? "text-white backdrop-brightness-200 hover:backdrop-brightness-200" : "hover:backdrop-brightness-125"}`}
              >
                <VscFeedback
                  className={`text-[#878f9b] ${
                    activeNav === "/feedback/form"
                      ? "text-sky-500"
                      : "group-focus:text-sky-500 group-active:text-sky-500"
                  }`}
                />
                <span
                  className={`ml-3 ${
                    activeNav === "/feedback/form"
                      ? "text-white"
                      : "text-[#878f9b]"
                  }`}
                >
                  Feedback
                </span>
              </Link>

              <SectionDivider></SectionDivider>
              <a className="text-sm italic text-[#878f9b] dark:text-white dark:hover:bg-gray-700">
                <span className="">Following</span>
              </a>
              <SectionDivider></SectionDivider>

              <a className="text-sm italic text-[#878f9b] dark:text-white dark:hover:bg-gray-700">
                <span className="">Poppular</span>
              </a>
              <Link
                to="/article/layout"
                ref={articleRef}
                onClick={() => handleNavClick("/article/layout")}
                className={`group flex items-center rounded-lg p-2 text-base font-normal hover:backdrop-brightness-125 dark:hover:bg-gray-700 ${activeNav === "/article/layout" ? "text-white backdrop-brightness-200 hover:backdrop-brightness-200" : "hover:backdrop-brightness-125"}`}
              >
                <GrArticle
                  className={`text-[#878f9b] ${
                    activeNav === "/article/layout"
                      ? "text-sky-500"
                      : "group-focus:text-sky-500 group-active:text-sky-500"
                  }`}
                />
                <span
                  className={`ml-3 ${
                    activeNav === "/article/layout"
                      ? "text-white"
                      : "text-[#878f9b]"
                  }`}
                >
                  Articles
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};
