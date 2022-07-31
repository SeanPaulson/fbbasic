import Button from "../button/Button";
import styles from './navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.ul}>
                <li className={styles.nav__btn}>
                    <Button className='navbar__btn'>
                      Profile
                    </Button>
                </li>
                <li className={styles.nav__btn}>
                    <Button className='navbar__btn'>
                      Save
                    </Button>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;