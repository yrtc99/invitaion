import Image from 'next/image'

export default function Location() {
  return (
    <section className=" flex flex-col items-center justify-center p-4">
      
      <div className="flex flex-wrap justify-center gap-2 mb-8">
      <Image src="/res0115.jpeg" alt="婚禮地圖" width={350} height={200} className=" shadow-lg" />
      <Image src="/res0115_2.jpeg" alt="婚禮交通" width={350} height={200} className=" shadow-lg " />
      </div>
      <a href="https://docs.google.com/forms/d/1erX-Us30adzdloo4FjeGCTv9k_IPRoOsm0fc3FsnWE8/edit?usp=drivesdk" 
   target="_blank" 
   rel="noopener noreferrer" 
   className="bg-customRed noto-serif-tc-regular text-white font-bold py-2 px-4 rounded animate-pulsate">
  填寫報名表單
</a>

      
    </section>
  )
}