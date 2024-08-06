import { Link } from "react-router-dom";

export const FormFeedback: React.FC = () => {
  return (
    <div className="">
      <form className="flex h-screen w-full items-center justify-center">
        <div className="text-2xl">
          <p>
            <a
              href="https://forms.gle/wBy5rEtEXBmLGqY28"
              title="https://forms.gle/wBy5rEtEXBmLGqY28"
              className="text-[#878f9b] hover:text-white hover:underline"
              target="_blank"
              rel="noreferrer noopener"
            >
              You can acces this link via google form to write feedback for us
            </a>
          </p>
          <p>
            <a className="text-[#878f9b]">
              Or in case you don't want to acces via link you can contact me at
              tab
            </a>
            <Link to="/about" className="text-white">
              {" "}
              About me{" "}
            </Link>
          </p>
        </div>
        <div className="hidden space-y-12">
          <div className="space-y-4">
            <h2 className="">Profile</h2>
            <a className="">Your personal information is protected</a>
            <h2 className="">Your name</h2>
            <div>
              <input placeholder="name" className="rounded-lg"></input>
            </div>

            <textarea
              placeholder="Your feedback"
              className="w-[30rem] rounded-lg placeholder:text-sm"
            ></textarea>
            <div className="flex w-full items-center justify-center">
              <label
                htmlFor="dropzone-file"
                className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:backdrop-brightness-125 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:backdrop-brightness-125"
              >
                <div className="flex flex-col items-center justify-center pb-6 pt-5">
                  <svg
                    className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-Poppins font-semibold text-sky-700">
                      Click to upload
                    </span>{" "}
                    or drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
              </label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
