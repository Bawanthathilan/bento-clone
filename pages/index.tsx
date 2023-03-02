import { FC, Fragment } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.scss";
import { siteData } from "./components/data/index";

const Home: FC = () => {
  return (
    <Fragment>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <title>{siteData.siteTitle}</title>
      </Head>

      <div className={styles.main_section}>
        <div className={styles.container}>
          <div className={styles.main}>
            <div className={styles.left}>
              <div className={styles.leftContent}>
                <div className={styles.profilePicture}>
                  <Image
                    src={`${siteData.profilePic}`}
                    width={200}
                    height={200}
                    alt="Profile Picture"
                  />
                </div>
                <div className={styles.content}>
                  <h1>{siteData.yourName}</h1>
                  <h2>{siteData.yourDescription}</h2>
                </div>
              </div>
            </div>
            <div className={styles.right}>Right</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
