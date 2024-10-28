import Image from 'next/image';

export default function Briefadd() {
  return (
    <section className=" flex flex-col  justify-between p-0 m-0 w-full relative">
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
