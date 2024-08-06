import React from "react";

const topics = [
  "The Frontend Developer Career Path",
  "Learn React",
  "Learn JavaScript",
  "Advanced React",
  "Learn Tailwind CSS",
  "Learn CSS Animations",
  "Build a Movie Search App in React",
  "JavaScript Deep Dive",
  "Learn Responsive Web Design",
  "Learn Binary Search in JavaScript",
  "Learn HTML and CSS",
  "The Frontend Developer Career Path",
  "Learn React",
  "Learn JavaScript",
  "Advanced React",
  "Learn Tailwind CSS",
  "Learn CSS Animations",
  "Build a Movie Search App in React",
  "JavaScript Deep Dive",
  "Learn Responsive Web Design",
  "Learn Binary Search in JavaScript",
  "Learn HTML and CSS",
];

const TopicList: React.FC = () => {
  return (
    <div className="ml-4 mt-[0.15rem] rounded-md bg-transparent p-[0.2rem] text-xs text-[#878f9b] backdrop-brightness-125">
      {topics.length}
    </div>
  );
};

export default TopicList;
