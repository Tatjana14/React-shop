import './HeaderNav.css';
import logo from "../../assets/img/header/logo.svg";
import map from "../../assets/img/header/map.svg";
import like from "../../assets/img/common/like.svg";
import user from "../../assets/img/header/user.svg";
import count from "../../assets/img/header/count.svg";
import Image from '../../components/image/Image';
import MenuItem from '../../components/menuItem/MenuItem';


function HeaderNav() {
  return (
    <div className="HeaderNav">
      <ul className="HeaderNavItems">
        <MenuItem classItem = 'headerNavItem' classLink = 'headerNavLink' adress = '' valueLink = 'Магазины'/>
        <MenuItem classItem = 'headerNavItem' classLink = 'headerNavLink' adress = '' valueLink = 'Акции'/>
        <MenuItem classItem = 'headerNavItem' classLink = 'headerNavLink' adress = '' valueLink = 'Доставка'/>
      </ul>
      <Image src={logo} alt="#"/>
      <div className="HeaderMap">
        <Image src={map} alt="#"/>
        <span>Москва, ул. Науки 25</span>
      </div>
      <div className="HeaderPersonal">
        <a href=""><Image src={like} alt="#"/></a>
        <a href=""><Image src={user} alt="#"/></a>
        <a href=""><Image src={count} alt="#"/></a>
      </div>
    </div>
  );
}
export default HeaderNav;
