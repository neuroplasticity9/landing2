/* eslint-disable @next/next/no-img-element */
export function MainSlideCp() {
  return (
    <section className="slideMain">
      {/* Slider main container */}
      <div className="swiper mySwiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <img src="img/slideshow1.webp" alt="" width="1920" height="590" />
          </div>
          <div className="swiper-slide">
            <img src="img/slideshow2.webp" alt="" width="1920" height="590" />
          </div>
          <div className="swiper-slide">
            <img src="img/slideshow3.webp" alt="" width="1920" height="590" />
          </div>
        </div>
        <div className="swiper-pagination" />
      </div>
    </section>
  );
}
