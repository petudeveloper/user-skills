import { FaBars } from 'react-icons/fa';
import { BsSearch } from 'react-icons/bs';
import styles from './navBar.module.css';

const NavBar = () => (
  <header>
    <nav className={styles.container}>
      <div className={styles.iconsContainer}>
        <FaBars />
        <a className={styles.logo} href="/">
          torre
          <span className={styles.logoGreen}>.co</span>
        </a>
      </div>
      <div className={styles.iconsContainer}>
        <BsSearch />
        <span className={styles.signIn}>SIGN IN</span>
      </div>
    </nav>
  </header>
);

export default NavBar;
