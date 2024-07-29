import { useState } from "react";

import { Route, Routes } from "react-router-dom";

import { Homepage } from "./pages/Home";
import { About } from "./pages/About";
import { BlogLayout } from "./pages/blog/layout";
import { HomeMore } from "./pages/blog/readmore";
import { Layout } from "./pages/topics/layout";
import { LayoutCourse } from "./pages/course/layout";
import { Sidebar } from "./sidebar";
import { GoSun, GoMoon } from "react-icons/go";
import { FormFeedback } from "./pages/feedback/form";

export const metada = { title: "ngu" };
export const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="static h-full w-full bg-[#161a1d]">
      <div className="fixed left-[25rem] top-[-20rem] z-0 h-full w-full rounded-full bg-[#253a4d] blur-[10rem] sm:size-[30rem] lg:left-[20rem] xl:left-[40rem] 2xl:left-[60rem]"></div>
      <button
        onClick={toggleDarkMode}
        className="fixed bottom-0 right-0 z-50 mb-2 me-3 hidden rounded-full border p-2 text-white"
      >
        {darkMode ? <GoSun></GoSun> : <GoMoon></GoMoon>}
      </button>
      <Sidebar></Sidebar>

      <div className={`${darkMode && "dark"}`}>
        <Routes>
          <Route path="/" element={<Homepage></Homepage>} />
          <Route path="/about" element={<About></About>} />
          <Route path="/blog/layout" element={<BlogLayout></BlogLayout>} />
          <Route path="/readmore" element={<HomeMore></HomeMore>} />
          <Route path="/topics/layout" element={<Layout></Layout>} />
          <Route
            path="/course/layout"
            element={<LayoutCourse></LayoutCourse>}
          />
          <Route
            path="/feedback/form"
            element={<FormFeedback></FormFeedback>}
          />
        </Routes>
      </div>
    </div>
  );
};
