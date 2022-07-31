import { PropsWithChildren } from "react";
("react");
import styles from "../../styles/Layout.module.css";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className={styles.appContainer}>
      <main className={styles.main__wrapper}>{children}</main>
    </div>
  );
};

export default Layout;
