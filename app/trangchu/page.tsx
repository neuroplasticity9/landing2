/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-sync-scripts */
import Script from 'next/script';
import { MainSlideCp } from '../components/mainslide';

export default function Home() {
  return (
    <>
      <MainSlideCp />  

      <main className="w-full overflow-hidden">
        {/* body part 1  */}
        <section className="areaBox bgType1">
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
                <div className="swiper-button-next swpBtnnext"></div>
                <div className="swiper-button-prev swpBtnnext"></div>
              </div>
            </div>
          </div>
        </section>

        {/* body part2  */}

        <section className="bgType2 areaBox">
          <div className="aboutUsImg">
            <div className="aboutUsImg_content">
              <picture>
                <source media="(max-width: 1280px)" srcSet="img/imagePart2_1.jpg" />
                <img src="img/ImgAboutUs.webp" alt="" width={228} height={40} className='aboutUsImg_img1'  />
              </picture>
            </div>
            <div className="area2Head">
              <header className="area2HeadContent">
                <h2 className="area2Text fntPBold">Về chúng tôi</h2>
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

        <section className="bgType1 areaBox">
          <div className="area3Zone">
            <div className="area3Box">
              <header className="area3Head">
                <h2 className="area3Title fntPBold">Sản phẩm của chúng tôi</h2>
                <div className="fntPRegular area3Text">Dưới đây là một số sản phẩm bán chạy nhất của chúng tôi.</div>
              </header>
              <div className="listProducts">
                <a className="productItem fntPBold">
                  <img src="img/thuoc1.jpg" alt="" width="178" height="178" />
                  <h3>CELLOFILL III COLLAGEN</h3>
                  <div className="productBorder">
                    <span></span>
                    <img src="img/iconRo1.png" alt="" width="20" height="20" />
                    <span></span>
                  </div>
                </a>
                <a className="productItem fntPBold">
                  <img src="img/thuoc2.jpg" alt="" width="178" height="178" />
                  <h3>LAPUROON</h3>
                  <div className="productBorder">
                    <span></span>
                    <img src="img/iconRo1.png" alt="" width="20" height="20" />
                    <span></span>
                  </div>
                </a>
                <a className="productItem fntPBold">
                  <img src="img/thuoc3.jpg" alt="" width="178" height="178" />
                  <h3>TINH CHẤT TẾ BÀO CUỐNG RỐN SCM</h3>
                  <div className="productBorder">
                    <span></span>
                    <img src="img/iconRo1.png" alt="" width="20" height="20" />
                    <span></span>
                  </div>
                </a>
                <a className="productItem fntPBold">
                  <img src="img/thuoc4.jpg" alt="" width="178" height="178" />
                  <h3>TINH CHẤT NÂNG CƠ CHỐNG CHẢY XỆ CELLOFILL- CELLO UP</h3>
                  <div className="productBorder">
                    <span></span>
                    <img src="img/iconRo1.png" alt="" width="20" height="20" />
                    <span></span>
                  </div>
                </a>
                <a className="productItem fntPBold">
                  <img src="img/thuoc5.jpg" alt="" width="178" height="178" />
                  <h3>TINH CHẤT TẾ BÀO GỐC EXOTOKINE DERMA BOOSTER AMPOUNE</h3>
                  <div className="productBorder">
                    <span></span>
                    <img src="img/iconRo1.png" alt="" width="20" height="20" />
                    <span></span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* body part4  */}
        <section className="bgType2 areaBox">
          <div className="area4Zone">
            <header className="area3Head">
              <h2 className="area3Title fntPBold">Đối tác chiến lược</h2>
            </header>
            <div className="area4Box">
              <div className="customerItem">
                <img src="img/thuoc1.jpg" className="customerImg" alt="" width="152" height="152" />
                <div className="customerName fntPBold">
                  <span className="customerNameText">Tên đối tác 1</span>
                  <img src="img/iconRo1.png" alt="" width="20" height="20" />
                  <span className="hideBg"></span>
                  <span className="hideBg"></span>
                </div>
              </div>
              <div className="customerItem">
                <img src="img/thuoc1.jpg" className="customerImg" alt="" width="152" height="152" />
                <div className="customerName fntPBold">
                  <span className="customerNameText">Tên đối tác 2</span>
                  <img src="img/iconRo1.png" alt="" width="20" height="20" />
                  <span className="hideBg"></span>
                  <span className="hideBg"></span>
                </div>
              </div>
              <div className="customerItem">
                <img src="img/thuoc1.jpg" className="customerImg" alt="" width="152" height="152" />
                <div className="customerName fntPBold">
                  <span className="customerNameText">Tên đối tác khá là dài</span>
                  <img src="img/iconRo1.png" alt="" width="20" height="20" />
                  <span className="hideBg"></span>
                  <span className="hideBg"></span>
                </div>
              </div>
              <div className="customerItem">
                <img src="img/thuoc1.jpg" className="customerImg" alt="" width="152" height="152" />
                <div className="customerName fntPBold">
                  <span className="customerNameText">Tên đối tác 4</span>
                  <img src="img/iconRo1.png" alt="" width="20" height="20" />
                  <span className="hideBg"></span>
                  <span className="hideBg"></span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* body part4  */}
        <section className="bgType1 areaBox">
          <div className="area5Zone">
            <header className="area3Head">
              <h2 className="area3Title fntPBold">Phản hồi khách hàng</h2>
            </header>
            <div className="feedbackBox">
              <div className="feedbackItem">
                <img className="feedbackImg" src="img/imagePart2_2.jpg" width="84" height="84" alt="" />
                <div className="feedBackCustomer fntPBold">NGUYỄN KHÁNH LINH</div>
                <div className="productBorder">
                  <span></span>
                  <img src="img/iconRo1.png" alt="" width="20" height="20" />
                  <span></span>
                </div>
                <div className="feedbackText">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
                  ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.{' '}
                </div>
              </div>
              <div className="feedbackItem">
                <img className="feedbackImg" src="img/imagePart2_2.jpg" width="84" height="84" alt="" />
                <div className="feedBackCustomer fntPBold">TRẦN LAN PHƯƠNG</div>
                <div className="productBorder">
                  <span></span>
                  <img src="img/iconRo1.png" alt="" width="20" height="20" />
                  <span></span>
                </div>
                <div className="feedbackText">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
                  ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.{' '}
                </div>
              </div>
              <div className="feedbackItem">
                <img className="feedbackImg" src="img/imagePart2_2.jpg" width="84" height="84" alt="" />
                <div className="feedBackCustomer fntPBold">LÊ THỊ LOAN</div>
                <div className="productBorder">
                  <span></span>
                  <img src="img/iconRo1.png" alt="" width="20" height="20" />
                  <span></span>
                </div>
                <div className="feedbackText">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
                  ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.{' '}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bgType2 areaBox">
          <div className="aboutUsImg trainImg">
            <div className="aboutUsImg_content">
              <img src="img/imagePart2_1.jpg" className="aboutUsImg_img1" alt="" />
            </div>
            <div className="area2Head">
              <a href="#" className="area2HeadContent">
                <h2 className="area2Text fntPBold">Đào tạo</h2>
                <span className="area2Icon"></span>
              </a>
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
      </main>
      <Script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"></Script>
      <Script src="js/slide.js"></Script>
    </>
  );
}
