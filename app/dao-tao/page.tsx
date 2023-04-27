/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-sync-scripts */
import Script from 'next/script';
import { MainSlideCp } from '../../components/mainslide';
import { NewItemCp } from '@/components/news/newitem';
import { PaginationCp } from '@/components/pagination';

const dataTrain = [
  {
    id: 1,
    title: 'Khóa đào tạo chăm sóc da miễn phí của Skin Rosemary',
    content:
      'Công ty Skin Rosemary vừa công bố mở khóa đào tạo chăm sóc da miễn phí cho khách hàng. Khóa đào tạo sẽ giúp bạn hiểu rõ hơn về loại da của mình, cách chăm sóc da đúng cách và lựa chọn sản phẩm phù hợp. Đăng ký ngay để trở thành chuyên gia chăm sóc da của chính mình!',
    img: 'https://picsum.photos/570/315?random=1',
  },
  {
    id: 2,
    title: 'Skin Rosemary tổ chức hội thảo về chăm sóc da',
    content:
      'Vào ngày 20/5 tới, Skin Rosemary sẽ tổ chức hội thảo về chăm sóc da với chủ đề "Làn da đẹp mỗi ngày". Hội thảo sẽ có sự góp mặt của các chuyên gia về da liễu và chuyên viên chăm sóc da của công ty Skin Rosemary. Đây là cơ hội để bạn học hỏi và chia sẻ kinh nghiệm chăm sóc da cùng những người đam mê làm đẹp như bạn!',
      img: 'https://picsum.photos/570/315?random=2',
  },
  {
    id: 3,
    title: 'Skin Rosemary giới thiệu khóa học trang điểm miễn phí',
    content:
      'Khóa học trang điểm miễn phí của Skin Rosemary sẽ giúp bạn nắm vững những kiến thức cơ bản về trang điểm và lựa chọn sản phẩm phù hợp với mình. Khóa học sẽ được dẫn dắt bởi những chuyên gia trang điểm hàng đầu của công ty. Đăng ký ngay để trở thành chuyên gia trang điểm của chính mình!',
      img: 'https://picsum.photos/570/315?random=3',
  },
  {
    id: 4,
    title: 'Tìm hiểu về các loại da và cách chăm sóc',
    content: 'Để có một làn da khỏe mạnh, đầu tiên bạn cần hiểu rõ về loại da của mình và phương pháp chăm sóc phù hợp. Các loại da thông thường bao gồm da dầu, da khô, da hỗn hợp và da nhạy cảm. Hãy đọc bài viết này để biết thêm thông tin chi tiết về các loại da và cách chăm sóc phù hợp.',
    img: 'https://picsum.photos/570/315?random=4',
  },
  {
    id: 5,
    title: 'Skin Rosemary tổ chức khóa đào tạo chuyên sâu về skincare',
    content: 'Nhằm nâng cao kỹ năng và kiến thức chăm sóc da cho các chuyên viên tại Skin Rosemary, công ty đã tổ chức khóa đào tạo chuyên sâu về skincare với sự tham gia của các chuyên gia trong ngành. Khóa đào tạo đã giúp nhân viên nâng cao kỹ năng và hiểu biết về các sản phẩm mới nhất cũng như các phương pháp chăm sóc da hiệu quả.',
    img: 'https://picsum.photos/570/315?random=5',
  }
];

export default function Page() {
  return (
    <>
      <MainSlideCp />
      <main>
        <section className="newsPage">
          <div className="newsPageBox">
            <h1 className="titlePage">Đào Tạo</h1>
            <section className="newList">
              {dataTrain.map((item) => (
                <NewItemCp title={item.title} img={item.img} content={item.content} />
              ))}
            </section>

            <PaginationCp />
          </div>
        </section>
      </main>
    </>
  );
}
