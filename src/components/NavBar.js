import PropTypes from 'prop-types';
import { FaBars } from 'react-icons/fa';
import { BsSearch } from 'react-icons/bs';
import styles from './navBar.module.css';

const NavBar = ({ logStatus, logout }) => (
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
        <span className={styles.signIn}>{logStatus ? <button className={styles.logout} type="button" onClick={logout}>LOG OUT</button> : 'SIGN IN' }</span>
      </div>
    </nav>
  </header>
);

NavBar.propTypes = {
  logStatus: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
};

export default NavBar;
