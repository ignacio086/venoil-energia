'use client';

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { popt } from '../fonts/Fonts';

type TypewriterProps = {
  text: string;
  className?: string;
  speed?: number; // ms entre letras
};

export default function Typewriter({ text, className = '', speed = 75 }: TypewriterProps) {
  const [visibleText, setVisibleText] = useState('');

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setVisibleText(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <span className={className}>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={popt.style}
      >
        {visibleText}
        <motion.span
          className="inline-block w-[1ch] bg-black ml-1"
          animate={{ opacity: [1, 0] }}
          transition={{ repeat: Infinity, duration: 0.6 }}
        />
      </motion.span>
    </span>
  );
}