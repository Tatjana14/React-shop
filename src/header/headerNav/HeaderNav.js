import './HeaderNav.css';
import logo from "../../assets/img/header/logo.svg";
import map from "../../assets/img/header/map.svg";
import like from "../../assets/img/common/like.svg";
import user from "../../assets/img/header/user.svg";
import count from "../../assets/img/header/count.svg";


function HeaderNav() {
  return (
    <div className="HeaderNav">
      <ul className="HeaderNavItems">
        <li><a href="">Магазины</a></li>
        <li><a href="">Акции</a></li>
        <li><a href="">Доставка и оплата</a></li>
      </ul>
      <img src={logo} alt=""/>
      <div className="HeaderMap">
        <img src={map} alt=""/>
        <span>Москва, ул. Науки 25</span>
      </div>
      <div className="HeaderPersonal">
        <a href=""><img src={like} alt=""/></a>
        <a href=""><img src={user} alt=""/></a>
        <a href=""><img src={count} alt=""/></a>
      </div>
    </div>
  );
}
export default HeaderNav;
