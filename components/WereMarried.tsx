"use client"

import Image from 'next/image';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const WereMarried: React.FC = () => {
  const sectionRef = useRef(null);
  const isSectionInView = useInView(sectionRef, { amount: 0.2 });

  // 定義容器的動畫
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // 子元素之間的延遲時間
      },
    },
  };

  // 定義子元素的動畫
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 } 
    },
  };

  return (
    <motion.section 
      className="flex flex-col items-center justify-between noto-serif-tc-regular" 
      ref={sectionRef}
      variants={containerVariants}
      initial="hidden"
      animate={isSectionInView ? "visible" : "hidden"}
    >
      <motion.h1
        className='text-3xl text-center font-bold bodoni-moda-regular mt-20 mb-4'
        style={{ color: '#9F3D39' }}
        variants={itemVariants}
      >
        - We're Married -
      </motion.h1>

      <motion.p
        className='text-center noto-serif-tc-regular mt-8 mb-10'
        variants={itemVariants}
      >
        在這個特別的日子
        <br />
        誠摯地邀請
        <br />
        我們人生中重要的家人與朋友來參與
      </motion.p>

      <div className="flex flex-row w-full justify-center px-6">
        <motion.div
          className="w-1/2 text-center space-y-4"
          variants={itemVariants}
        >
          <Image
            src="/gandb.jpg"
            alt="新郎"
            width={200}
            height={300}
            className="w-[150px] h-[300px] rounded-[100px] object-cover mb-[5%] shadow-lg mx-auto"
            style={{ objectPosition: '20% 15%' }}
          />
          <p className="text tracking-super-wide">新郎</p>
          <p className="text-lg font-bold tracking-extra-wide">陳易勝</p>
          <p className="text tracking-super-wide pt-4">新郎父母</p>
          <div className='flex flex-row justify-center items-center space-x-4'>
            <p className="text-lg font-bold tracking-extra-wide">陳建成</p>
            <p className="text-lg font-bold tracking-extra-wide">張育華</p>
          </div>
        </motion.div>

        <motion.div
          className="w-1/2 text-center space-y-4"
          variants={itemVariants}
        >
          <Image
            src="/gandb.jpg"
            alt="新娘"
            width={200}
            height={300}
            className="w-[150px] h-[300px] rounded-[100px] object-cover mb-[5%] shadow-lg mx-auto"
            style={{ objectPosition: '80% 15%' }}
          />
          <p className="tracking-super-wide">新娘</p>
          <p className="text-lg font-bold tracking-extra-wide">莊智涵</p>
          <p className="tracking-super-wide pt-4">新娘父母</p>
          <div className='flex flex-row justify-center items-center space-x-4'>
            <p className="text-lg font-bold tracking-extra-wide">莊慶章</p>
            <p className="text-lg font-bold tracking-extra-wide">李素雲</p>
          </div>
        </motion.div>
      </div>

      <motion.div
        className='mt-16'
        variants={itemVariants}
      >
        <Image src="/heartpic.png" alt="底部圖片" width={50} height={50} className="mx-auto" />
      </motion.div>
    </motion.section>
  );
};

export default WereMarried;