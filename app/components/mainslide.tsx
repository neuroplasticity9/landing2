export function MainSlideCp() {
  return (
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
  );
}
