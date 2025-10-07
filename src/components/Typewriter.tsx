"use client";

import { Typewriter as TW } from "react-simple-typewriter";

type TypewriterProps = {
  text: string;
  typeSpeed?: number;
  cursor?: boolean;
  cursorStyle?: string;
};

export default function Typewriter({
  text,
  typeSpeed = 70,
  cursor = true,
  cursorStyle = "|",
}: TypewriterProps) {
  return (
    <TW
      words={[text]}
      typeSpeed={typeSpeed}
      cursor={cursor}
      cursorStyle={cursorStyle}
    />
  );
}
