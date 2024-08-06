import { Link, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

import { motion } from "framer-motion";

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
  const [isOpen, setIsOpen] = useState<boolean>(false);
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
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node) &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
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
    <motion.nav>
      <div className="group fixed z-40 h-16 w-full bg-transparent brightness-105 backdrop-blur-lg">
        <motion.button
          type="button"
          whileTap={{ scale: 0.8 }}
          whileHover={{ backgroundColor: "white" }}
          ref={buttonRef}
          onClick={toggleSidebar}
          className="fixed right-[1rem] top-0 z-10 mt-2 rounded-lg p-2 text-sm text-gray-500 ease-linear hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 lg:hidden"
        >
          <span className="sr-only">Open sidebar</span>
          <HiMiniBars3 className="size-7" />
        </motion.button>
      </div>
      <motion.aside
        id="default-sidebar"
        initial={false}
        className={`fixed right-0 z-40 m-[1rem] h-fit w-[200px] rounded-2xl backdrop-blur-xl lg:left-0 lg:m-0 lg:h-full ${
          isOpen ? "translate-x-[0rem] " : "translate-x-[20rem] lg:opacity-100"
        } translate-y-[4rem] lg:translate-x-0 lg:translate-y-0 lg:backdrop-blur-none`}
        aria-label="Sidenav"
        ref={sidebarRef}
      >
        <div className="h-full overflow-y-auto rounded-2xl border-2 border-[#e2e8f0] bg-white px-3 py-5 dark:border-white dark:bg-gray-800 lg:rounded-none lg:border-0">
          <ul className="space-y-2">
            <li>
              <Link
                to="/about"
                ref={aboutRef}
                onClick={() => handleNavClick("/about")}
                className={`group flex items-center rounded-lg p-2 text-base hover:backdrop-brightness-125 dark:hover:bg-gray-700 ${activeNav === "/about" ? "bg-[#edf2f7] dark:bg-gray-700" : "hover:bg-[#edf2f7]"}`}
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
                    activeNav === "/about"
                      ? "text-[#0b1215] dark:text-white"
                      : "text-[#878f9b]"
                  }`}
                >
                  About me
                </span>
              </Link>

              <SectionDivider />
              <Link
                to="/"
                ref={homeRef}
                onClick={() => handleNavClick("/")}
                className={`group flex items-center rounded-lg p-2 text-base hover:backdrop-brightness-125 dark:hover:bg-gray-700 ${activeNav === "/" ? "bg-[#edf2f7] dark:bg-gray-700" : "hover:bg-[#edf2f7]"}`}
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
                    activeNav === "/"
                      ? "text-[#0b1215] dark:text-white"
                      : "text-[#878f9b]"
                  }`}
                >
                  Homepage
                </span>
              </Link>
              <Link
                to="/course/layout"
                ref={courseRef}
                onClick={() => handleNavClick("/course/layout")}
                className={`group flex items-center rounded-lg p-2 text-base hover:backdrop-brightness-125 dark:hover:bg-gray-700 ${activeNav === "/course/layout" ? "bg-[#edf2f7] dark:bg-gray-700" : "hover:bg-[#edf2f7]"}`}
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
                      ? "text-[#0b1215] dark:text-white"
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
                className={`group flex items-center rounded-lg p-2 text-base hover:backdrop-brightness-125 dark:hover:bg-gray-700 ${activeNav === "/topics/layout" ? "bg-[#edf2f7] dark:bg-gray-700" : "hover:bg-[#edf2f7]"}`}
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
                      ? "text-[#0b1215] dark:text-white"
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
                className={`group flex items-center rounded-lg p-2 text-base hover:backdrop-brightness-125 dark:hover:bg-gray-700 ${activeNav === "/blog/layout" ? "bg-[#edf2f7] dark:bg-gray-700" : "hover:bg-[#edf2f7]"}`}
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
                      ? "text-[#0b1215] dark:text-white"
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
                className={`group flex items-center rounded-lg p-2 text-base hover:backdrop-brightness-125 dark:hover:bg-gray-700 ${activeNav === "/extras/layout" ? "bg-[#edf2f7] dark:bg-gray-700" : "hover:bg-[#edf2f7]"}`}
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
                      ? "text-[#0b1215] dark:text-white"
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
                className={`group flex items-center rounded-lg p-2 text-base hover:backdrop-brightness-125 dark:hover:bg-gray-700 ${activeNav === "/feedback/form" ? "bg-[#edf2f7] dark:bg-gray-700" : "hover:bg-[#edf2f7]"}`}
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
                      ? "text-[#0b1215] dark:text-white"
                      : "text-[#878f9b]"
                  }`}
                >
                  Feedback
                </span>
              </Link>

              <SectionDivider></SectionDivider>
              <div className="text-sm italic">
                <span className="text-[#878f9b] dark:text-white">
                  Following
                </span>
              </div>
              <SectionDivider></SectionDivider>

              <div className="text-sm italic">
                <span className="text-[#878f9b] dark:text-white">Poppular</span>
              </div>
              <Link
                to="/article/layout"
                ref={articleRef}
                onClick={() => handleNavClick("/article/layout")}
                className={`group flex items-center rounded-lg p-2 text-base font-normal hover:backdrop-brightness-125 dark:hover:bg-gray-700 ${activeNav === "/article/layout" ? "bg-[#edf2f7] dark:bg-gray-700" : "hover:bg-[#edf2f7]"}`}
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
                      ? "text-[#0b1215] dark:text-white"
                      : "text-[#878f9b]"
                  }`}
                >
                  Articles
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </motion.aside>
    </motion.nav>
  );
};
