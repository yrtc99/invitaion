import Image from 'next/image'

export default function AboutWedding() {
  return (
    <section className="flex flex-col items-center justify-center p-4">
      <Image src="/囍.jpg" alt="newlyweds" width={300} height={200} className=" shadow-lg" />
      <Image src="/loc0115.png" alt="婚禮時間" width={300} height={200} className=" shadow-lg mt-2" />
      <p className="text-lg text-center max-w-2xl noto-serif-tc-regular mt-8 tracking-widest font-bold">
        2025年01月15日<br/>
        12:00入場 | 12:30開始<br/>
        華麗風采宴會館
      </p>
    </section>
  )
}