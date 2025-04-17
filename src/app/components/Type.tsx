'use client';

import { Typewriter } from 'react-simple-typewriter';

export default function TypewriterEffect() {
  return (
    <h1>
      <span style={{ color: 'purple', fontWeight: 'bold' }}>
        <Typewriter
          words={ [
            "Software Engineer"]}
          loop={5}
          cursor
          cursorStyle="."
          typeSpeed={100}
          deleteSpeed={100}
          delaySpeed={1000}
        />
      </span>
    </h1>
  );
}
