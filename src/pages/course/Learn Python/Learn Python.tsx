import React, { useState } from "react";

import { motion, Variants } from "framer-motion";

import { GoTriangleDown } from "react-icons/go";

import { WeekPython } from "../../../lib/datPython";

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};
export const PythonLayout: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpenCourse = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex h-full w-full bg-transparent">
      <div className="mx-4 mb-10 flex flex-col text-pretty lg:ml-[14rem]">
        <a
          href="#"
          className="sticky top-4 z-30 mt-[5rem] w-fit text-4xl font-semibold uppercase text-[#0b1215] dark:text-white"
        >
          Python
        </a>
        <h2 className="mt-[5rem] text-xl text-[#0b1215] dark:text-[#E2E8F0]">
          An introduction to programming using a language called Python. Learn
          how to read and write code as well as how to test and “debug” it.
          Designed for students with or without prior programming experience
          who’d like to learn Python specifically. Learn about functions,
          arguments, and return values (oh my!); variables and types;
          conditionals and Boolean expressions; and loops. Learn how to handle
          exceptions, find and fix bugs, and write unit tests; use third-party
          libraries; validate and extract data with regular expressions; model
          real-world entities with classes, objects, methods, and properties;
          and read and write files. Hands-on opportunities for lots of practice.
          Exercises inspired by real-world programming problems.
        </h2>
        <h3 className="mt-[5rem] text-xl text-[#0b1215] dark:text-[#E2E8F0]">
          This 10-weeks of material will teach you Python through a mix between
          tutorials and interactive coding challenges.
        </h3>
        <motion.nav
          initial={false}
          animate={isOpen ? "open" : "closed"}
          className="flex flex-col items-center justify-center space-y-4 py-4"
        >
          <motion.button
            onClick={toggleOpenCourse}
            whileTap={{ scale: 0.88 }}
            animate={isOpen ? "open" : "closed"}
            data-dropdown-toogle="dropdown"
            className="flex w-[10rem] rounded-xl bg-red-600 p-4 text-white"
          >
            Menu{" "}
            <motion.div
              variants={{
                open: { rotate: 180 },
                closed: { rotate: 0 },
              }}
              transition={{ duration: 0.2 }}
              style={{ originY: 0.55 }}
              className="ml-20"
            >
              <GoTriangleDown className="inline-block" />
            </motion.div>
          </motion.button>
          <motion.ul
            className="space-y-4 bg-white p-4"
            variants={{
              open: {
                clipPath: "inset(0% 0% 0% 0% round 10px)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.7,
                  delayChildren: 0.3,
                  staggerChildren: 0.05,
                },
              },
              closed: {
                clipPath: "inset(10% 50% 90% 50% round 10px)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.3,
                },
              },
            }}
            style={{ pointerEvents: isOpen ? "auto" : "none" }}
          >
            {WeekPython.map((item, index) => (
              <motion.li
                variants={itemVariants}
                key={index}
                id={item.name}
                className=""
              >
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`/Resources/${item.name}.pdf`}
                >
                  {item.name}: {item.description} <u>PDF</u>
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </motion.nav>
      </div>
    </div>
  );
};
