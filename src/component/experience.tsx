import { Showcase } from "../lib/dat";

export default function MyExperience() {
  return (
    <div className="max-w-[53rem] scroll-mt-28 space-y-10 text-center sm:mb-40">
      <div className="text-3xl text-white">My Skills</div>
      <ul className="">
        {Showcase.map((skill, index) => (
          <li className="" key={index}>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
