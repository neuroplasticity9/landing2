/* eslint-disable @next/next/no-img-element */
export function FooterCp() {
  return (
    <footer className="footer">
      <div className="footerBox">
        <a className="footerLogo group" href="404.html" title="Trang chu">
          <img src="img/logoFooter.png" width="310" height="200" alt="" />
        </a>
        <div className="boxContact">
          <a href="tel:0379658586" className="contactItem fntPRegular group">
            <img src="img/phone-57x57.png" width="57px" height="57px" alt="" /> (+84) 379.658.586
          </a>
          <a href="https://www.facebook.com/skinrosemery.vietnam" className="contactItem fntPRegular group">
            <img src="img/fb-57x57.png" width="57px" height="57px" alt="" /> Skin Rosemary Aesthetics
          </a>
          <a href="/" className="contactItem fntPRegular group">
            <img src="img/insta-57x57.png" width="57px" height="57px" alt="" /> Skin.Rosemaryvn
          </a>
          <a href="/" className="contactItem fntPRegular group">
            <img src="img/website-57x57.png" width="57px" height="57px" alt="" /> Skinrosemary.vn
          </a>
          <a href="/" className="contactItem fntPRegular group">
            <img src="img/tik-tok-57x57.png" width="57px" height="57px" alt="" />  Skin.rosemary
          </a>

        </div>
      </div>
    </footer>
  );
}
