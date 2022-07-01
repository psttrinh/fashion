import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "styles/pages/About.module.scss";

import Products from "mock/product.json";
import Link from "next/link";

const About: NextPage = () => {
  return (
    <>
      <section className={styles.sc_about}>
        <div className="container">
          <h2>Giới thiệu</h2>
          <p>
            HONGVIC LÀ THƯƠNG HIỆU THỜI TRANG THIẾT KẾ VỚI THẾ MẠNH SỬ DỤNG NGHỆ THUẬT THÊU ĐÍNH THỦ CÔNG TINH TẾ TỪ BÀN
            TAY CỦA NHỮNG NGHỆ NHÂN LÀNH NGHỀ.
          </p>
          <p>
            TÂM NIỆM RẰNG, MỖI SẢN PHẨM KHÔNG CHỈ LÀ VÁY ÁO, MÀ CÒN PHẢI LÀ SỰ CHIỀU CHUỘNG CỦA HONGVIC CHO NHỮNG ĐẶC
            QUYỀN RIÊNG CỦA PHỤ NỮ VỀ GIẤC MƠ ĐƯỢC XINH ĐẸP VÀ TỎA SÁNG. HONGVIC LUÔN KHÔNG NGỪNG SÁNG TẠO TRONG VIỆC
            TÌM KIẾM NHỮNG XU HƯỚNG THỜI TRANG MỚI ĐỂ TẠO RA NHỮNG SẢN PHẨM PHÙ HỢP VỚI NHU CẦU CỦA KHÁCH HÀNG. HONGVIC
            ĐƯỢC RA ĐỜI TỪ SỰ ĐAM MÊ KINH DOANH THỜI TRANG VÀ YÊU VẺ ĐẸP TINH TẾ. VƯỢT QUA NHIỀU THỬ THÁCH, HONGVIC ĐÃ
            TRỞ THÀNH THƯƠNG HIỆU CÓ UY TÍN ĐƯỢC NHIỀU KHÁCH HÀNG KHÓ TÍNH TRÊN TOÀN QUỐC ĐÁNH GIÁ CAO VÀ LỰA CHỌN SẢN
            PHẨM.
          </p>
          <p>
            DOANH NGHIỆP HONGVIC ĐANG TỪNG NGÀY PHÁT TRIỂN HƠN NỮA. CHÚNG TÔI SỞ HỮU NHÀ XƯỞNG VÀ KHO CHUYÊN NGHIỆP. VỚI
            ĐỘI NGŨ LÊN ĐẾN 200 CÔNG NHÂN CHUYÊN NGHIỆP, KỸ THUẬT TUYỆT VỜI CHO RA ĐỜI NHỮNG SẢN PHẨM ĐẸP NHẤT .
          </p>
          <div className={styles.img_item}>
            <div className={styles.img_wrapper}>
              <img src="./img/product/product1.jpg" alt="" />
            </div>
            <div className={styles.img_wrapper}>
              <img src="./img/product/product5.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
