"use client"

import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import Image from 'next/image';

const Bible: React.FC = () => {
    const container = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end start'],
    });

    const y = useTransform(scrollYProgress, [0, 1], ['0vh', '80vh']);

    return (
        <div className=' overflow-hidden' ref={container} >
            <motion.div style={{ y }} className='relative h-full'>
                <div className='flex justify-center'>
                    {/* <p className='text-lg text-center noto-serif-tc-regular mt-32 mb-32 '>
                        我們清晨起來往葡萄園去<br />
                        看看葡萄發芽開花沒有<br />
                        石榴放蕊沒有<br />
                        我在那裡要將我的愛情給你<br />
                        - 雅歌7:12 -
                    </p> */}
                    <Image src="/bible.png" alt="Eason & Cathy" width={350} height={200} className="mt-52 mb-8" />
                    <Image
                        src="/line2.png"
                        alt="for you"
                        width={500}
                        height={500} 
                        className='absolute top-36'
                    />
                </div>
                <Image 
                    src="/intheair.jpg" 
                    alt="image" 
                    width={500} 
                    height={375} 
                    style={{ objectFit: 'cover' }} 
                    className='image-gradient my-12 h-[600px]' // 使用 w-full 和 h-auto
                />
            </motion.div>
        </div>
    );
};

export default Bible;
