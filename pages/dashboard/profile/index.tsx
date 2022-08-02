import Head from "next/head";
import HeadContents from "../../../src/components/HeadContents";
import Button from "../../../src/components/button/Button";
import styles from "./profile.module.css";
import { useSession } from "next-auth/react";
import DashboardLayout from "../DashboardLayout";
import { ReactElement } from "react";

const Profile = () => {
  const { data, status } = useSession();
  

  if (data && status === "authenticated") {
    return (
      <>
        <Head>
          <HeadContents />
        </Head>
        <div className={styles.container}>
          <ul className={styles.ul_main}>
            <li className={styles.li_main}>
              <p className={styles.main_p}>{data?.user?.name}</p>
              <Button className="dashBoard_btn" onClick={() => null}>
                Edit Name
              </Button>
            </li>
            <li className={styles.li_main}>
              <p className={styles.main_p}>example@email.com</p>
              <Button className="dashBoard_btn" onClick={() => null}>
                Edit Email
              </Button>
            </li>
            <li className={styles.li_main}>
              <p className={styles.main_p}>555-555-5555</p>
              <Button className="dashBoard_btn" onClick={() => null}>
                Edit Number
              </Button>
            </li>
            <li className={styles.li_main}>
              <p className={styles.main_p}>main st town, state, 33333</p>
              <Button className="dashBoard_btn" onClick={() => null}>
                Edit address
              </Button>
            </li>
          </ul>
          <Button className="dashBoard_btnDeleteProfile" onClick={() => null}>
            Delete Profile
          </Button>
        </div>
      </>
    );
  } else return null

} 


Profile.getLayout = function getLayout(Profile: ReactElement) {
  return <DashboardLayout>{Profile}</DashboardLayout>;
};

export default Profile;
