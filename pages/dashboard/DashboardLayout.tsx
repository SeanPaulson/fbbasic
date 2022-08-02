import { useSession } from "next-auth/react";
import Navbar from "../../src/components/navbar/Navbar";
import { PropsWithChildren, useState } from "react";
import styles from "./dashBoard.module.css";

const DashboardLayout = ({ children }: PropsWithChildren) => {
  const { data, status } = useSession();
  const [profileData, setProfileData] = useState();

  return (
    <>
      {data?.user ? (
        <div className={styles.dashBoard_container}>
          <Navbar />
          {children}
        </div>
      ) : null}
    </>
  );
};

export default DashboardLayout;
