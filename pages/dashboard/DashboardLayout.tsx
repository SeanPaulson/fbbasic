import { useSession } from "next-auth/react";
import Navbar from "../../src/components/navbar/Navbar";
import { PropsWithChildren } from "react";
import styles from "./dashBoard.module.css";
import UserProvider from "../../src/components/UserContext";

const DashboardLayout = ({ children }: PropsWithChildren) => {
  const { data } = useSession();

  return (
    <UserProvider>
      {data?.user ? (
        <div className={styles.dashBoard_container}>
          <Navbar />
          {children}
        </div>
      ) : null}
    </UserProvider>
  );
};

export default DashboardLayout;
