import HeadContents from "../src/components/HeadContents";
import styles from "../styles/Home.module.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { NextPageWithLayout } from "./_app";
import Head from "next/head";
import Button from "../src/components/button/Button";
import Layout from "../src/components/Layout";
import { ReactElement, useEffect } from "react";

const Home: NextPageWithLayout = (props) => {
  const { data, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (data?.user) {
      router.push('/dashboard')
    }
  }, [])

  const handleClick = async () => {
    if (!data?.user) {
      router.push("/login");
    }
    return;
  };

  if (status === "loading") {
    return (
      <div className={styles.container__login}>
        <Head>
          <HeadContents />
        </Head>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className={styles.container__login}>
      <Head>
        <HeadContents />
      </Head>
      <Button className="login__btn" width={'10rem'} onClick={handleClick}>login</Button>
    </div>
  );
};

Home.getLayout = function getLayout(Home: ReactElement) {
  return <Layout>{Home}</Layout>;
};

export default Home;
