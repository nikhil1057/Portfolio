"use client";

import { useEffect, useRef, useState } from "react";

interface TypeWriterProps {
  text: string;
  delay?: number;
  speed?: number;
  onComplete?: () => void;
}

export default function TypeWriter({
  text,
  delay = 0,
  speed = 50,
  onComplete,
}: TypeWriterProps) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);
  const [done, setDone] = useState(false);
  const indexRef = useRef(0);

  useEffect(() => {
    const startTimeout = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    const interval = setInterval(() => {
      if (indexRef.current < text.length) {
        setDisplayed(text.slice(0, indexRef.current + 1));
        indexRef.current++;
      } else {
        clearInterval(interval);
        setDone(true);
        onComplete?.();
      }
    }, speed);
    return () => clearInterval(interval);
  }, [started, text, speed, onComplete]);

  return (
    <span className="font-heading">
      {displayed}
      <span
        className={`cursor-blink inline-block w-[2px] h-[1em] bg-accent ml-0.5 align-middle ${
          done ? "" : ""
        }`}
      />
    </span>
  );
}
