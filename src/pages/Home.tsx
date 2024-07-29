import { Link } from "react-router-dom";

import { BsYoutube } from "react-icons/bs";
export const Homepage = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="w-[40rem] space-y-10 bg-transparent">
        <h1 className="font-Poppins text-3xl font-medium text-[#ffff] dark:text-[#E2E8F0]">
          Home
        </h1>{" "}
        <p>
          <h1 className="font-Poppins font-normal text-[#ffff] dark:text-[#E2E8F0]">
            Welcome to our page, a place to read theoretical physics from
            quantum to cosmo.{" "}
          </h1>
          <a
            href="https://www.youtube.com/@phungngocduy2810"
            className="text-[#ffff] text-sky-700 underline dark:text-[#E2E8F0]"
            target="_blank"
            rel="noreferrer noopener"
          >
            Check out our official youtube channel{" "}
            <BsYoutube className="inline-block stroke-white text-[#ff0000]" />
          </a>{" "}
          <a className="font-Poppins text-white">
            to get an overview what are we doing
          </a>
        </p>
        <p>
          <Link
            className="text-white hover:underline hover:transition-transform hover:duration-300"
            to="/readmore"
          >
            Read more
          </Link>
        </p>
      </div>
    </div>
  );
};
