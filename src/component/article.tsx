import React from "react";
import { estimateReadingTime } from "M:/codespace/NewVite/src/utils/readingTime.tsx";

interface ArticleProps {
  content: string;
}

const Article: React.FC<ArticleProps> = ({ content }) => {
  const readingTime = estimateReadingTime(content);

  return (
    <div>
      <p>Estimated reading time: {readingTime} minute(s)</p>
      <div>{content}</div>
    </div>
  );
};

export default Article;
