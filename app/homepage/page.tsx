/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-sync-scripts */
import Script from 'next/script';

export default function Page() {
  return (
    <>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css" />
      <header className="myHeader">
        <div className="headerInner group">
          <a className="block">
            <picture>
              <source media="(max-width: 1200px)" srcSet="img/logo-mobile.png" />
              <img src="img/logo.png" alt="" width={228} height={40} className="logo" />
            </picture>
          </a>
          <section className="navTop">
            {/* chỗ này menu humberg */}
            <div className="menuHumber">
              <a href="#" className="menuArea">
                <span className="menuHumberLine" />
                <span className="menuHumberLine" />
                <span className="menuHumberLine" />
              </a>
            </div>
            {/* chỗ này navtop */}
            <nav className="navLinkArea">
              <a className="navLink" href="#">
                Tin tức sự kiện
              </a>
              <span className="navSpe">|</span>
              <a className="navLink" href="#">
                Về chúng tôi
              </a>
              <span className="navSpe">|</span>
              <a className="navLink" href="#">
                Sản phẩm
              </a>
              <span className="navSpe">|</span>
              <a className="navLink" href="#">
                Đối tác
              </a>
              <span className="navSpe">|</span>
              <a className="navLink" href="#">
                Liện hệ
              </a>
            </nav>
          </section>
          {/* chỗ này là home page facebook */}
          <div className="mIconTop">
            <a href="" title="Homepage">
              <img src="img/icon-home.png" alt="Homepage" />
            </a>
            <a href="" title="My Facebook">
              <img src="img/icon-fb.png" alt="Facebook" />
            </a>
          </div>
          {/* hộp thoại search */}
          <div className="searchArea">
            <div className="searchBox">
              <input type="text" className="searchInput" placeholder="Tìm kiếm" />
              <a href="#">
                <img src="img/icon-search.png" alt="" className="searchIcon" />
              </a>
            </div>
          </div>
        </div>
      </header>
      <section className="slideMain">
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
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
              </div>
            </div>
          </div>
        </section>

        {/* body part2  */}

        <section className="bgType2 areaBox">
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
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
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

      <footer className="footer">
        <div className="footerBox">
          <a className="footerLogo" href="#" title="Trang chu">
            <img src="img/logoFooter.png" width="310" height="200" alt="" />
          </a>
          <div className="boxContact">
            <div className="contactItem fntPRegular">
              <img src="img/bt-phone.png" width="57px" height="57px" alt="" /> (+84) 1900 1234 5678
            </div>
            <div className="contactItem fntPRegular">
              <img src="img/bt-phone.png" width="57px" height="57px" alt="" /> hotro@skinrosemary.vn
            </div>
            <div className="contactItem fntPRegular">
              <img src="img/bt-hotline.png" width="57px" height="57px" alt="" /> https://hotro.skinrosemary.vn
            </div>
            <div className="contactItem fntPRegular">
              <img src="img/bt-localtion.png" width="57px" height="57px" alt="" /> Số 169 Phố Thái Hà, Láng Hạ, Đống Đa, Hà Nội
            </div>
          </div>
        </div>
      </footer>

      <Script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"></Script>
      <Script src="js/slide.js"></Script>
    </>
  );
}
