/* eslint-disable @next/next/no-sync-scripts */
import Image from 'next/image';
import { Inter } from 'next/font/google';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css" />
      <header className="w-full bg-white justify-center flex">
        <div className="h-[71px] w-[1400px] justify-center flex items-center">
          <a className="mr-[88px]">
            <Image src={'img/logo.png'} alt={''} width={228} height={40} />
          </a>
          <nav className="flex items-center fontATM text-[17px] text-[#686868]">
            <a className="h-[100%] block uppercase text-[#686868]" href="#">
              Tin tức sự kiện
            </a>
            <span className="px-[50px]">|</span>
            <a className="h-[100%] block uppercase text-[#686868]" href="#">
              Về chúng tôi
            </a>
            <span className="px-[50px]">|</span>
            <a className="h-[100%] block uppercase text-[#686868]" href="#">
              Sản phẩm
            </a>
            <span className="px-[50px]">|</span>
            <a className="h-[100%] block uppercase text-[#686868]" href="#">
              Đối tác
            </a>
            <span className="px-[50px]">|</span>
            <a className="h-[100%] block uppercase text-[#686868]" href="#">
              Liện hệ
            </a>
          </nav>
        </div>
      </header>
      <section className="h-[590px] bg-slate-300">
        {/* Slider main container */}
        <div className="swiper mySwiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide"><Image src={'img/bg1.jpg'} alt='' width={1920} height={590} /></div>
            <div className="swiper-slide"><Image src={'img/bg2.jpg'} alt='' width={1920} height={590} /></div>
          </div>
          <div className="swiper-pagination" />
        </div>
      </section>

      <main>
        <section className="bgType1 relative flex justify-center w-full">
          <div className='w-[1400px] py-[140px] flex justify-between'>
            <header className='flex'><span className='h-[47px] w-[25px] bg-[#b03a48] block'></span><h2 className='h-[47px] flex items-center bg-[#b03a48] ml-[12px] px-[30px] text-[#fff] uppercase'>Tin tức - sự kiện</h2></header>
          </div>
        </section>
      </main>

      <Script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"></Script>
      <Script src="js/slide.js" ></Script>
    </>
  );
}
