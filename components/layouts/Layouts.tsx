import React, { useState } from "react";
import Link from "next/link";

import styles from "./Layout.module.scss";

const Layouts = ({ children }: any) => {
  const [active, setActive] = useState(false);

  const handleBurger = () => {
    setActive(!active);
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <div className={styles.header}>
            <div className="logo">
              <img src="./img/logo.png" alt="" />
            </div>
            <nav>
              <Link href={"/"}>
                <a href="">Trang chủ</a>
              </Link>
              {/* <Link href={"/products"}>
                <a href="">Sản phẩm</a>
              </Link> */}
              <Link href={"/about"}>
                <a href="">Giới thiệu</a>
              </Link>
              <Link href={"/customer_care"}>
                <a href="">Chăm sóc khách hàng</a>
              </Link>
            </nav>
            <div className={styles.right}>
              <div className={styles.cart}>
                <img src="./img/icons/cart.png" alt="" />
              </div>
              <div className={styles.hamburger} onClick={handleBurger}>
                <span></span>
              </div>
            </div>
          </div>
        </div>
        <div className={`mobileNav ${active ? "active" : ""}`}>
          <nav>
            <Link href={"/"}>
              <a href="">Trang chủ</a>
            </Link>
            {/* <Link href={"/products"}>
                <a href="">Sản phẩm</a>
              </Link> */}
            <Link href={"/about"}>
              <a href="">Giới thiệu</a>
            </Link>
            <Link href={"/customer_care"}>
              <a href="">Chăm sóc khách hàng</a>
            </Link>
          </nav>
        </div>
      </header>
      <main className={styles.main}>{children}</main>
      <footer>
        <div className="container">
          <div className="wrapper">
            <h3>Hồng Vic</h3>
            <p>
              ĐỊA CHỈ: 144 QUANG TRUNG, HÀ ĐÔNG, HÀ NỘI <br /> CS1: 354 THÁI HÀ, ĐỐNG ĐA, HÀ NỘI. <br /> CS2: 144 QUANG
              TRUNG, HÀ ĐÔNG. <br /> CƠ SỞ 3 : SỐ 04 XUÂN THỦY
            </p>
          </div>
          <div className="wrapper">
            <span>power by Q</span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Layouts;
