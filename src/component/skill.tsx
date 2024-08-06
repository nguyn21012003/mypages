import { skillDat } from "../lib/dat";

export default function Skills() {
  return (
    <div className="max-w-[53rem] scroll-mt-28 space-y-10 text-center sm:mb-40">
      <h1 className="text-3xl font-semibold text-[#0b1215] dark:text-white">
        My Skills
      </h1>
      <ul className="flex flex-wrap justify-center gap-2 text-lg">
        {skillDat.map((skill, index) => (
          <li
            className="select-none rounded-full border border-black/[0.1] bg-white px-5 py-3 shadow-xl"
            key={index}
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
