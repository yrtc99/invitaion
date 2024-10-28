import Head from 'next/head'
import Intro from '@/components/Intro'
import Brief from '@/components/Brief'
import Brief2 from '@/components/Brief2'
import Brief3 from '@/components/Brief3'

import WereMarried from '@/components/WereMarried'
import AboutWedding from '@/components/AboutWedding'
import Location from '@/components/Location'
import ImageGallery from '@/components/ImageGallery'
import PlayButton from '@/components/PlayButton'

import Brief2add from '@/components/Brief2add'
import Brief2addtest from '@/components/Brief2addtest'
import Poet from '@/components/Poet'
import Bible from '@/components/Bible'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Head>
        <title>Eason & Cathy 的婚禮邀請</title>
        <meta name="description" content="Eason & Cathy 的婚禮邀請網站" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full">
        <PlayButton/>
        <Intro />
        <Brief />
        <h1 className=' text-2xl text-center bodoni-moda-regular mt-28 mb-8 ' style={{ color: '#9F3D39' }}>
          -- About Us --
        </h1>
        <Brief2 />
        <p className=' text-lg text-center noto-serif-tc-regular mt-24 mb-10'>
          "人生有三萬多天，很開心這一天
          <br />
          你專門為我們而來"
        </p>
        <h1 className=' text-2xl text-center bodoni-moda-regular mt-28 mb-4 ' style={{ color: '#9F3D39' }}>
          - ABOUT US -
        </h1>
        <p className=' text-sm text-center noto-serif-tc-regular mb-6'>
          "關於我們"
        </p>
        <Brief2add />
        <p className=' text-lg text-center noto-serif-tc-regular mt-24 mb-10'>
          "人生有三萬多天，很開心這一天
          <br />
          你專門為我們而來"
        </p>
        
        {/* 頭 */}
        <Brief2addtest />
        {/* 尾 */}
        <Poet/>
        <Brief3 />

        {/* 頭 */}
        <Bible/>
        {/* 尾 */}
        <WereMarried />

        
        <AboutWedding />
        
        <Location />
        <p className=' text-center noto-serif-tc-regular mt-16 mb-10'>
          -
          <br />
          我們愛
          <br />
          因為神先愛我們<br />
          -
        </p>

        <ImageGallery />
      </main>
    </div>
  )
}