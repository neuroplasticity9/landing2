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
        <div className="xl:h-[3.698vw] xl:w-[72.917vw] justify-center xl:justify-between flex items-center h-[14.974vw] group">
          <a className="block">
            <picture>
              <source media="(max-width: 1200px)" srcSet="img/logo-mobile.png" />
              <img src="img/logo.png" alt="" width={228} height={40} className="xl:w-[11.875vw] xl:h-[2.083vw] w-[32.552vw] h-auto" />
            </picture>
          </a>
          <section className="xl:h-auto xl:w-[45.313vw] xl:static h-[14.974vw] absolute left-0 top-0 z-50 group-[.activeMn]:h-[156.251vw] group-[.activeMn]:w-full group-[.activeMn]:bg-white">
            {/* chỗ này menu humberg */}
            <div className="xl:hidden h-[14.974vw] flex items-center">
              <a className="space-y-[1.693vw] block p-[2.604vw]">
                <span className="block w-[10.8vw] h-[1.432vw] bg-gray-600 rounded-full" />
                <span className="block w-[10.8vw] h-[1.432vw] bg-gray-600 rounded-full" />
                <span className="block w-[10.8vw] h-[1.432vw] bg-gray-600 rounded-full" />
              </a>
            </div>
            {/* chỗ này navtop */}
            <nav className="hidden xl:flex items-center justify-between fontATM text-[17px] text-[#686868] flex-wrap xl:flex-nowrap xl:ml-0 group-[.activeMn]:flex">
              <a
                className="xl:h-[100%] xl:border-none flex uppercase text-[#686868] w-full xl:w-auto h-[6.836vw] items-center border-t-[1px] pl-[3.906vw] xl:pl-[0px]"
                href="#">
                Tin tức sự kiện
              </a>
              <span className="hidden xl:inline">|</span>
              <a
                className="xl:h-[100%] xl:border-none flex uppercase text-[#686868] w-full xl:w-auto h-[6.836vw] items-center border-t-[1px] pl-[3.906vw] xl:pl-[0px]"
                href="#">
                Về chúng tôi
              </a>
              <span className="hidden xl:inline">|</span>
              <a
                className="xl:h-[100%] xl:border-none flex uppercase text-[#686868] w-full xl:w-auto h-[6.836vw] items-center border-t-[1px] pl-[3.906vw] xl:pl-[0px]"
                href="#">
                Sản phẩm
              </a>
              <span className="hidden xl:inline">|</span>
              <a
                className="xl:h-[100%] xl:border-none flex uppercase text-[#686868] w-full xl:w-auto h-[6.836vw] items-center border-t-[1px] pl-[3.906vw] xl:pl-[0px]"
                href="#">
                Đối tác
              </a>
              <span className="hidden xl:inline">|</span>
              <a
                className="xl:h-[100%] xl:border-none flex uppercase text-[#686868] w-full xl:w-auto h-[6.836vw] items-center border-t-[1px] pl-[3.906vw] xl:pl-[0px]"
                href="#">
                Liện hệ
              </a>
            </nav>
          </section>
          {/* chỗ này là home page facebook */}
          <div className="xl:hidden absolute right-0 top-0 flex h-[14.974vw] items-center w-[21.354vw] justify-between mr-[2.604vw]">
            <a href="" title="Homepage">
              <img src="img/icon-home.png" alt="Homepage" className="w-[9.505vw] h-[9.505vw]" />
            </a>
            <a href="" title="My Facebook">
              <img src="img/icon-fb.png" alt="Facebook" className="w-[9.505vw] h-[9.505vw]" />
            </a>
          </div>
          {/* hộp thoại search */}
          <div className="xl:flex hidden">
            <div className="border-[1px] border-[#b03a48] h-[1.563vw] w-[7.813vw] rounded-lg flex items-center">
              <input type="text" className="w-full h-full border-none outline-none rounded-lg pl-[8px]" placeholder="Tìm kiếm" />
              <a href="#">
                <img src="img/icon-search.png" alt="" className="w-[0.99vw] h-[0.99vw] block ml-[8px] mr-[18px]" />
              </a>
            </div>
          </div>
        </div>
      </header>
      <section className="xl:h-[30.729vw] h-[31.25vw] bg-slate-300">
        {/* Slider main container */}
        <div className="swiper mySwiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img src="img/side1.jpg" alt="" width="1920" height="590" />
            </div>
            <div className="swiper-slide">
              <img src="img/side2.jpg" alt="" width="1920" height="590" />
            </div>
          </div>
          <div className="swiper-pagination" />
        </div>
      </section>

      <main>
        {/* body part 1  */}
        <section className="bgType1 relative flex justify-center w-full">
          <div className="xl:w-[72.917vw]  xl:h-[37.5vw] xl:py-[7.292vw] py-[3.907vw] flex justify-between flex-wrap xl:flex-row flex-col-reverse overflow-hidden">
            <div className="xl:w-[calc(100%-39.583vw)] justify-center xl:justify-start">
              <header className="flex justify-center xl:justify-start">
                <span className="xl:h-[2.448vw] xl:w-[1.302vw] xl:mr-[0.625vw] h-[47px] w-[25px] bg-[#b03a48] xl:block hidden"></span>
                <h2 className="xl:h-[2.448vw] xl:px-[1.563vw] xl:text-[1.563vw] text-[2.056vw] px-[2.344vw] h-[3.255vw] flex items-center content-center flex-wrap bg-[#b03a48]  text-[#fff] uppercase fntPBold">
                  Tin tức - sự kiện
                </h2>
              </header>
              <div className="xl:pt-[2.083vw] xl:w-auto xl:pr-[30px] pt-[3.906vw] w-[70%]  mx-auto fntPRegular xl:text-[1.042vw] text-[1.563vw]">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
                  ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                </p>
                <br></br>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
                  ultrices gravida.
                </p>
                <div className="xl:flex hidden fntFCong text-[3.646vw] py-[1.042vw]">Skin Rosemary</div>
              </div>
            </div>
            <div className="xl:w-[39.583vw] flex justify-center mb-[25.999px] xl:mb-[0px]">
              <div className="xl:w-[29.167vw] xl:h-[21.875vw] w-[61.197vw] h-[45.573vw] mySwiperContainer relative">
                <div className="swiper mySwiper2 border-[#c44b57] border-[0.488vw]">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <img src="img/imgCenter1.jpg" alt="" width="560" height="420" />
                    </div>
                    <div className="swiper-slide">
                      <img src="img/imgCenter2.jpg" alt="" width="560" height="420" />
                    </div>
                  </div>
                </div>
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
              </div>
            </div>
          </div>
        </section>

        {/* body part2  */}

        <section className="bgType2 relative flex justify-center w-full">
          <div className="xl:w-[72.917vw] xl:h-[40.469vw] xl:py-[6.354vw] py-[3.906vw] flex justify-center flex-wrap overflow-hidden">
            <div className="xl:w-[36.458vw] xl:justify-start flex justify-center mb-[26px] xl:mb-0 xl:relative">
              <img src="img/imagePart2_1.jpg" className='xl:w-[31.771vw] xl:h-[23.438vw] w-[61.458vw] h-auto border-[#b33c4a] border-[0.26vw] bg-white p-[1.042vw]' alt="" />
              <img src="img/imagePart2_2.jpg" className='xl:w-[13.698vw] xl:h-[13.698vw] absolute xl:top-[14.063vw] xl:left-[22.135vw] border-[#fff] border-[5px] z-10 hidden xl:block' alt="" />
            </div>
            <div className="xl:w-[calc(100%-36.458vw)] xl:justify-end xl:pt-[70px] justify-center">
              <header className="flex justify-center xl:justify-end">
                <h2 className="xl:h-[2.448vw] xl:px-[1.563vw] xl:text-[1.563vw] text-[2.056vw] px-[2.344vw] h-[3.255vw] flex items-center content-center flex-wrap bg-[#b03a48]  text-[#fff] uppercase fntPBold">
                  Về chúng tôi
                </h2>
                <span className="xl:h-[2.448vw] xl:w-[1.302vw] xl:ml-[0.625vw] h-[47px] w-[25px] bg-[#b03a48] xl:block hidden"></span>
              </header>
              <div className="xl:pt-[2.083vw] xl:mr-[1.85vw] xl:w-auto xl:text-right xl:pl-[90px] pt-[3.906vw] w-[70%]  mx-auto fntPRegular xl:text-[1.042vw] text-[1.563vw]">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
                  ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                </p>
                <br></br>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
                  ultrices gravida.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* body part3  */}

        <section className="bgType1 relative flex justify-center w-full">
          <div className="xl:w-[72.917vw] xl:h-[37.5vw] xl:py-[7.5vw] py-[3.906vw] flex justify-center flex-wrap overflow-hidden">
            <div className="xl:pt-[70px] justify-center">
              <header className="block">
                <h2 className="xl:h-[2.448vw] xl:px-[1.563vw] xl:text-[1.563vw] xl:mb-[1.667vw] mb-[16px] text-[2.056vw] px-[2.344vw] h-[3.255vw] flex items-center content-center flex-wrap bg-[#b03a48]  text-[#fff] uppercase fntPBold">
                  Sản phẩm của chúng tôi
                </h2>
                <div className='fntPRegular xl:text-[1.042vw] text-[1.563vw]'>Dưới đây là một số sản phẩm bán chạy nhất của chúng tôi.</div>
              </header>
              <div className="xl:pt-[2.083vw] xl:mr-[1.85vw] xl:w-auto xl:text-right xl:pl-[90px] pt-[3.906vw] w-[70%]  mx-auto fntPRegular xl:text-[1.042vw] text-[1.563vw]">
                
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
