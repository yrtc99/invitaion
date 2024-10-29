import Head from 'next/head'
import Intro from '@/components/Intro'
import Brief from '@/components/Brief'
import Brief3 from '@/components/Brief3'
import WereMarried from '@/components/WereMarried'
import AboutWedding from '@/components/AboutWedding'
import Location from '@/components/Location'
import ImageGallery from '@/components/ImageGallery'
import PlayButton from '@/components/PlayButton'


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
        <PlayButton />
        <Intro />
        <Brief />

        {/* 頭 */}
        <Brief2addtest />
        {/* 尾 */}
        <Poet />
        <Brief3 />

        {/* 頭 */}
        <Bible />
        {/* 尾 */}
        <WereMarried />

        <AboutWedding />

        <Location />
        

        <ImageGallery />
      </main>
    </div>
  )
}