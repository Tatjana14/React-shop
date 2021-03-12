import './HeaderNav.css';
import logo from "../../assets/img/header/logo.svg";
import map from "../../assets/img/header/map.svg";
import like from "../../assets/img/common/like.svg";
import user from "../../assets/img/header/user.svg";
import count from "../../assets/img/header/count.svg";
import MenuItem from '../../components/menuItem/MenuItem';


function HeaderNav() {
  return (
    <div className="HeaderNav">
      <ul className="HeaderNavItems">
        <li className='headerNavItem'>
          <a className='headerNavLink' href="">Магазины</a>
        </li>
        <li className='headerNavItem'>
          <a className='headerNavLink' href="">Акции</a>
        </li>
        <li className='headerNavItem'>
          <a className='headerNavLink' href="">Доставки</a>
        </li>
      </ul>
      <img className='HeaderLogo' src={logo} alt="#" />
      <div className='HeaderPersonalWrap'>
        <div className='HeaderMap'>
          <img src={map} alt="#" />
          <span>Москва, ул. Науки 25</span>
        </div>
        <div className="HeaderPersonal">
          <a className='HeaderPersonalIcon' href=""><img src={like} alt="#" /></a>
          <a className='HeaderPersonalIcon' href=""><img src={user} alt="#" /></a>
          <a className='HeaderPersonalIcon' href=""><img src={count} alt="#" /></a>
        </div>
      </div>

    </div>
  );
}
export default HeaderNav;
