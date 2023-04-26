/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-sync-scripts */
import Script from 'next/script';
import { MainSlideCp } from './components/mainslide';
import { TrainBoxCp } from './components/trainbox';

export default function Page() {
  return (
    <>
      <MainSlideCp />
      <main>
        {/* part special */}
        <section className="areaBox bgType1">
          <div className="areaIntro">
            <div className="introItem group" >
              <div className="introBorder">
                <h3 className="fntPBold">
                  <a href="404.html">Về chúng tôi</a>
                </h3>
                <div className="productBorder">
                  <span></span>
                  <img src="img/iconRo1.png" alt="" width="20" height="20" />
                  <span></span>
                </div>
                <a className="introImg" href="404.html">
                  <img src="img/gt-ve-chung-toi.webp" width="245" height="245" alt="" />
                </a>
                <div className="introContent fntPLight">
                  Skin Rosemary là thương hiệu thuộc Công ty Thương Mại Dịch Vụ và Phát Triển Minh Vũ chuyên cung cấp các sản phẩm làm đẹp có thương hiệu trên toàn thế
                  giới với tiêu chuẩn quốc tế và có giá thành phù hợp với người tiêu dùng tại Việt nam.
                </div>
              </div>
            </div>

            <div className="introItem group" >
              <div className="introBorder">
                <h3 className="fntPBold">
                  <a href="404.html">Sản phẩm</a>
                </h3>
                <div className="productBorder">
                  <span></span>
                  <img src="img/iconRo1.png" alt="" width="20" height="20" />
                  <span></span>
                </div>
                <a className="introImg" href="404.html">
                  <img src="img/gt-san-pham.webp" width="245" height="245" alt="" />
                </a>
                <div className="introContent fntPLight">
                  Ultra super collagen HA là một sản phẩm có xuất sứ từ Hàn Quốc, được phân phối độc quyền tại Việt Nam bởi Skin Rosemary. Sản phẩm có tác dụng kết hợp 3
                  in 1 bao gồm B.A.P - Canula - Mesotherapy hứa hẹn sẽ tạo trending mới trong thị trường thẩm mỹ vào giai đoạn tới đây.
                </div>
              </div>
            </div>

            <div className="introItem group" >
              <div className="introBorder">
                <h3 className="fntPBold">
                  <a href="404.html">Đối tác</a>
                </h3>
                <div className="productBorder">
                  <span></span>
                  <img src="img/iconRo1.png" alt="" width="20" height="20" />
                  <span></span>
                </div>
                <a className="introImg" href="404.html">
                  <img src="img/gt-doi-tac.webp" width="245" height="245" alt="" />
                </a>
                <div className="introContent fntPLight">
                  Skin Rosemary được đánh giá là một Công ty năng động, có nhiều tiềm năng và sở hữu đội chuyên gia giỏi về chuyên môn. Đó cũng chính là lý do mà các thẩm
                  mỹ, bệnh viện y khoa lựa chọn làm đối tác cùng Skin Rosemary
                </div>
              </div>
            </div>

            <div className="introItem group" >
              <div className="introBorder">
                <h3 className="fntPBold">
                  <a href="404.html">Hình ảnh - Video</a>
                </h3>
                <div className="productBorder">
                  <span></span>
                  <img src="img/iconRo1.png" alt="" width="20" height="20" />
                  <span></span>
                </div>
                <a className="introImg" href="404.html">
                  <img src="img/gt-hinh-anh.webp" width="245" height="245" alt="" />
                </a>
                <div className="introContent fntPLight">Các hoạt động ký kết, chuyển giao của công ty được diễn ra thường xuyên tại các viện thẩm mỹ lớn.</div>
              </div>
            </div>

            <div className="introItem group" >
              <div className="introBorder">
                <h3 className="fntPBold">
                  <a href="404.html">Đào tạo</a>
                </h3>
                <div className="productBorder">
                  <span></span>
                  <img src="img/iconRo1.png" alt="" width="20" height="20" />
                  <span></span>
                </div>
                <a className="introImg" href="404.html">
                  <img src="img/gt-dao-tao.webp" width="245" height="245" alt="" />
                </a>
                <div className="introContent fntPLight">Skin Rosemary được đánh giá là một Công ty năng động, có nhiều tiềm năng và sở hữu đội chuyên gia giỏi về chuyên môn. Đó cũng chính là lý do mà các thẩm mỹ, bệnh viện y khoa lựa chọn làm đối tác cùng Skin Rosemary</div>
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
                <h2 className="area1Head fntPBold"><a href='#'>Tin tức - sự kiện</a></h2>
              </header>
              <div className="area1Content fntPRegular">
                <div className='area1ContentMain'>Sáng ngày 16/04/2023 vừa qua, tại viện thẩm mỹ Dr.Seoul Skin Hà Nội đã diễn ra lễ ký kết chuyển giao công nghệ giữa Skin Rosemary và Dr.Seoul Skin. Theo
                bà Phùng Tú Linh – Giám đốc điều hành Skin Rosemary, Skin Rosemary và Dr. Seoul Skin Việt Nam hợp tác sẽ tập trung vào 2 trọng tâm chính: Skin Rosemary
                Việt Nam phối hợp cùng Dr. Seoul Skin trong việc tổ chức các chương trình đào tạo, cập nhật và nâng cao kiến thức cũng như kỹ năng về tiêm Meso B.A.P. Đội
                ngũ nhân viên được được đào tạo thêm kiến thức bệnh học, kỹ thuật tiêm, tìm hiểu triệu chứng, dấu hiệu và cách xử lý các tình huống phát sinh. Hai bên sẽ
                cùng phối hợp triển khai các chương trình truyền thông nhằm đẩy mạnh thương hiệu và ký kết hợp tác chiến lược lâu dài trong thời gian sắp tới. Bà Phùng Tú
                Linh, cho biết Skin Rosemary tin tưởng chất lượng đội ngũ giàu chuyên môn, cũng như cơ sở vật chất đảm bảo và có kinh nghiệm lâu năm trong lĩnh vực thẩm
                mỹ. Hy vọng 2 bên sẽ đạt được nhiều thành tựu hơn nữa trên hành trình chăm sóc và tôn vinh vẻ đẹp của người Việt. Lễ ký kết chuyển giao công nghệ mới được
                nhận định sẽ tạo “Trending” trong năm 2023 trong ngành thẩm mỹ đã diễn ra trong niềm vui và sự phấn khởi của hai bên, với cùng tâm niệm: “Giúp bạn đẹp
                hơn”, đây sẽ là bước đánh dấu sự khởi đầu hợp tác tốt đẹp giữa Skin Rosemary - Dr.Seoul Skin.
                </div>
                <div className='btnReadMore'><a href='#'>Xem thêm</a></div>
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
          <div className="aboutUsZone">
            <div className="aboutUsImg_content">
              <div className="sliderNewInner">
                <div className="swiper mySwiper3">
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
                <h2 className="area2Text fntPBold"><a href='#'>Xu hướng làm đẹp</a></h2>
                <span className="area2Icon"></span>
              </header>
              <div className="area2Content animate__animated animate__backInRight">
              Sau thời gian dài trải qua thời kì Covid đã làm gián đoạn chất lượng cuộc sống và nhu cầu làm đẹp của con người. Vẻ đẹp rạng ngời và thần thái nhất luôn toát lên từ bên trong bởi sự tự tin, khoẻ mạnh và lối sống tích cực. Vậy đâu là những xu hướng làm đẹp trong thời kì “bình thường mới” năm 2023, hãy cùng Skin Rosemary khám phá các bạn nhé.
              </div>
              <div className="specialText fntFCong">Skin Rosemary</div>
            </div>
          </div>
        </section>
        {/* body part3  */}
        <TrainBoxCp />
      </main>
    </>
  );
}
