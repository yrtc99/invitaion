import Image from 'next/image';

export default function Brief2() {
  return (
    <section className=" flex flex-row items-center justify-between p-0 m-0 w-full relative">
      {/* 最上方置中的標題 */}
      {/* <h1 className='absolute text-2xl  left-1/2 transform -translate-x-1/2 bodoni-moda-regular'>
        -- about us --
      </h1> */}

      {/* 左邊的文字區塊，設置為 1/3 寬度 */}
      <p className="text-sm text-center tracking-widest noto-serif-tc-regular mt-0 basis-1/3">
        餘生可貴<br />
        /<br />
        有你相陪<br />
        /<br />
        只願愛你<br />
        /<br />
        全心全意
      </p>

      {/* Love story 旋轉90度 */}
      {/* <p className="text-lg text-center rotate-90 absolute ">Love story</p> */}

      {/* 右邊的圖片區塊，設置為 2/3 寬度 */}
      <div className='basis-2/3 flex justify-end'>
        <Image src="/brief201.jpg" alt="簡介2照片" width={250} height={375} className="rounded-lg" />
      </div>
    </section>
  );
}
