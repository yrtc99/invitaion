"use client"
import React, { useRef } from 'react';
import Image from 'next/image';

import { useScroll, useTransform, motion } from 'framer-motion';

const Brief2addtest: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0vh', '80vh']);

  return (
    <div className='h-screen overflow-hidden' ref={container}>

      <motion.div style={{ y }} className='relative h-full'>
        <h1 className=' text-3xl text-center font-bold bodoni-moda-regular mt-28 mb-4 ' style={{ color: '#9F3D39' }}>
          - About us -
        </h1>
        <p className=' text-lg text-center noto-serif-tc-regular mt-8 mb-10'>
          "人生有三萬多天，很開心這一天
          <br />
          你專門為我們而來"
        </p>
        <Image src="/aboutus.jpg" alt="image" width={500} height={375} style={{ objectFit: 'cover' }} />
      </motion.div>
    </div>
  );
};

export default Brief2addtest;
