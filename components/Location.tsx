import Image from 'next/image'

export default function Location() {
  return (
    <section className=" flex flex-col items-center justify-center p-4">
      <a href="https://docs.google.com/forms/d/1erX-Us30adzdloo4FjeGCTv9k_IPRoOsm0fc3FsnWE8/edit?usp=drivesdk"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-customRed noto-serif-tc-regular text-white font-bold mt-10 py-2 px-4 rounded animate-pulsate">
        填寫報名表單
      </a>
      <h1 className=' text-3xl text-center bodoni-moda-regular mt-28 mb-4' style={{ color: '#9F3D39' }}>
        - Location -
      </h1>
      <p className=' text-sm text-center noto-serif-tc-regular mb-6'>
        "場館地點"
      </p>


      <Image src="/res0115.jpeg" alt="婚禮地圖" width={350} height={200} className=" shadow-lg" />
      <p className="text-lg text-center max-w-2xl noto-serif-tc-regular mt-10 tracking-widest font-bold">
        03-5359898<br />
        華麗風采宴會館 | 維多利亞廳<br />
        新竹市北區中正路245號7F
      </p>
      <h1 className=' text-3xl text-center bodoni-moda-regular mt-28 mb-4' style={{ color: '#9F3D39' }}>
        - Transportation -
      </h1>
      <p className=' text-sm text-center noto-serif-tc-regular mb-6'>
        "交通資訊"
      </p>
      <Image src="/res0115_2.jpeg" alt="婚禮交通" width={350} height={200} className=" shadow-lg " />


      


    </section>
  )
}