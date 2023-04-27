/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-sync-scripts */
import Script from 'next/script';
import { MainSlideCp } from '../../../components/mainslide';
import { NewItemCp } from '@/components/news/newitem';
import { PaginationCp } from '@/components/pagination';

export default function Page() {
  return (
    <>
      <MainSlideCp />
      <main>
        <section className="newsPage">
          <div className="newsPageBox">
            <h1 className="titlePage">Skin Rosemary giảm giá 30% cho mỹ phẩm chăm sóc da</h1>
            <section className="newContentDetail">
                <p>
                  Skin Rosemary là thương hiệu mỹ phẩm chăm sóc da uy tín, nổi tiếng với các sản phẩm được chiết xuất từ thảo mộc tự nhiên và không chứa hóa chất độc hại.
                  Vào dịp này, Skin Rosemary đang có chương trình giảm giá 30% cho toàn bộ sản phẩm của mình. Đây là cơ hội tuyệt vời để bạn có thể sở hữu những sản phẩm
                  chăm sóc da chất lượng cao với giá ưu đãi.
                </p>
                <p>
                  Một trong những sản phẩm được yêu thích của Skin Rosemary là kem dưỡng da. Kem dưỡng da của Skin Rosemary được chiết xuất từ tinh dầu Rosemary, chiết
                  xuất từ lá cây Aloe Vera và nhiều thành phần khác giúp dưỡng ẩm và cải thiện tình trạng da khô ráp, đồng thời giảm các nếp nhăn trên da. Sản phẩm này
                  cũng có tác dụng làm giảm sự xuất hiện của mụn trứng cá, giúp da trở nên sáng và khỏe mạnh hơn.
                </p>
                <p>
                  Ngoài ra, Skin Rosemary còn có các sản phẩm khác như tinh chất dưỡng da, serum, nước hoa hồng, sữa rửa mặt, và các sản phẩm chăm sóc da khác. Tất cả các
                  sản phẩm đều được chiết xuất từ các thành phần tự nhiên và không chứa hóa chất độc hại, phù hợp cho mọi loại da.
                </p>
                <p>
                  Không chỉ được đánh giá cao bởi người tiêu dùng, Skin Rosemary còn được các chuyên gia làm đẹp khuyên dùng. Vì vậy, nếu bạn đang tìm kiếm các sản phẩm
                  chăm sóc da chất lượng cao, không nên bỏ lỡ cơ hội này để sở hữu những sản phẩm Skin Rosemary với giá ưu đãi.
                </p>
                <p>
                  Nếu bạn muốn biết thêm thông tin về các sản phẩm và chương trình giảm giá của Skin Rosemary, hãy truy cập vào trang web của thương hiệu hoặc liên hệ
                  trực tiếp với nhà cung cấp để được tư vấn và hỗ trợ tốt nhất.
                </p>
              </div>
            </section>
          </div>
        </section>
      </main>
    </>
  );
}
