import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

import { FaGithub, FaStar } from "react-icons/fa";

import { motion } from "framer-motion";

export const FormFeedback: React.FC = () => {
  const [stargazersCount, setStargazersCount] = useState<number | null>(null);
  useEffect(() => {
    const fetchStargazersCount = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/repos/nguyn21012003/mypages",
        );
        const data = await response.json();
        setStargazersCount(data.stargazers_count);
      } catch (error) {
        console.error("Error fetching stargazer count:", error);
      }
    };

    fetchStargazersCount();
  }, []);
  return (
    <div className="flex h-full w-full bg-transparent lg:h-screen">
      <div className="mx-4 mb-10 flex flex-col space-y-10 text-pretty lg:ml-[14rem]">
        <a
          href="#"
          className="sticky top-3 z-50 mt-[5rem] text-4xl font-semibold uppercase text-[#0b1215] dark:text-white"
        >
          Feedback
        </a>
        <a
          href="https://forms.gle/wBy5rEtEXBmLGqY28"
          title="https://forms.gle/wBy5rEtEXBmLGqY28"
          className="mt-[5rem] text-xl text-[#0b1215] underline dark:text-[#E2E8F0]"
        >
          You can acces this link via google form to write feedback for us or
          ask us questions
        </a>
        <p>
          <span className="text-xl text-[#0b1215] dark:text-white">
            Or in case you don't want to access via link you can contact me at
            tab{" "}
            <Link
              to="/about"
              className="text-xl text-[#0b1215] underline dark:text-white"
            >
              {" "}
              About me{" "}
            </Link>
          </span>
        </p>

        <p>
          <span className="text-xl text-[#0b1215] dark:text-white">
            If you find this website is useful, you can support us by give star
            on Github via the button below.
          </span>
        </p>
        <motion.div
          className="group w-[12rem] rounded-2xl bg-[#18181b] p-2 dark:bg-white"
          whileHover={{ scale: 1.2 }}
        >
          <a
            href="https://github.com/nguyn21012003/mypages"
            className="font-semibold text-white dark:text-[#0b1215]"
          >
            <FaGithub className="mb-1 inline-block text-white dark:text-[#0b1215]" />
            Star on Github{" "}
            <FaStar className="mb-1 ml-4 inline-block fill-[#6b7280] group-hover:fill-[#f9d72e]" />{" "}
            {stargazersCount !== null ? stargazersCount : "Loading..."}
          </a>
        </motion.div>
      </div>
    </div>
  );
};
