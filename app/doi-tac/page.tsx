/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-sync-scripts */
import Script from 'next/script';
import { MainSlideCp } from '../../components/mainslide';
import { PaginationCp } from '@/components/pagination';
import { FeedBackCp } from '@/components/feedback';

const dataFeedback = [
  {
    img: 'img/dr-seoul-skin.webp',
    name: 'Dr Seoul Skin',
    text: 'Tôi hoàn toàn tin tưởng vào Dr Seoul Skin và đặc biệt là sản phẩm Skin Rosemary. Làn da của tôi trở nên căng bóng và mịn màng chỉ sau một lần sử dụng. Tôi rất hài lòng với sự kết hợp độc đáo giữa Dr Seoul Skin và Skin Rosemary.',
  },
  {
    img: 'img/EXO-COBIO.webp',
    name: 'Exo-Cobio',
    text: 'Exo-Cobio là một đối tác tin cậy của tôi khi nói đến các sản phẩm chăm sóc da. Sự kết hợp giữa Exo-Cobio và các thành phần tự nhiên đã mang đến cho làn da của tôi một sự tươi trẻ và sáng khỏe. Tôi rất hài lòng với kết quả mà Exo-Cobio đã mang lại cho làn da của tôi.',
  },
  {
    img: 'img/GORGEOUS-GOURI.webp',
    name: 'Gouri',
    text: '"Gouri và Skin Rosemary là những đối tác chăm sóc da đáng tin cậy với các sản phẩm được chế tạo từ thành phần tự nhiên. Kết hợp giữa công nghệ và thiên nhiên, những sản phẩm của hai thương hiệu đã mang lại cho tôi một làn da tươi trẻ, mịn màng và khỏe mạnh.',
  },
  {
    img: 'img/n-beauty.webp',
    name: 'N-Beauty',
    text: 'Tôi đã sử dụng sản phẩm của Skin Rosemary trong 1 tháng và rất hài lòng về kết quả. Da mặt mình đã được cải thiện rõ rệt, mịn màng và đều màu hơn. Cảm ơn Skin Rosemary nhiều!',
  },
  {
    img: 'img/dr-seoul-skin.webp',
    name: 'Dr Seoul Skin',
    text: 'Tôi hoàn toàn tin tưởng vào Dr Seoul Skin và đặc biệt là sản phẩm Skin Rosemary. Làn da của tôi trở nên căng bóng và mịn màng chỉ sau một lần sử dụng. Tôi rất hài lòng với sự kết hợp độc đáo giữa Dr Seoul Skin và Skin Rosemary.',
  },
  {
    img: 'img/EXO-COBIO.webp',
    name: 'Exo-Cobio',
    text: 'Exo-Cobio là một đối tác tin cậy của tôi khi nói đến các sản phẩm chăm sóc da. Sự kết hợp giữa Exo-Cobio và các thành phần tự nhiên đã mang đến cho làn da của tôi một sự tươi trẻ và sáng khỏe. Tôi rất hài lòng với kết quả mà Exo-Cobio đã mang lại cho làn da của tôi.',
  },
];


export default function Page() {
  return (
    <>
      <MainSlideCp />
      <main>
        <section className="customerPage">
          <div className="customerPageBox">
            <h1 className="titlePage">Đối tác</h1>
            <section className="feedbackBox">
              {dataFeedback.map((item) => (
                <FeedBackCp name={item.name} img={item.img} text={item.text} />
              ))}
            </section>

          </div>
        </section>
      </main>
    </>
  );
}
