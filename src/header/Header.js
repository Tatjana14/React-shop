import './Header.css';
import HeaderMenu from './headerMenu/HeaderMenu';
import HeaderNav from './headerNav/HeaderNav'

function Header() {
  return (
    <div className="Header">
          <HeaderNav/>
          <HeaderMenu/>
    </div>
  );
}

export default Header;
