/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-sync-scripts */
import Script from 'next/script';
import { MainSlideCp } from '../../components/mainslide';
import { NewItemCp } from '@/components/news/newitem';
import { PaginationCp } from '@/components/pagination';

const data = [
  {
    title: 'Skin Rosemary ra mắt sản phẩm mới dành cho da nhạy cảm',
    img: 'https://imagevietnam.vn/template/maihan/images/175166107_121661773287612_7675254962396838501_n.jpg',
    content:
      'Skin Rosemary vừa giới thiệu một sản phẩm mới cho da nhạy cảm với thành phần tự nhiên và không gây kích ứng. Sản phẩm này đã được kiểm chứng bởi các chuyên gia da liễu, giúp làm dịu và cải thiện tình trạng da. Khách hàng có thể yên tâm sử dụng sản phẩm này với hi vọng sẽ giúp da của họ trở nên khỏe mạnh hơn.'
  },
  {
    title: 'Skin Rosemary giảm giá 30% cho mỹ phẩm chăm sóc da',
    img: 'https://imagevietnam.vn/template/maihan/images/175166107_121661773287612_7675254962396838501_n.jpg',
    content:
      'Skin Rosemary đang có chương trình giảm giá 30% cho tất cả các sản phẩm chăm sóc da trong dịp cuối năm. Khách hàng có thể mua sắm các sản phẩm chất lượng cao của Skin Rosemary với mức giá ưu đãi và tiết kiệm chi phí.'
  },
  {
    title: 'Skin Rosemary đạt chứng nhận Vegan của tổ chức PETA',
    img: 'https://imagevietnam.vn/template/maihan/images/175166107_121661773287612_7675254962396838501_n.jpg',
    content:
      'Skin Rosemary vừa đạt được chứng nhận Vegan từ tổ chức PETA (People for the Ethical Treatment of Animals) nhờ sử dụng các thành phần hoàn toàn từ thiên nhiên và không sử dụng bất kỳ sản phẩm động vật nào trong quá trình sản xuất.'
  },
  {
    title: 'Skin Rosemary mở cửa hàng mới tại Quận 1',
    img: 'https://imagevietnam.vn/template/maihan/images/175166107_121661773287612_7675254962396838501_n.jpg',
    content:
      'Skin Rosemary vừa mở cửa hàng mới tại Quận 1, TP.HCM. Khách hàng có thể đến thăm cửa hàng mới của Skin Rosemary để trải nghiệm và mua sắm các sản phẩm chất lượng cao của thương hiệu.'
  },
  {
    title: 'Skin Rosemary ra mắt sản phẩm mới dành cho da nhạy cảm',
    img: 'https://imagevietnam.vn/template/maihan/images/175166107_121661773287612_7675254962396838501_n.jpg',
    content:
      'Skin Rosemary vừa giới thiệu một sản phẩm mới cho da nhạy cảm với thành phần tự nhiên và không gây kích ứng. Sản phẩm này đã được kiểm chứng bởi các chuyên gia da liễu, giúp làm dịu và cải thiện tình trạng da. Khách hàng có thể yên tâm sử dụng sản phẩm này với hi vọng sẽ giúp da của họ trở nên khỏe mạnh hơn.'
  }
];

export default function Page() {
  return (
    <>
      <MainSlideCp />
      <main>
        <section className="newsPage">
          <div className="newsPageBox">
            <h1 className="titlePage">TIN TỨC SỰ KIỆN</h1>
            <section className="newList">
              {data.map((item) => (
                <NewItemCp title={item.title} img={item.img} content={item.content} link={'/tin-tuc-chi-tiet.html'} />
              ))}
            </section>

            <PaginationCp />
          </div>
        </section>
      </main>
    </>
  );
}
