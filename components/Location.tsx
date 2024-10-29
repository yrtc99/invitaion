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
      <p className=' text-sm text-center noto-serif-tc-regular m-6'>
        "場館地點"
      </p>
      <div className="w-8 h-8 mb-4 mr-4">
      <svg 
          fill="#9F3D39" // 使用與標題相同的顏色
          width="50" 
          height="50" 
          viewBox="0 0 512 512" 
          className="mx-auto"
        >
          <g id="dish_x5F_spoon">
            <path d="M253.486,124.13c-74.931,0-135.892,60.961-135.892,135.892c0,74.932,60.961,135.893,135.892,135.893   c74.932,0,135.893-60.961,135.893-135.893C389.379,185.091,328.418,124.13,253.486,124.13z M253.486,388.715   c-70.961,0-128.691-57.732-128.691-128.693s57.73-128.691,128.691-128.691c70.962,0,128.693,57.73,128.693,128.691   S324.448,388.715,253.486,388.715z"/>
            <path d="M253.487,149.539c-60.921,0-110.484,49.563-110.484,110.482c0,60.921,49.563,110.483,110.484,110.483   c60.92,0,110.482-49.563,110.482-110.483C363.97,199.102,314.407,149.539,253.487,149.539z M253.487,363.305   c-56.95,0-103.284-46.332-103.284-103.283c0-56.95,46.334-103.282,103.284-103.282S356.77,203.071,356.77,260.021   C356.77,316.973,310.438,363.305,253.487,363.305z"/>
            <path d="M481.648,140.936c0-29.894-18.253-54.213-40.689-54.213c-22.436,0-40.688,24.319-40.688,54.213   c0,28.276,16.333,51.552,37.088,53.989v39.019h-8.559v186.479h24.316V233.943h-8.558v-39.019   C465.314,192.487,481.648,169.212,481.648,140.936z M445.918,241.144v172.077h-9.917V241.144H445.918z M440.959,187.949   c-18.465,0-33.487-21.091-33.487-47.014s15.022-47.014,33.487-47.014c18.466,0,33.489,21.091,33.489,47.014   S459.425,187.949,440.959,187.949z"/>
            <path d="M97.256,162.954c0,15.241-11.485,27.843-26.253,29.627V98.366h-7.2v94.215c-14.768-1.784-26.251-14.386-26.251-29.627   V98.366h-7.2v64.588c0,19.216,14.704,35.058,33.451,36.874V238.8h-8.558v186.478h24.317V238.8h-8.56v-38.972   c18.747-1.816,33.452-17.658,33.452-36.874V98.366h-7.199V162.954z M72.362,246v172.078h-9.917V246H72.362z"/>
          </g>
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