
import s from './Header.module.scss';
import HeaderMenu from './headerMenu/HeaderMenu';
import HeaderNav from './headerNav/HeaderNav'

function Header() {
  return (
    <div className={s.header}>
          <HeaderNav/>
          <HeaderMenu/>
    </div>
  );
}

export default Header;
