export const PythonLayout: React.FC = () => {
  return (
    <div className="flex h-full w-full bg-transparent">
      <div className="mx-4 mb-10 flex flex-col text-pretty lg:ml-[14rem]">
        <h1 className="mt-[15rem] text-4xl font-semibold uppercase text-[#0b1215] dark:text-white">
          Learn Python
        </h1>
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
      </div>
    </div>
  );
};
