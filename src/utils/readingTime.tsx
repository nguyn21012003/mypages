export const estimateReadingTime = (text: string): number => {
  const wordsPerMinute = 250; // Average reading speed
  const words = text
    .trim()
    .split(/\s+/)
    .filter((word) => word.length > 0);
  const wordCount = words.length;
  const readingTime = wordCount / wordsPerMinute;
  return Math.ceil(readingTime);
};
