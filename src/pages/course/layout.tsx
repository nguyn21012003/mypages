import SearchBar from "../../component/searchbar";
import SectionDivider from "../../component/sectiondivider";

export const LayoutCourse: React.FC = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div>
        <p>
          <a href="" className="text-white">
            Course
          </a>
        </p>
        <p>
          <a className="text-center text-white">
            Explore the Theoretical Physics Courses
          </a>
        </p>
        <p>
          <a className="text-center text-white">
            Search for courses, materials & teaching resources
          </a>
        </p>
        <div className="-mb-[0.55rem] flex gap-x-5">
          <p>
            <a href="">Browse</a>
          </p>
          <p>
            <a href="">Browse</a>
          </p>
          <p>
            <a href="">Browse</a>
          </p>
        </div>
        <SectionDivider></SectionDivider>
        <div>
          <SearchBar></SearchBar>
        </div>
      </div>
    </div>
  );
};
