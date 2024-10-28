import Image from 'next/image';

export default function Briefadd() {
  return (
    <section className=" flex flex-col  justify-between p-0 m-0 w-full relative">
      {/* 最上方置中的標題 */}
      {/* <h1 className='absolute text-2xl  left-1/2 transform -translate-x-1/2 bodoni-moda-regular'>
        -- about us --
      </h1> */}

      {/* 左邊的文字區塊，設置為 1/3 寬度 */}
      <p className="absolute text-2xl  tracking-widest noto-serif-tc-regular mt-72 ml-6" style={{ color: '#ffffff' }}>
        餘生可貴<br />
        /<br />
        有你相陪<br />
        /<br />
        只願愛你<br />
        /<br />
        全心全意
      </p>

      
      <div className='flex justify-left w-full '>
        <Image src="/aboutus.jpg" alt="簡介2照片" width={500} height={375} className="" />
      </div>
    </section>
  );
}
