/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-sync-scripts */
import Script from 'next/script';
import { MainSlideCp } from '../components/mainslide';

export default function Page() {
  return (
    <>
      <MainSlideCp />
      <main>
        <section className="aboutDetail">
          <div className="aboutDetailMain">
            <div className="aboutDetailMainTitle"></div>
          </div>
        </section>
      </main>
      <Script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"></Script>
      <Script src="js/slide.js"></Script>
    </>
  );
}
