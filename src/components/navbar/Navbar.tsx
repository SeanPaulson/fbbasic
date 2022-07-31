import Button from "../button/Button";
import styles from "./navbar.module.css";
import { signOut } from "next-auth/react";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li className={`${styles.nav_li} ${styles.nav_btnLeft}`}>
          <Button className={styles.navbar__btn} onClick={() => null}>Profile</Button>
        </li>
        <li className={`${styles.nav_li} ${styles.nav_btnRight}`}>
          <Button className={styles.navbar__btn} onClick={() => null}>Save</Button>
        </li>
        <li className={styles.li_Signout_btn}>
          <Button
            className="signout__btn"
            onClick={() =>
              signOut({
                redirect: true,
                callbackUrl: "/",
              })
            }
          >
            sign out
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
