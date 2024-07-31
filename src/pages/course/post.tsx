import { Link } from "react-router-dom";
import { HiArrowUpRight } from "react-icons/hi2";

export const PostCourse = () => {
  const TAGS = [
    {
      tag: "Theory of Many-body",
      description:
        "The physical world consists of interacting many-particle systems. We shall rely on second quantization, quantum-field theory(QFT), and the use of Green's function.",
      time: "15",
      lesson: "Still updating",
    },
    {
      tag: "Bio Physics",
      description: "This is Bio Physics",
      time: "15",
      lesson: "Still updating",
    },
    {
      tag: "PYTHON",
      description: "This course ",
      time: "10",
      lesson: "Completed",
    },
    {
      tag: "Theory of Solid Matter",
      description: "This is another Bio Physics post",
      time: "15",
      lesson: "Still updating",
    },
  ];

  return (
    <div className="space-y-[2.5rem]">
      <div className="flex flex-col gap-10">
        {TAGS.map((item, index) => (
          <Link
            key={index}
            id={item.tag}
            to={`/course/${item.tag}/${item.tag}`}
            className="group"
          >
            <div className="h-fit w-[20rem] rounded-xl bg-transparent p-4 backdrop-blur backdrop-brightness-125 group-hover:backdrop-brightness-200 md:w-[30rem] xl:w-[40rem]">
              <div className="space-y-2">Browse de nhap{TAGS.length}</div>
              <p>
                <span className="font-Poppins font-semibold text-white">
                  {item.tag}
                </span>{" "}
                <HiArrowUpRight className="mb-1 inline-block text-sky-500 opacity-0 group-hover:opacity-100"></HiArrowUpRight>
              </p>
              <span className="font-Poppins text-white">
                {item.description}
              </span>
              <div className="mt-6">
                <p className="space-x-10 text-sm text-white">
                  <span>Week : {item.time} weeks</span>
                  <span>Lessons: {item.lesson}</span>
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
