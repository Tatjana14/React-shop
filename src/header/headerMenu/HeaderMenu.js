
import './HeaderMenu.module.scss';


function HeaderMenu() {
  return (
    <div className="HeaderMenu">
      <ul className="HeaderMenuItems">
        <li className='headerMenuItem'><a className='headerMenuLink' href="">Квадроциклы</a></li>
        <li className='headerMenuItem'><a className='headerMenuLink' href="">Катера</a></li>
        <li className='headerMenuItem'><a className='headerMenuLink' href="">Гидроциклы</a></li>
        <li className='headerMenuItem'><a className='headerMenuLink' href="">Лодки</a></li>
        <li className='headerMenuItem'><a className='headerMenuLink' href="">Вездеходы</a></li>
        <li className='headerMenuItem'><a className='headerMenuLink' href="">Снегоходы</a></li>
        <li className='headerMenuItem'><a className='headerMenuLink' href="">Двигатели</a></li>
        <li className='headerMenuItem'><a className='headerMenuLink' href="">Запчасти'</a></li>
      </ul>
    </div>
  );
}

export default HeaderMenu;
