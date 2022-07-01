import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "styles/pages/CustomerCare.module.scss";

import Products from "mock/product.json";
import Link from "next/link";

const CustomerCare: NextPage = () => {
  return (
    <>
      <section className={styles.sc_customercare}>
        <div className="container">
          <h2>HƯỚNG DẪN MUA HÀNG</h2>
          <h3>Chọn lựa hàng hóa</h3>
          <p>
            - CHỌN KÍCH CỠ, MÀU SẮC, SỐ LƯỢNG SẢN PHẨM RỒI CLICK VÀO NÚT “MUA HÀNG NGAY” ĐỂ ĐƯA SẢN PHẨM VÀO GIỎ HÀNG
            CỦA MÌNH. - ĐỂ LỰA CHỌN THÊM SẢN PHẨM KHÁC, VUI LÒNG CLICK VÀO NÚT “TIẾP TỤC MUA HÀNG”. NẾU KHÔNG, QUÝ KHÁCH
            VUI LÒNG CLICK VÀO NÚT “GỬI ĐƠN HÀNG” ĐỂ TIẾP TỤC QUY TRÌNH MUA HÀNG VÀ THANH TOÁN.
          </p>
          <h3>HÌNH THỨC MUA HÀNG QUA ĐIỆN THOẠI:</h3>
          <p>
            - CHỌN KÍCH CỠ, MÀU SẮC, SỐ LƯỢNG SẢN PHẨM RỒI GỌI HOẶC GỬI TIN NHẮN CHO CHÚNG TÔI VÀO SỐ HOTLINE:
            0986820388 ĐỂ ĐẶT HÀNG, NHÂN VIÊN CỦA CHÚNG TÔI SẼ LIÊN HỆ LẠI ĐỂ XÁC NHẬN THÔNG TIN SẢN PHẨM CỦA QUÝ KHÁCH.
            VÀ HƯỚNG DẪN QUÝ KHÁCH CHUYỂN KHOẢN THANH TOÁN. LƯU Ý: NẾU CHỌN HÌNH THỨC MUA HÀNG QUA ĐIỆN THOẠI, QUÝ KHÁCH
            VUI LÒNG BỎ QUA BƯỚC GỬI ĐƠN HÀNG.
          </p>
          <h3>THANH TOÁN ĐƠN HÀNG</h3>
          <p>
            CHÚNG TÔI SỬ DỤNG 2 HÌNH THỨC THANH TOÁN ĐÓ LÀ COD ( TRẢ TIỀN VÀ NHẬN HÀNG ) VÀ CHUYỂN KHOẢN QUA NGÂN HÀNG.
            VUI LÒNG LIÊN HỆ HOTLINE 0966 099 666 NẾU QUÝ KHÁCH THẮC MẮC THÊM.
          </p>
          <p>
            VỚI CHƯƠNG TRÌNH SALE 50% HONGVIC KHÔNG ÁP DỤNG HÌNH THỨC THANH TOÁN COD GIÁ TRỊ ĐƠN HÀNG HOẶC MỘT PHẦN GIÁ
            TRỊ ĐƠN HÀNG NHƯ CÁC CHƯƠNG TRÌNH SALE DƯỚI 50%, HONGVIC TIẾN HÀNH NHẬN ĐƠN GIAO TẬN NƠI VỚI ĐIỀU KIỆN KHÁCH
            HÀNG CHUYỂN KHOẢN TRƯỚC 100% GIÁ TRỊ HÀNG VÀ QUÝ KHÁCH THANH TOÁN PHÍ SHIP CHO BÊN VẬN CHUYỂN KHI NHẬN HÀNG,
            TUỲ KHU VỰC DO BÊN VẬN CHUYỂN QUY ĐỊNH THEO GIÁ NIÊM YẾT.
          </p>
        </div>
      </section>
    </>
  );
};

export default CustomerCare;
