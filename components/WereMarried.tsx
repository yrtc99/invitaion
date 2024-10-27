import Image from 'next/image';

export default function WereMarried() {
  return (
    <section className="flex flex-col items-center justify-between  noto-serif-tc-regular">
      <div className="flex flex-row w-full justify-center px-6">
        <div className="w-1/2 text-center space-y-4">
          <Image
            src="/gandb.jpg"
            alt="新郎"
            width={200}
            height={300}
            className="w-[150px] h-[300px] rounded-[100px] object-cover mb-[5%] shadow-lg mx-auto"
            style={{ objectPosition: '20% 15%' }}  // 使用內聯樣式設定 object-position
          />
          <p className="text tracking-super-wide">新郎</p>
          <p className="text-lg font-bold tracking-extra-wide">陳易勝</p>
          <p className="text tracking-super-wide pt-4">新郎父母</p>
          <div className='flex flex-row justify-center items-center space-x-4'>
            <p className="text-lg font-bold tracking-extra-wide">陳建成</p>
            <p className="text-lg font-bold tracking-extra-wide">張育華</p>
          </div>
        </div>


        <div className="w-1/2 text-center space-y-4">
          <Image
            src="/gandb.jpg"
            alt="新娘"
            width={200}
            height={300}
            className="w-[150px] h-[300px] rounded-[100px] object-cover mb-[5%] shadow-lg mx-auto"
            style={{ objectPosition: '80% 15%' }}  // 使用內聯樣式設定 object-position
          />
          <p className=" tracking-super-wide">新娘</p>
          <p className="text-lg font-bold tracking-extra-wide">莊智涵</p>
          <p className=" tracking-super-wide pt-4">新娘父母</p>
          <div className='flex flex-row justify-center items-center space-x-4'>
            <p className="text-lg font-bold tracking-extra-wide">莊慶章</p>
            <p className="text-lg font-bold tracking-extra-wide">李素雲</p>
          </div>
        </div>

      </div>

      {/* 底部水平置中的圖片 */}
      <div className='mt-16'>
        <Image src="/heartpic.png" alt="底部圖片" width={50} height={50} className="mx-auto" />
      </div>
    </section >
  );
}
