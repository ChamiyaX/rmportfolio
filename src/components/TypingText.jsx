import { useEffect, useState } from "react";

export default function TypingText({ words, speed = 120, pause = 1200 }) {
  const [wordIndex, setWordIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting && subIndex === currentWord.length) {
          setIsDeleting(true);
          return;
        }

        if (isDeleting && subIndex === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
          return;
        }

        setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
      },
      isDeleting ? speed / 2 : subIndex === currentWord.length ? pause : speed
    );

    return () => clearTimeout(timeout);
  }, [subIndex, wordIndex, isDeleting, words, speed, pause]);

  return (
    <span className="text-brand-500">
      {words[wordIndex].substring(0, subIndex)}
      <span className="ml-0.5 animate-pulse">|</span>
    </span>
  );
}
