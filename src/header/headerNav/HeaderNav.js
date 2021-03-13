
import s from './HeaderNav.module.scss';
import logo from "../../assets/img/header/logo.svg";
import map from "../../assets/img/header/map.svg";
import like from "../../assets/img/common/like.svg";
import user from "../../assets/img/header/user.svg";
import count from "../../assets/img/header/count.svg";



function HeaderNav() {
  return (
    <div className={s.headerNav}>
      <ul className={s.headerNavItems}>
        <li className={s.headerNavItem}>
          <a className={s.headerNavLink} href="">Магазины</a>
        </li>
        <li className={s.headerNavItem}>
          <a className={s.headerNavLink} href="">Акции</a>
        </li>
        <li className={s.headerNavItem}>
          <a className={s.headerNavLink} href="">Доставки</a>
        </li>
      </ul>
      <img className={s.headerLogo} src={logo} alt="#" />
      <div className={s.headerPersonalWrap}>
        <div className={s.headerMap}>
          <img src={map} alt="#" />
          <span className={s.headerMapText}>Москва, ул. Науки 25</span>
        </div>
        <div className={s.headerPersonal}>
          <a className={s.headerPersonalIcon} href=""><img src={like} alt="#" /></a>
          <a className={s.headerPersonalIcon} href=""><img src={user} alt="#" /></a>
          <a className={s.headerPersonalIcon} href=""><img src={count} alt="#" /></a>
        </div>
      </div>

    </div>
  );
}
export default HeaderNav;
