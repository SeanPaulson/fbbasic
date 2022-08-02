import Button from "../button/Button";
import styles from "./navbar.module.css";
import { signOut, useSession } from "next-auth/react";
import { useRouter, Router } from "next/router";

const Navbar = () => {
  const { data, status } = useSession();
  const router = useRouter();
  const username = data?.user?.name;

  const handleClick = () => {
    if (router.pathname === '/dashboard') {
      router.push('/dashboard/profile');
    } else {
      router.push('/dashboard');
    }
  }

  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li className={`${styles.nav_li} ${styles.nav_header}`}>
          {username ? <h1 style={{margin: 0}}>{`${username}`}</h1> : null}
        </li>
        <li className={`${styles.nav_li} ${styles.nav_btnLeft}`}>
          <Button className={styles.navbar__btn} onClick={handleClick}>
            {router.pathname === '/dashboard' ? 'profile' : 'friends list'}
          </Button>
        </li>
        <li className={`${styles.nav_li} ${styles.nav_btnRight}`}>
          <Button className={styles.navbar__btn} onClick={() => null}>
            Save
          </Button>
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
