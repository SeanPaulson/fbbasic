import Button from "../button/Button";
import styles from "./navbar.module.css";
import { signOut, useSession } from "next-auth/react";
import { useRouter, Router } from "next/router";
import { FormEvent, useContext, useEffect } from "react";
import { UserContext } from "../UserContext";


const Navbar = () => {
  const { data, status } = useSession();
  const {state, dispatch} = useContext(UserContext);
  const {email, phone, address} = state;
  const router = useRouter();
  const username = data?.user?.name;

  useEffect(() => {
    if(status === "authenticated") {
      dispatch({type: 'name', payload: data.user?.name})
    }
  }, [])

  const handleClick = () => {
    if (router.pathname === "/dashboard") {
      router.push("/dashboard/profile");
    } else {
      router.push("/dashboard");
    }
  };

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if(state) {
      const response = await fetch('/api/friends', {
        method: 'POST',
        body: JSON.stringify(state)
      });
      if (!response.ok) {
        throw new Error(response.statusText)
      }
  
      const jsonResponse = await response.json();
      console.log(jsonResponse);
    }
    dispatch({type: 'reset'})
  }

  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li className={`${styles.nav_li} ${styles.nav_header}`}>
          {username ? <h1 style={{ margin: 0 }}>{`${username}`}</h1> : null}
        </li>

        <li className={`${styles.nav_li} ${styles.nav_btnLeft}`}>
          <Button className={styles.navbar__btn} onClick={handleClick}>
            {router.pathname === "/dashboard" ? "profile" : "friends list"}
          </Button>
        </li>

        <li className={`${styles.nav_li} ${styles.nav_btnRight}`}>
          <form typeof="submit" onSubmit={handleSubmit}>
            <Button className={styles.navbar__btn} onClick={() => null}>
              Save
            </Button>
          </form>
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
