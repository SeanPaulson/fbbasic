import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useSession, signIn, signOut } from "next-auth/react";

const Home: NextPage = () => {
  const {data, status} = useSession();

const handleClick = async () => {
  
  if (!data?.user) {
    signIn();
    console.log(data);
  }
  console.log(data);
  return;
}

if(status === 'authenticated') {
  console.log(data);
  return <div className={styles.container}>
  <Head>
    <title>fbBasic</title>
    <meta
      name="description"
      content="A basic Facebook app created with nextjs"
    />
    <link rel="icon" href="/favicon.ico" />
  </Head>
  <main>
  <p>{data.user?.name}</p>
  </main>
</div>
}

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
      <button onClick={handleClick}>login</button>
      </main>
    </div>
  );
};

export default Home;

