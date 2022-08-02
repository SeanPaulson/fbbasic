import Head from "next/head";
import HeadContents from "../../src/components/HeadContents";
import Button from "../../src/components/button/Button";
import styles from "./dashBoard.module.css";
import { useSession } from "next-auth/react";
import DashboardLayout from "./DashboardLayout";
import { ReactElement, useState } from "react";

const DashBoard = () => {
  const { data, status } = useSession();
  const [showFriends, setShowFriends] = useState(false);

  const handleClick = () => {
    setShowFriends(!showFriends);
  }

  if (data?.user && status === "authenticated") {
    return (
      <>
        <Head>
          <HeadContents />
        </Head>
        <div className={styles.container}>
          <ul className={styles.ul_main}>
            <li className={styles.li_main}>
              <p className={styles.main_p}>username</p>
              <Button className="dashBoard_btn" onClick={() => null}>
                profile
              </Button>
            </li>
            <li className={styles.li_main}>
              <p className={styles.main_p}>username</p>
              <Button className="dashBoard_btn" onClick={() => null}>
                profile
              </Button>
            </li>
            <li className={styles.li_main}>
              <p className={styles.main_p}>username</p>
              <Button className="dashBoard_btn" onClick={() => null}>
                profile
              </Button>
            </li>
            <li className={styles.li_main}>
              <p className={styles.main_p}>username</p>
              <Button className="dashBoard_btn" onClick={() => null}>
                profile
              </Button>
            </li>
          </ul>
          <Button className="dashBoard_close_btn" onClick={handleClick}>
            close
          </Button>
        </div>
      </>
    );
  } else return null;
};

DashBoard.getLayout = function getLayout(DashBoard: ReactElement) {
  return <DashboardLayout>{DashBoard}</DashboardLayout>;
};

export default DashBoard;
