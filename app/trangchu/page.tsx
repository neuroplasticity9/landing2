/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-sync-scripts */
import Script from 'next/script';
import { MainSlideCp } from '../components/mainslide';
import { TrainBoxCp } from '../components/trainbox';

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
                <h2 className="area1Head fntPBold">
                  <a href="#">Tin tức - sự kiện</a>
                </h2>
              </header>
              <div className="area1Content fntPRegular">
                <div className="area1ContentMain">
                  Sáng ngày 16/04/2023 vừa qua, tại viện thẩm mỹ Dr.Seoul Skin Hà Nội đã diễn ra lễ ký kết chuyển giao công nghệ giữa Skin Rosemary và Dr.Seoul Skin. Theo
                  bà Phùng Tú Linh – Giám đốc điều hành Skin Rosemary, Skin Rosemary và Dr. Seoul Skin Việt Nam hợp tác sẽ tập trung vào 2 trọng tâm chính: Skin Rosemary
                  Việt Nam phối hợp cùng Dr. Seoul Skin trong việc tổ chức các chương trình đào tạo, cập nhật và nâng cao kiến thức cũng như kỹ năng về tiêm Meso B.A.P.
                  Đội ngũ nhân viên được được đào tạo thêm kiến thức bệnh học, kỹ thuật tiêm, tìm hiểu triệu chứng, dấu hiệu và cách xử lý các tình huống phát sinh. Hai
                  bên sẽ cùng phối hợp triển khai các chương trình truyền thông nhằm đẩy mạnh thương hiệu và ký kết hợp tác chiến lược lâu dài trong thời gian sắp tới. Bà
                  Phùng Tú Linh, cho biết Skin Rosemary tin tưởng chất lượng đội ngũ giàu chuyên môn, cũng như cơ sở vật chất đảm bảo và có kinh nghiệm lâu năm trong lĩnh
                  vực thẩm mỹ. Hy vọng 2 bên sẽ đạt được nhiều thành tựu hơn nữa trên hành trình chăm sóc và tôn vinh vẻ đẹp của người Việt. Lễ ký kết chuyển giao công
                  nghệ mới được nhận định sẽ tạo “Trending” trong năm 2023 trong ngành thẩm mỹ đã diễn ra trong niềm vui và sự phấn khởi của hai bên, với cùng tâm niệm:
                  “Giúp bạn đẹp hơn”, đây sẽ là bước đánh dấu sự khởi đầu hợp tác tốt đẹp giữa Skin Rosemary - Dr.Seoul Skin.
                </div>
                <div className="btnReadMore">
                  <a href="#">Xem thêm</a>
                </div>
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

        <section className="bgType2 areaBox">
          <div className="aboutUsZone">
            <div className="aboutUsImg_content">
              <picture>
                <source media="(max-width: 1280px)" srcSet="img/imagePart2_1.jpg" />
                <img src="img/ve-chung-toi.webp" alt="" width={698} height={543} className="aboutUsImg_img1" />
              </picture>
            </div>
            <div className="area2Head">
              <header className="area2HeadContent">
                <h2 className="area2Text fntPBold">
                  <a href="/about.html">Về chúng tôi</a>
                </h2>
                <span className="area2Icon"></span>
              </header>
              <div className="area2Content">
                Skin Rosemary là thương hiệu thuộc Công ty Thương Mại Dịch Vụ và Phát Triển Minh Vũ chuyên cung cấp các sản phẩm làm đẹp có thương hiệu trên toàn thế giới
                với tiêu chuẩn quốc tế và có giá thành phù hợp với người tiêu dùng tại Việt nam.
              </div>
            </div>
          </div>
        </section>

        {/* body part3  */}

        <section className="bgType1 areaBox">
          <div className="area3Zone">
            <div className="area3Box">
              <header className="area3Head">
                <h2 className="area3Title fntPBold">
                  <a href="#" title="Sản phẩm của chúng tôi">
                    Sản phẩm của chúng tôi
                  </a>
                </h2>
                <div className="fntPRegular area3Text">Dưới đây là một số sản phẩm bán chạy nhất của chúng tôi.</div>
              </header>
              <div className="listProducts">
                <a className="productItem fntPBold group" href="#">
                  <img src="img/thuoc1.jpg" alt="" width="178" height="178" />
                  <h3>CELLOFILL III COLLAGEN</h3>
                  <div className="productBorder">
                    <span></span>
                    <img src="img/iconRo1.png" alt="" width="20" height="20" />
                    <span></span>
                  </div>
                </a>
                <a className="productItem fntPBold group" href="#">
                  <img src="img/thuoc2.jpg" alt="" width="178" height="178" />
                  <h3>LAPUROON</h3>
                  <div className="productBorder">
                    <span></span>
                    <img src="img/iconRo1.png" alt="" width="20" height="20" />
                    <span></span>
                  </div>
                </a>
                <a className="productItem fntPBold group" href="#">
                  <img src="img/thuoc3.jpg" alt="" width="178" height="178" />
                  <h3>TINH CHẤT TẾ BÀO CUỐNG RỐN SCM</h3>
                  <div className="productBorder">
                    <span></span>
                    <img src="img/iconRo1.png" alt="" width="20" height="20" />
                    <span></span>
                  </div>
                </a>
                <a className="productItem fntPBold group" href="#">
                  <img src="img/thuoc4.jpg" alt="" width="178" height="178" />
                  <h3>TINH CHẤT NÂNG CƠ CHỐNG CHẢY XỆ CELLOFILL- CELLO UP</h3>
                  <div className="productBorder">
                    <span></span>
                    <img src="img/iconRo1.png" alt="" width="20" height="20" />
                    <span></span>
                  </div>
                </a>
                <a className="productItem fntPBold group" href="#">
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
              <h2 className="area3Title fntPBold">
                <a href="#">Đối tác chiến lược</a>
              </h2>
            </header>
            <div className="area4Box">
              <div className="customerItem">
                <img src="img/dr-seoul-skin.webp" className="customerImg" alt="" width="152" height="152" />
                <div className="customerName fntPBold">
                  <span className="customerNameText">Dr Seoul Skin</span>
                  <img src="img/iconRo1.png" alt="" width="20" height="20" />
                  <span className="hideBg"></span>
                  <span className="hideBg"></span>
                </div>
              </div>
              <div className="customerItem">
                <img src="img/EXO-COBIO.webp" className="customerImg" alt="" width="152" height="152" />
                <div className="customerName fntPBold">
                  <span className="customerNameText">Exo-Cobio</span>
                  <img src="img/iconRo1.png" alt="" width="20" height="20" />
                  <span className="hideBg"></span>
                  <span className="hideBg"></span>
                </div>
              </div>
              <div className="customerItem">
                <img src="img/GORGEOUS-GOURI.webp" className="customerImg" alt="" width="152" height="152" />
                <div className="customerName fntPBold">
                  <span className="customerNameText">Gouri</span>
                  <img src="img/iconRo1.png" alt="" width="20" height="20" />
                  <span className="hideBg"></span>
                  <span className="hideBg"></span>
                </div>
              </div>
              <div className="customerItem">
                <img src="img/n-beauty.webp" className="customerImg" alt="" width="152" height="152" />
                <div className="customerName fntPBold">
                  <span className="customerNameText">N-Beauty</span>
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
                <img className="feedbackImg" src="img/feedback-1.webp" width="84" height="84" alt="" />
                <div className="feedBackCustomer fntPBold">NGUYỄN KHÁNH LINH</div>
                <div className="productBorder">
                  <span></span>
                  <img src="img/iconRo1.png" alt="" width="20" height="20" />
                  <span></span>
                </div>
                <div className="feedbackText">
                  Mình cảm thấy rất tin tưởng Skin Rosemary, cảm giác làn da căng bóng, mịn màng hẳn chỉ sau 1 lần trải nghiệm. Thực sự rất tuyệt vời.
                </div>
              </div>
              <div className="feedbackItem">
                <img className="feedbackImg" src="img/feedback-2.webp" width="84" height="84" alt="" />
                <div className="feedBackCustomer fntPBold">TRẦN LAN PHƯƠNG</div>
                <div className="productBorder">
                  <span></span>
                  <img src="img/iconRo1.png" alt="" width="20" height="20" />
                  <span></span>
                </div>
                <div className="feedbackText">
                  Đây là lần đầu tiên tôi sử dụng 1 sản phẩm mà có nhiều tác dụng và đặc biệt không gây đau đớn gì cả. Cảm ơn đội ngũ kĩ thuật của Skin Rosemary đã tư vấn
                  và nhiệt tình chăm sóc mình nhé.
                </div>
              </div>
              <div className="feedbackItem">
                <img className="feedbackImg" src="img/feedback-3.webp" width="84" height="84" alt="" />
                <div className="feedBackCustomer fntPBold">LÊ THỊ LOAN</div>
                <div className="productBorder">
                  <span></span>
                  <img src="img/iconRo1.png" alt="" width="20" height="20" />
                  <span></span>
                </div>
                <div className="feedbackText">
                  Sản phẩm của Skin Rosemary đã đáp đứng các tiêu chí mà tôi đưa ra: Căng da, nâng cơ, tác dụng ngay sau khi sử dụng, không gây đau đớn và giá cả rất phù
                  hợp. Tôi sẽ vẫn ủng hộ Skin Rosemary lâu dài.
                </div>
              </div>
            </div>
          </div>
        </section>
        <TrainBoxCp />
        
      </main>
    </>
  );
}
