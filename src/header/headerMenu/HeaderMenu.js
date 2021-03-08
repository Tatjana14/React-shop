
import './HeaderMenu.css';
import Link from '../../components/link/Link';

function HeaderMenu() {
  return (
    <div className="HeaderMenu">
      <ul className="HeaderMenuItems">
        <li> <Link linkName="Квадроциклы"/> </li>
        <li> <Link linkName="Катера"/> </li>
        <li> <Link linkName="Гидроциклы"/> </li>
        <li> <Link linkName="Лодки"/> </li>
        <li> <Link linkName="Вездеходы"/> </li>
        <li> <Link linkName="Снегоходы"/> </li>
        <li> <Link linkName="Двигатели"/> </li>
        <li> <Link linkName="Запчасти"/> </li>
      </ul>
    </div>
  );
}

export default HeaderMenu;
