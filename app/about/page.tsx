/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-sync-scripts */
import Script from 'next/script';
import { MainSlideCp } from '../components/mainslide';


export default function Page() {
  return (
    <>
      <MainSlideCp />      
      <main>
        {/* part special */}
        <section className="areaBox bgType1">
          <div className='areaIntro'>
            <div className='introItem'>
              <div className='introBorder'>
                <h3 className='fntPBold'><a href="404.html">Về chúng tôi</a></h3>
                <div className="productBorder"><span></span><img src="img/iconRo1.png" alt="" width="20" height="20" /><span></span></div>
                <a className='introImg' href="404.html"><img src="img/imagePart2_2.jpg" width="245" height="245" alt="" /></a>
                <div className='introTitle fntPLight'>Giới thiệu công ty</div>
                <div className='introContent fntPLight'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
              </div>
            </div>

            <div className='introItem'>
              <div className='introBorder'>
                <h3 className='fntPBold'><a href="404.html">Sản phẩm</a></h3>
                <div className="productBorder"><span></span><img src="img/iconRo1.png" alt="" width="20" height="20" /><span></span></div>
                <a className='introImg' href="404.html"><img src="img/imagePart2_2.jpg" width="245" height="245" alt="" /></a>
                <div className='introTitle fntPLight'>Sản phẩm</div>
                <div className='introContent fntPLight'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
              </div>
            </div>

            <div className='introItem'>
              <div className='introBorder'>
                <h3 className='fntPBold'><a href="404.html">Đối tác</a></h3>
                <div className="productBorder"><span></span><img src="img/iconRo1.png" alt="" width="20" height="20" /><span></span></div>
                <a className='introImg' href="404.html"><img src="img/imagePart2_2.jpg" width="245" height="245" alt="" /></a>
                <div className='introTitle fntPLight'>Đối tác</div>
                <div className='introContent fntPLight'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
              </div>
            </div>

            <div className='introItem'>
              <div className='introBorder'>
                <h3 className='fntPBold'><a href="404.html">Hình ảnh - Video</a></h3>
                <div className="productBorder"><span></span><img src="img/iconRo1.png" alt="" width="20" height="20" /><span></span></div>
                <a className='introImg' href="404.html"><img src="img/imagePart2_2.jpg" width="245" height="245" alt="" /></a>
                <div className='introTitle fntPLight'>Giới thiệu công ty</div>
                <div className='introContent fntPLight'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
              </div>
            </div>
          </div>
        </section>

        {/* body part 1  */}
        <section className="areaBox bgType2">
          <div className="area1Inner">
            <div className="area1">
              <header className="area1Header">
                <span className="area1Icon"></span>
                <h2 className="area1Head fntPBold">Tin tức - sự kiện</h2>
              </header>
              <div className="area1Content fntPRegular">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
                  ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                </p>
                <br></br>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
                  ultrices gravida.
                </p>
                <div className="specialText fntFCong">Skin Rosemary</div>
              </div>
            </div>
            <div className="sliderNew">
              <div className="sliderNewInner">
                <div className="swiper mySwiper2">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <img src="img/imgCenter1.jpg" alt="" width="560" height="420" />
                    </div>
                    <div className="swiper-slide">
                      <img src="img/imgCenter2.jpg" alt="" width="560" height="420" />
                    </div>
                  </div>
                </div>
                <div className="swiper-button-next swpBtnnext2"></div>
                <div className="swiper-button-prev swpBtnprev2"></div>
              </div>
            </div>
          </div>
        </section>

        {/* body part2  */}

        <section className="bgType1 areaBox">
          <div className="aboutUsImg">
            <div className="aboutUsImg_content">
              <div className="sliderNewInner">
                <div className="swiper mySwiper2">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <img src="img/imgCenter1.jpg" alt="" width="560" height="420" />
                    </div>
                    <div className="swiper-slide">
                      <img src="img/imgCenter2.jpg" alt="" width="560" height="420" />
                    </div>
                  </div>
                </div>
                <div className="swiper-button-next swpBtnnext3"></div>
                <div className="swiper-button-prev swpBtnprev3"></div>
              </div>
            </div>
            <div className="area2Head">
              <header className="area2HeadContent">
                <h2 className="area2Text fntPBold">Xu hướng làm đẹp</h2>
                <span className="area2Icon"></span>
              </header>
              <div className="area2Content">
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
      </main>
      <Script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"></Script>
      <Script src="js/slide.js"></Script>
    </>
  );
}
