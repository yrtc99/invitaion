"use client"
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function ImageGallery() {
  const images = [
    '/gallery/slide1.jpg',
    '/gallery/slide2.jpg',
    '/gallery/slide102.jpeg',
    '/gallery/slide101.jpeg',
    '/gallery/slide4.jpg',
    '/gallery/slide5.jpg',
    '/gallery/slide103.jpeg',



  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // 自動播放幻燈片的效果
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // 每3秒切換一次圖片

    return () => {
      clearInterval(interval); // 組件卸載時清除計時器
    };
  }, [currentIndex]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  // 添加觸摸事件處理
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // 向左滑動
      nextSlide();
    }
    if (touchStart - touchEnd < -50) {
      // 向右滑動
      prevSlide();
    }
  };

  return (
    <section className=" p-4 flex flex-col items-center justify-center">

      <div className=' text-center noto-serif-tc-regular mt-16 mb-10'>
        
        <Image src="/godlove.png" alt="Eason & Cathy" width={150} height={60} className="m-20" />
      
      </div>
      <div className="relative w-full max-w-3xl h-[400px] my-12"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* 幻燈片圖片 */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src={images[currentIndex]}
            alt={`婚紗照 ${currentIndex + 1}`}
            width={400}
            height={600}
            className="rounded-lg shadow-lg object-cover mx-auto"
          />
        </div>

        {/* 左右控制按鈕
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full">
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full">
          &#10095;
        </button> */}
      </div>

      {/* 幻燈片指示器 */}
      <div className="flex mt-14 space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-1 h-1 rounded-full ${index === currentIndex ? 'bg-gray-800' : 'bg-gray-400'
              }`}
          ></div>
        ))}
      </div>

      <Image src="/final names.png" alt="Eason & Cathy" width={350} height={120} className=" my-4" />

    </section>
  );
}
