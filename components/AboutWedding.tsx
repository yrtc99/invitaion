import Image from 'next/image'

export default function AboutWedding() {
  return (
    <section className="flex flex-col items-center justify-center p-4">
      <h1 className=' text-3xl text-center bodoni-moda-regular mt-28 mb-4' style={{ color: '#9F3D39' }}>
        - About Wedding -
      </h1>
      <p className=' text-sm text-center noto-serif-tc-regular mb-6'>
        "婚禮的時間與地點"
      </p>
      <Image src="/囍.jpg" alt="newlyweds" width={300} height={200} className=" shadow-lg" />
      <Image src="/calender0125.png" alt="婚禮時間" width={300} height={200} className=" shadow-lg mt-2" />
      <p className="text-lg text-center max-w-2xl noto-serif-tc-regular mt-8 tracking-widest font-bold">
        2025年01月25日<br />
        12:00入席 | 12:30開始<br />
        華麗風采宴會館
      </p>
    </section>
  )
}