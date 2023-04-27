/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-sync-scripts */
import Script from 'next/script';
import { MainSlideCp } from '../../components/mainslide';
import { ProductItemCp } from '@/components/product/productitem';

const dataProduct = [
  {
    id: 1,
    name: '1680516787',
    image: '/img/sp1.webp',
  },
  {
    id: 2,
    name: 'CELLOFILL III COLLAGEN',
    image: '/img/sp2.webp',
  },
  {
    id: 3,
    name: 'Tinh chất tế bào gốc cao cấp EXO CELL ACTIVE',
    image: '/img/train1.webp',
  },
  {
    id: 4,
    name: 'Tinh chất nâng cơ trẻ hoá fILLO UP',
    image: '/img/sp4.webp',
  },
  {
    id: 5,
    name: 'EXOTOKINE DERMA BOOSTER AMPOUNE',
    image: '/img/sp5.webp',
  },
  {
    id: 6,
    name: 'kem ủ tê SM Lido',
    image: '/img/sp6.webp',
  },
  {
    id: 7,
    name: 'Crystal Care Solution For Skin ',
    image: '/img/sp7.webp',
  },
  {
    id: 8,
    name: 'TINH CHẤT TẾ BÀO CUỐNG RỐN SCM',
    image: '/img/sp8.webp',
  },
  {
    id: 9,
    name: 'LAPUROON',
    image: '/img/sp9.webp',
  },
  {
    id: 10,
    name: 'CHỐNG NÃO HOÁ, KÉO DÀI TUỔI THANH XUÂN - AAPE',
    image: '/img/sp9.webp',
  },
];
export default function Page() {
  return (
    <>
      <MainSlideCp />
      <main className="productPage">
        <section className="productBox">
          <div className="productList">
              {dataProduct.map((item) => (
                <ProductItemCp key={item.id} name={item.name} image={item.image} />
              ))}
          </div>
        </section>
      </main>
    </>
  );
}
