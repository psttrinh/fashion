import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "styles/pages/Product.module.scss";

import { PRODUCLIST } from "constants/productlist";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Product: NextPage = () => {
  const router = useRouter();
  const id: any = router.query.id;
  const arr = PRODUCLIST;
  const product = arr[id];

  return (
    <>
      <section className={styles.sc_product}>
        <div className="container">
          <div className={styles.wrapper}>
            <div className={styles.img_wrapper}>
              <img src={product?.img} alt="" />
            </div>
            <div className={styles.content}>
              <h3>
                Tên sản phẩm: <span>{product?.name}</span>
              </h3>
              <h3>
                Giá tiền: <span></span>
              </h3>
              <p>
                Bình chọn: <span>{product?.rating}</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.sc_prodescription}>
        <div className="container">
          <h2>Mô tả sản phẩm</h2>
          <p>{product?.description}</p>
        </div>
      </section>
    </>
  );
};

export default Product;
