import { skillDat } from "../lib/dat";

export default function Skills() {
  return (
    <div className="max-w-[53rem] scroll-mt-28 space-y-10 text-center sm:mb-40">
      <div className="text-3xl text-white">My Skills</div>
      <ul className="flex flex-wrap justify-center gap-2 text-lg">
        {skillDat.map((skill, index) => (
          <li
            className="select-none rounded-full border border-black/[0.1] bg-white px-5 py-3"
            key={index}
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
