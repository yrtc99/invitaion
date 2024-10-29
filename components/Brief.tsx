import Image from 'next/image';

export default function Brief() {
    return (
        <section className="relative flex flex-col items-center justify-center"> {/* 設置父容器 relative */}
            <Image
                src="/heart corner.png"
                alt="heart corner"
                width={50}
                height={50}
                className='mt-8'
            />

            <div className="w-full sm:w-[500px] sm:h-auto overflow-hidden mt-16">
                <Image
                    src="/brief.jpg"
                    alt="簡介照片"
                    layout="responsive"
                    width={500}
                    height={333}
                    className="shadow-lg"
                />
            </div>
            <Image src="/for you thick.png" alt="for you" width={400} height={300} className='absolute mt-40 left-4 ' />
            {/* <p className="w-full text-lg text-center max-w-2xl tracking-widest pt-16 mt-6 noto-serif-tc-regular">
                謝謝主耶穌的預備<br />
                謝謝您們的關心牧養及代禱<br />
                當你們收到這分邀請函時<br />
                我們即將在主裡成家!
            </p> */}
            <Image src="/thanksppl.png" alt="Eason & Cathy" width={280} height={200} className="mt-24 mb-8" />


        </section>
    );
}
