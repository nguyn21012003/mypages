import React from "react";
/*
import { PiCopyright } from "react-icons/pi";

import { FiGithub, FiFacebook } from "react-icons/fi";
import { AiOutlineGlobal } from "react-icons/ai";
import { CiLinkedin } from "react-icons/ci";
import { FiGithub, FiFacebook } from "react-icons/fi";
import { AiOutlineGlobal } from "react-icons/ai";
import { CiLinkedin } from "react-icons/ci";
*/


export const MyFooter: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="rounded-lg bg-[#ffffff] dark:bg-gray-900">{year}</footer>
  );
};
