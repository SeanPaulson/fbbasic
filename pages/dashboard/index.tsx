import Head from "next/head"
import HeadContents from "../../src/components/HeadContents"
import Button from "../../src/components/button/Button";
import styles from '../../styles/Home.module.css'
import { useSession } from "next-auth/react";
import DashboardLayout from "./DashboardLayout";
import { ReactElement } from "react";

const DashBoard = () => {
    const {data, status} = useSession();
    
  return (
    <div className={styles.container}>
      <Head>
        <HeadContents />
      </Head>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <p>{data?.user?.name}</p>
        <Button onClick={() => null}>Edit</Button>
      </div>
    </div>
  );
};

DashBoard.getLayout = function getLayout(DashBoard: ReactElement) {
    return <DashboardLayout>{DashBoard}</DashboardLayout>;
  };

export default DashBoard;
