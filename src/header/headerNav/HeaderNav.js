import './HeaderNav.css';
import logo from "../../assets/img/header/logo.svg";
import map from "../../assets/img/header/map.svg";
import like from "../../assets/img/common/like.svg";
import user from "../../assets/img/header/user.svg";
import count from "../../assets/img/header/count.svg";
import Image from '../../components/image/Image';
import Link from '../../components/link/Link';


function HeaderNav() {
  return (
    <div className="HeaderNav">
      <ul className="HeaderNavItems">
        <li><Link linkName="Магазины"/></li>
        <li><Link linkName="Акции"/></li>
        <li><Link linkName="Доставка и оплата"/></li>
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
