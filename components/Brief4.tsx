import Image from 'next/image';

export default function Brief3() {
    return (
        <section className="relative flex flex-col items-center justify-center">
            
            <div className="w-full sm:w-[500px] sm:h-auto overflow-hidden mt-1">
                <Image
                    src="/land.jpg"
                    alt="簡介照片"
                    layout="responsive"
                    width={500}
                    height={333}
                    className="shadow-lg"
                />
            </div>
            <div className="w-full sm:w-[500px] sm:h-auto overflow-hidden mt-1">
                <Image
                    src="/handsonback.jpg"
                    alt="簡介照片"
                    layout="responsive"
                    width={500}
                    height={333}
                    className="shadow-lg"
                />
            </div>
            <div className="w-full sm:w-[500px] sm:h-auto overflow-hidden mt-1">
                <Image
                    src="/intheair.jpg"
                    alt="簡介照片"
                    layout="responsive"
                    width={500}
                    height={333}
                    className="shadow-lg"
                />
            </div>




        </section>
    );
}
