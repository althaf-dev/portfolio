'use client';

import { Typewriter } from 'react-simple-typewriter';

export default function TypewriterEffect() {
  return (
    <h1>
      I am{' '}
      <span style={{ color: 'purple', fontWeight: 'bold' }}>
        <Typewriter
          words={ [
            "Software Developer",
            "MERN Stack Developer",
            "Open Source Contributor",
          ]}
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
