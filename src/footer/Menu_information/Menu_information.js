import './Menu_information.css';

function  Menu_information() {
  return (
    <ul className="menu-list">
      <li className="menu-list_item">Информация</li>
      <li className="menu-list_item"><a className="menu-list_link" href="">О компании</a></li>
      <li className="menu-list_item"><a className="menu-list_link" href="">Контакты</a></li>
      <li className="menu-list_item"><a className="menu-list_link" href="">Акции</a></li>
      <li className="menu-list_item"><a className="menu-list_link" href="">Магазины</a></li>
    </ul>
  );
}

export default Menu_information;
