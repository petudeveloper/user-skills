import { FaBars } from 'react-icons/fa';
import { BsSearch } from 'react-icons/bs';

const NavBar = () => (
  <header>
    <nav>
      <div>
        <p>
          torre
          <span>.co</span>
        </p>
        <FaBars />
      </div>
      <div>
        <BsSearch />
        <span>SIGN IN</span>
      </div>
    </nav>
  </header>
);

export default NavBar;
