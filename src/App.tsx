import { useState } from "react";

import { Route, Routes } from "react-router-dom";
import { motion } from "framer-motion";

import { Homepage } from "./pages/Home";
import { About } from "./pages/About";
import { BlogLayout } from "./pages/blog/layout";
import { HomeMore } from "./pages/blog/readmore";
import { Layout } from "./pages/topics/layout";
import { PythonLayout } from "./pages/course/Learn Python/Learn Python";
import { LayoutCourse } from "./pages/course/layout";
import { Sidebar } from "./component/sidebar";

import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi2";
import { FormFeedback } from "./pages/feedback/form";
import { ExtrasLayout } from "./pages/extras/layout";
import { ArticleLayout } from "./pages/article/layout";
import { TMBLayout } from "./pages/course/TBM/TMB";
import { MyFooter } from "./component/Footer";
import { MyHeader } from "./component/header";

export const metada = { title: "ngu" };
export const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode && "dark"}`}>
      <MyHeader></MyHeader>
      <div className="static h-full w-full bg-[#f0e7db] dark:bg-[#101720]">
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={toggleDarkMode}
          className="fixed right-20 top-0 z-50 mt-2 rounded-xl bg-[#805ad5] p-2 text-black dark:bg-[#fbd38d]"
        >
          {darkMode ? (
            <HiOutlineSun className="size-7" />
          ) : (
            <HiOutlineMoon className="size-7 fill-white stroke-white" />
          )}
        </motion.button>
        <Sidebar></Sidebar>

        <Routes>
          <Route path="/" element={<Homepage></Homepage>} />
          <Route path="/about" element={<About></About>} />
          <Route path="/blog/layout" element={<BlogLayout></BlogLayout>} />
          <Route
            path="/course/Learn Python/Learn Python"
            element={<PythonLayout></PythonLayout>}
          />
          <Route path="/readmore" element={<HomeMore></HomeMore>} />
          <Route path="/topics/layout" element={<Layout></Layout>} />
          <Route
            path="/extras/layout"
            element={<ExtrasLayout></ExtrasLayout>}
          />
          <Route
            path="/article/layout"
            element={<ArticleLayout></ArticleLayout>}
          />
          <Route
            path="/course/layout"
            element={<LayoutCourse></LayoutCourse>}
          />
          <Route path="/course/TMB/TMB" element={<TMBLayout></TMBLayout>} />
          <Route
            path="/feedback/form"
            element={<FormFeedback></FormFeedback>}
          />
        </Routes>
        <div className="hidden">
          <MyFooter></MyFooter>
        </div>
      </div>
    </div>
  );
};
