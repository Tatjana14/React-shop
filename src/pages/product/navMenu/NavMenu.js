import './navMenu.css';
import MenuItem from '../../../components/menuItem/MenuItem';


function NavMenu() {
    return (
        <nav className="navmenu">
            <ul className="navMenu-list">
                <MenuItem classItem='#' classLink='#' adress='' valueLink='Главная' />
                <MenuItem classItem='#' classLink='#' adress='' valueLink='Гидроциклы' />
                <MenuItem classItem='#' classLink='#' adress='' valueLink='Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic' />
            </ul>
        </nav>
    );
}

export default NavMenu;