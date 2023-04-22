/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-sync-scripts */
import Image from 'next/image';
import { Inter } from 'next/font/google';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css" />
      <header className="w-full bg-white xl:justify-center xl:flex">
        <div className="xl:h-[3.698vw] xl:w-[72.917vw] justify-center xl:justify-start flex items-center h-[13.672vw] group">
          <a className="xl:mr-[4.583vw] block">
            <picture>
              <source media="(max-width: 1024px)" srcSet="img/logo-mobile.png" width={300} height={65} />
              <img src="img/logo.png" alt="" width={228} height={40} />
            </picture>
          </a>
          <section className="xl:h-auto xl:w-[45.313vw] bg-white xl:static absolute left-0 top-0 z-50 group-[.activeMn]:h-[117.188vw] group-[.activeMn]:w-full">
            <a className="space-y-2 xl:hidden block w-[9.863vw] my-[3.516vw] ml-[3.906vw]">
              <span className="block w-[9.863vw] h-[1.172vw] bg-gray-600 rounded-full" />
              <span className="block w-[9.863vw] h-[1.172vw] bg-gray-600 rounded-full" />
              <span className="block w-[9.863vw] h-[1.172vw] bg-gray-600 rounded-full" />
            </a>
            <nav className="hidden xl:flex items-center justify-between fontATM text-[17px] text-[#686868] flex-wrap xl:flex-nowrap xl:ml-0 group-[.activeMn]:flex">
              <a className="xl:h-[100%] xl:border-none flex uppercase text-[#686868] w-full xl:w-auto h-[6.836vw] items-center border-t-[1px] pl-[3.906vw] xl:pl-[0px]" href="#">
                Tin tức sự kiện
              </a> 
              <span className="hidden xl:inline">|</span>
              <a className="xl:h-[100%] xl:border-none flex uppercase text-[#686868] w-full xl:w-auto h-[6.836vw] items-center border-t-[1px] pl-[3.906vw] xl:pl-[0px]" href="#">
                Về chúng tôi
              </a>
              <span className="hidden xl:inline">|</span>
              <a className="xl:h-[100%] xl:border-none flex uppercase text-[#686868] w-full xl:w-auto h-[6.836vw] items-center border-t-[1px] pl-[3.906vw] xl:pl-[0px]" href="#">
                Sản phẩm
              </a>
              <span className="hidden xl:inline">|</span>
              <a className="xl:h-[100%] xl:border-none flex uppercase text-[#686868] w-full xl:w-auto h-[6.836vw] items-center border-t-[1px] pl-[3.906vw] xl:pl-[0px]" href="#">
                Đối tác
              </a>
              <span className="hidden xl:inline">|</span>
              <a className="xl:h-[100%] xl:border-none flex uppercase text-[#686868] w-full xl:w-auto h-[6.836vw] items-center border-t-[1px] pl-[3.906vw] xl:pl-[0px]" href="#">
                Liện hệ
              </a>
            </nav>
          </section>
        </div>
      </header>
      <section className="xl:h-[30.729vw] h-[31.25vw] bg-slate-300">
        {/* Slider main container */}
        <div className="swiper mySwiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <Image src={'img/side1.jpg'} alt="" width={1920} height={590} />
            </div>
            <div className="swiper-slide">
              <Image src={'img/side2.jpg'} alt="" width={1920} height={590} />
            </div>
          </div>
          <div className="swiper-pagination" />
        </div>
      </section>

      <main>
        <section className="bgType1 relative flex justify-center w-full">
          <div className="xl:w-[72.917vw] xl:py-[7.292vw] py-[2.93vw] flex justify-between flex-wrap xl:flex-row flex-col-reverse">
            <div className="xl:w-[calc(100%-39.583vw)] justify-center xl:justify-start">
              <header className="flex justify-center xl:justify-start">
                <span className="h-[4.59vw] w-[2.441vw] bg-[#b03a48] xl:block hidden mr-[1.172vw] "></span>
                <h2 className="h-[4.59vw] flex items-center bg-[#b03a48] px-[2.93vw] text-[#fff] uppercase">Tin tức - sự kiện</h2>
              </header>
              <div className="pt-[3.906vw] w-[70%] xl:w-auto mx-auto">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
                  ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                </p><br></br>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
                  ultrices gravida.
                </p>
              </div>
            </div>
            <div className="xl:w-[39.583vw] flex justify-center mb-[2.539vw] xl:mb-[0px]">
              <div className="w-[29.167vw] h-[21.875vw] mySwiperContainer relative">
                <div className="swiper mySwiper2 border-[#c44b57] border-[0.488vw]">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <Image src={'img/imgCenter1.jpg'} alt="" width={560} height={420} />
                    </div>
                    <div className="swiper-slide">
                      <Image src={'img/imgCenter2.jpg'} alt="" width={560} height={420} />
                    </div>
                  </div>
                </div>
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"></Script>
      <Script src="js/slide.js"></Script>
    </>
  );
}
