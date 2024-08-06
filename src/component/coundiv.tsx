import React, { useEffect, useRef, useState } from "react";

const CountDivs: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [divCount, setDivCount] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      const divs = containerRef.current.querySelectorAll("div");
      setDivCount(divs.length);
    }
  }, []);

  return (
    <div>
      <div ref={containerRef}>
        <div>Div 1</div>
        <div>Div 2</div>
        <div>Div 3</div>
        {/* Add more div elements here */}
      </div>
      <p>Number of div elements: {divCount}</p>
    </div>
  );
};

export default CountDivs;
