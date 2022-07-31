import { useSession, signOut } from "next-auth/react";
import Button from "../../src/components/button/Button";
import Navbar from "../../src/components/navbar/Navbar";
import { PropsWithChildren } from "react";
import styles from './dashBoard.module.css';

const DashboardLayout = ({ children }: PropsWithChildren) => {
  const { data, status } = useSession();

  return (
    <>
      {data?.user ? (
        <div className={styles.dashBoard_container}>
          <Button className='signout__btn' onClick={signOut}>
            sign out
          </Button>
          <Navbar />
          {children}
        </div>
      ) : null}
    </>
  );
};

export default DashboardLayout;
