import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>fbBasic</title>
        <meta
          name="description"
          content="A basic Facebook app created with nextjs"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>hello World</p>
      </main>
    </div>
  );
};

export default Home;
