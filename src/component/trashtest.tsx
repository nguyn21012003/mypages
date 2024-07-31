import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { VscFeedback } from "react-icons/vsc";
const Handle: React.FC = () => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const divRef = useRef<HTMLDivElement>(null);

  const handleDivClick = () => {
    setIsFocused(true);
    if (divRef.current) {
      divRef.current.focus();
    }
  };

  useEffect(() => {
    if (isFocused && divRef.current) {
      divRef.current.focus();
    }
  }, [isFocused]);

  return (
    <div
      ref={divRef}
      tabIndex={0}
      onClick={handleDivClick}
      className={`rounded p-4 text-white ${isFocused ? "bg-blue-500" : "bg-gray-700"} focus:outline-none focus:ring-2 focus:ring-blue-400`}
    >
      <Link
        to=""
        className="group flex items-center rounded-lg p-2 text-base font-normal hover:backdrop-brightness-125 focus:backdrop-brightness-200 dark:hover:bg-gray-700"
      >
        <VscFeedback className="text-[#878f9b] group-focus:text-sky-500" />
        <span className="ml-3 text-[#878f9b] group-focus:text-white dark:text-white">
          Feedback
        </span>
      </Link>
    </div>
  );
};

export default Handle;
