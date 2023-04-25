export function FooterCp() {
  return (
    <footer className="footer">
      <div className="footerBox">
        <a className="footerLogo" href="404.html" title="Trang chu">
          <img src="img/logoFooter.png" width="310" height="200" alt="" />
        </a>
        <div className="boxContact">
          <a href="tel:190012345678" className="contactItem fntPRegular">
            <img src="img/bt-phone.png" width="57px" height="57px" alt="" /> (+84) 1900 1234 5678
          </a>
          <a href="mailto:hotro@skinrosemary.vn" className="contactItem fntPRegular">
            <img src="img/bt-email.png" width="57px" height="57px" alt="" /> hotro@skinrosemary.vn
          </a>
          <a href="/" className="contactItem fntPRegular">
            <img src="img/bt-hotline.png" width="57px" height="57px" alt="" /> https://hotro.skinrosemary.vn
          </a>
          <a
            href="https://www.google.com/maps/place/169+P.+Th%C3%A1i+H%C3%A0,+L%C3%A1ng+H%E1%BA%A1,+%C4%90%E1%BB%91ng+%C4%90a,+H%C3%A0+N%E1%BB%99i/data=!4m2!3m1!1s0x3135ab6345dd3b7d:0xea735b77d5ff06a5?sa=X&ved=2ahUKEwiRps2XnMT-AhX0-jgGHdt5Dd8Q8gF6BAgYEAI"
            className="contactItem fntPRegular">
            <img src="img/bt-localtion.png" width="57px" height="57px" alt="" /> Số 169 Phố Thái Hà, Láng Hạ, Đống Đa, Hà Nội
          </a>
        </div>
      </div>
    </footer>
  );
}
