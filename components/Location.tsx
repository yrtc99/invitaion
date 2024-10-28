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
      <div className="w-8 h-8 mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          fill="#AC6F6D"
          className="w-full h-full"
        >
          <path
            d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24
	C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24
	C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"
          />
        </svg>
      </div>
      <a href="hhttps://maps.app.goo.gl/4FQJoBRkKxJjqhqh7"
        target="_blank"
        rel="noopener noreferrer"
        className="noto-serif-tc-regular  mt-4 py-2 px-4 ">
        點擊查看地圖
      </a>
      <a
        href="https://maps.app.goo.gl/sCEdirRB55m1KRuX9"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src="/res0115.jpeg" alt="婚禮地圖" width={350} height={200} className="shadow-lg" />
      </a>
      <Image src="/res0115_2.jpeg" alt="婚禮交通" width={350} height={200} className=" shadow-lg mt-4" />
      <p className="text-lg text-center max-w-2xl noto-serif-tc-regular mt-10 tracking-widest font-bold">
        03-5359898<br />
        華麗風采宴會館 | 維多利亞廳<br />
        新竹市北區中正路245號7F
      </p>
      
      





    </section>
  )
}