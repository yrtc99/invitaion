import Image from 'next/image'


export default function Intro() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center text-center p-4">
            <div className='flex flex-col w-full ml-8'>
                <h2 className="text-2xl mb-2 bodoni-moda-regular w-full text-left  ">2025.01.25</h2>
                <h1 className="text-2xl mb-4 bodoni-moda-regular w-full text-left">Save the Date</h1>
            </div>
            <Image src="/intro.jpg" alt="Eason & Cathy" width={350} height={400} className="rounded-lg shadow-lg mb-8" />

            <h1 className="text-5xl mb-4 great-vibes-regular tracking-widest  ">Eason & Cathy</h1>

            <h3 className="text-2xl bodoni-moda-regular tracking-widest border-t border-b w-full border-black py-4">- cordially invite you -</h3>





        </section>
    )
}