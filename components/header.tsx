/* eslint-disable @next/next/no-img-element */
export function HeaderCp() {
  return (
    <header className="myHeader">
      <div className="headerInner group">
        <a className="block" href="/">
          <picture>
            <source media="(max-width: 1200px)" srcSet="img/logo-mobile.png" />
            <img src="img/logo.png" alt="" width={228} height={40} className="logo" />
          </picture>
        </a>
        <section className="navTop">
          {/* chỗ này menu humberg */}
          <div className="menuHumber">
            <div className="menuArea">
              <span className="menuHumberLine" />
              <span className="menuHumberLine" />
              <span className="menuHumberLine" />
            </div>
          </div>
          {/* chỗ này navtop */}
          <nav className="navLinkArea">
            <a className="navLink" href="/trang-chu.html">
              Trang chủ
            </a>
            <span className="navSpe">|</span>
            <a className="navLink" href="/about.html">
              Về chúng tôi
            </a>
            <span className="navSpe">|</span>
            <a className="navLink" href="san-pham.html">
              Sản phẩm
            </a>
            <span className="navSpe">|</span>
            <a className="navLink" href="doi-tac.html">
              Đối tác
            </a>
            <span className="navSpe">|</span>
            <span id="navContact" className="navLink">
              Liện hệ
            </span>
            <span className="navSpe">|</span>
            <a className="navLink" href="dao-tao.html">
              Đào tạo
            </a>
          </nav>
        </section>
        {/* chỗ này là home page facebook */}
        <div className="mIconTop">
          <a href="/" title="Homepage">
            <img src="img/icon-home.png" alt="Homepage"  />
          </a>
          <a href="https://www.facebook.com/skinrosemery.vietnam" title="My Facebook">
            <img src="img/icon-fb.png" alt="Facebook" />
          </a>
        </div>
        {/* hộp thoại search */}
        <div className="searchArea">
          <div className="searchBox">
            <input type="text" className="searchInput" placeholder="Tìm kiếm" />
            <a href="404.html">
              <img src="img/icon-search.png" alt="" className="searchIcon" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
