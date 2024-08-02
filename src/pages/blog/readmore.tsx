export const HomeMore = () => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="my-10 space-y-[10rem] bg-transparent lg:ml-[10rem] lg:w-[40rem] xl:ml-0 xl:w-[50rem]">
        <p>
          <h2 className="text-center text-2xl uppercase text-white dark:text-[#E2E8F0]">
            # what is this website?
          </h2>
        </p>
        <p className="text-center">
          <a className="text-xl text-[#7A8BA3]">
            {" "}
            This website is a non-profit project. Its contains two main
            sections. Firstly, it serves as my portfolio. Secondly, it features
            articles on Theoretical Physics with a specific purpose.
          </a>
        </p>
        <p>
          <h2 className="text-center text-2xl uppercase text-white dark:text-[#E2E8F0]">
            # preface
          </h2>
        </p>
        <p className="text-center">
          <a className="text-xl text-[#7A8BA3]">
            This website was created to bring Theoretical Physics to{" "}
            <u>physics students</u> who are studying as freshmen or juniors in
            university. Beyond this creation, its was inspired by{" "}
            <a
              href="https://ocw.mit.edu/"
              className="underline decoration-sky-500"
            >
              The MIT OpenCourseware
            </a>
            {". "}
            It is a collaborative effort by enthusiasts of Theoretical Physics
            from HCMUS. At the time of its creation, we were juniors, eager to
            enhance our skills in writing and coding. We decided to create this
            website to share our knowledge and experiences, covering topics from
            Quantum Mechanics to Cosmology. It may sound ambitious, but my
            friends and I were very excited and dedicated our hearts and souls
            to this project.
          </a>
        </p>
        <p>
          <h2 className="text-center text-2xl uppercase text-white dark:text-[#E2E8F0]">
            # our logo
          </h2>
        </p>
        <p className="text-center">
          <div className="-mt-16 mb-10 flex select-none items-center justify-center rounded-2xl">
            <img src="./logo.svg" alt="" className="size-[20rem]" />
          </div>
          <a className="text-xl text-[#7A8BA3]">
            This logo was inspired by the phrase: "Shut up and calculate!" from
            Nathaniel David Mermin(born 30 March 1935). Mermin is a solid state
            physicist at Cornell Univeristy. <br /> Mermin coined the phrase
            "Shut up and calculate!" to summarize Copenhagen-type views.
          </a>
        </p>
        <p>
          <h2 className="text-center text-2xl uppercase text-white dark:text-[#E2E8F0]">
            # what is this website can do?
          </h2>
        </p>
        <p className="text-center">
          <a className="text-xl text-[#7A8BA3]">
            This website was created to bring Theoretical Physics to{" "}
            <u className="decoration-white">physics students</u> who are
            studying as freshmen or juniors in university. It is a collaborative
            effort by enthusiasts of Theoretical Physics from HCMUS.
          </a>
        </p>
        <p className="text-center">
          <a className="text-2xl uppercase text-white">
            # It's not just Physics!
          </a>
        </p>
        <p className="text-center">
          <a className="text-lg text-[#7A8BA3]">
            At this place, we also provide courses about Mathematical for
            Physics which we using PYTHON as our main programming language.
            Perhaps, in the future, this website will include more programming
            languages like JavaScript, or React, HTML, CSS, etc.
          </a>
        </p>
        <p>
          <h2 className="text-center text-2xl uppercase text-white dark:text-[#E2E8F0]">
            # after credit
          </h2>
        </p>
        <p className="text-center indent-8">
          <a className="text-lg text-[#7A8BA3]">
            I want to express my gratitude to Dr. Vu Quang Tuyen, Dr. Nguyen Huu
            Nhan, Dr. Vo Quoc Phong, three lecturers in the Department of
            Theoretical Physics. They have guided us throughtout our time at the
            department and at University.
          </a>
        </p>
        <p className="text-center indent-8">
          <a className="text-lg text-[#7A8BA3]">
            Many thanks to Phung Ngoc, Dao Duy Tung, Le Quoc Duy, Ho Ngo Thanh
            Khoa, Son Hoai An, my colleagues contributed to buiding and creating
            content for this website. Without their help, I can't complete this
            website, they inspired me a lot in building this website.
          </a>
        </p>
      </div>
    </div>
  );
};
