import { Link } from "react-router-dom";
import { BsYoutube } from "react-icons/bs";
export const Homepage = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="mx-10 w-[40rem] space-y-10 bg-transparent md:ml-20">
        <h1 className="font-Poppins text-3xl font-medium text-[#0b1215] dark:text-[#E2E8F0]">
          Home
        </h1>{" "}
        <div>
          <h1 className="font-normal text-[#0b1215] dark:text-[#E2E8F0]">
            Welcome to our page, a place to read theoretical physics from
            quantum to cosmo.{" "}
          </h1>
          <a
            href="https://www.youtube.com/@phungngocduy2810"
            className="text-sky-700 underline"
            target="_blank"
            rel="noreferrer noopener"
          >
            Check out our official youtube channel{" "}
            <BsYoutube className="inline-block stroke-white text-[#ff0000]" />
          </a>{" "}
          <a className="text-[#0b1215] dark:text-[#E2E8F0]">
            to get an overview what are we doing
          </a>
        </div>
        <div>
          <Link to="/readmore" className="text-[#0b1215] dark:text-[#E2E8F0]">
            {" "}
            <span>Read more</span>
          </Link>{" "}
        </div>
      </div>
    </div>
  );
};
