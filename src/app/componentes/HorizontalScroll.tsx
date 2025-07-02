'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'motion/react';

const logos = [
  '/logos/logo1.png',
  '/logos/logo2.png',
  '/logos/logo3.png',
  '/logos/logo4.png',
  '/logos/logo5.png',
  '/logos/logo6.png',
  '/logos/logo7.png',
  '/logos/logo8.png',
];

const duplicated = [...logos, ...logos, ...logos,...logos,...logos,...logos,...logos];

export default function LogoScroller() {
  const controls = useAnimation();
  const [speed, setSpeed] = useState(40); // duration in seconds

  useEffect(() => {
    const animateScroll = async () => {
      await controls.start({
        x: ['0%', '-33.33%'],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
            duration: speed,
          },
        },
      });
    };
    animateScroll();
  }, [controls, speed]);

  useEffect(() => {
    const handleScroll = () => {
      const newSpeed = Math.max(10, 40 - window.scrollY / 10);
      setSpeed(newSpeed);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-gradient-to-r from-verde to-azul py-10 overflow-hidden relative">
      {/* Gradientes laterales */}
      <div className="pointer-events-none absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-verde to-transparent z-10" />
      <div className="pointer-events-none absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-azul to-transparent z-10" />

      <motion.div
        className="flex gap-10 min-w-[300vw] will-change-transform"
        animate={controls}
        onMouseEnter={() => setSpeed((prev) => prev / 1.5)}
        onMouseLeave={() => setSpeed(40)}
      >
        {duplicated.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`logo-${index}`}
            width={50}
            height={50}
            className="object-contain"
          />
        ))}
      </motion.div>
    </div>
  );
}

