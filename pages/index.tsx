import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/pages/Home.module.scss";

import Products from "mock/product.json";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <section className={styles.sc_banner}>
        <div className={styles.img__wrapper}>
          <img src="./img/slide1.jpg" alt="" />
        </div>
      </section>

      <section className={styles.sc_products}>
        <div className="container">
          <h2>Products</h2>

          <div className={styles.product_wrapper}>
            {Products.data.map((item: any, index: any) => (
              <Link href={`/${index}`} key={index}>
                <div className={styles.flex_item}>
                  <div className="card">
                    <div className="img-wrapper">
                      <img src={item.img} alt="" />
                    </div>
                    <div className="content">
                      <h4>{item.name}</h4>
                      <p>{item.price}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
