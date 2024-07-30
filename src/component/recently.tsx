import { Link } from "react-router-dom";

import { HiArrowUpRight } from "react-icons/hi2";

export default function RecentlyPost() {
  return (
    <div className="space-y-[2.5rem]">
      <p className="text-center">
        <a className="font-Poppins text-3xl text-white">Recently</a>
      </p>
      <div className="flex flex-wrap gap-10">
        <a href="/blog/layout" className="group">
          <div className="h-[13rem] w-[24rem] rounded-xl bg-transparent p-4 backdrop-blur backdrop-brightness-125 group-hover:backdrop-brightness-200">
            <div className="space-y-2">
              <p>
                <a className="font-Poppins font-semibold text-white">
                  Theoretical of Many-body
                </a>
                <HiArrowUpRight className="mb-1 inline-block opacity-0 group-hover:text-sky-500 group-hover:opacity-100"></HiArrowUpRight>
              </p>
              <p>
                <a className="text-normal text-[#878f9b]">
                  The physical world consists of interacting many-particle
                  systems. We shall rely on second quantization, quantum-field
                  theory(QFT), and the use of Green's function.
                </a>
              </p>
            </div>
            <div className="mt-10">
              <p className="space-x-10 text-sm text-white">
                <a>Week : 15 weeks</a>
                <a>Lessons: Still updating</a>
              </p>
            </div>
          </div>
        </a>

        <a href="/blog/layout" className="group">
          <div className="h-[13rem] w-[24rem] rounded-xl bg-transparent p-4 backdrop-blur backdrop-brightness-125 group-hover:backdrop-brightness-200">
            <div className="space-y-2">
              <p>
                <a className="font-Poppins font-semibold text-white">
                  Theoretical of Many-body
                </a>
                <HiArrowUpRight className="mb-1 inline-block opacity-0 group-hover:text-sky-500 group-hover:opacity-100"></HiArrowUpRight>
              </p>
              <p>
                <a className="text-normal text-[#878f9b]">
                  The physical world consists of interacting many-particle
                  systems. We shall rely on second quantization, quantum-field
                  theory(QFT), and the use of Green's function.
                </a>
              </p>
            </div>
            <div className="mt-10">
              <p className="space-x-10 text-sm text-white">
                <a>Week : 15 weeks</a>
                <a>Lessons: Still updating</a>
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
