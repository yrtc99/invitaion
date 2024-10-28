import Image from 'next/image';

export default function Brief3() {
    return (
        <section className="relative flex flex-col items-center justify-center"> {/* 設置父容器 relative */}

            <Image src="/brief2text.png" alt="for you" width={300} height={300} className='absolute bottom-32 left-32 ' />

            <div className="w-full sm:w-[500px] sm:h-auto overflow-hidden mt-24 mr-24">
                <Image
                    src="/brief202.jpg"
                    alt="簡介照片"
                    layout="responsive"
                    width={500}
                    height={333}
                    className="shadow-lg"
                />
            </div>
            <Image src="/line2.png" alt="for you" width={500} height={300} className='absolute top-96' />




        </section>
    );
}
