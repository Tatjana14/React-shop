
import s from './HeaderMenu.module.scss';


function HeaderMenu() {
  return (
      <ul className={s.headerMenuItems}>
        <li className={s.headerMenuItem}><a className={s.headerMenuLink} href="">Квадроциклы</a></li>
        <li className={s.headerMenuItem}><a className={s.headerMenuLink} href="">Катера</a></li>
        <li className={s.headerMenuItem}><a className={s.headerMenuLink} href="">Гидроциклы</a></li>
        <li className={s.headerMenuItem}><a className={s.headerMenuLink} href="">Лодки</a></li>
        <li className={s.headerMenuItem}><a className={s.headerMenuLink} href="">Вездеходы</a></li>
        <li className={s.headerMenuItem}><a className={s.headerMenuLink} href="">Снегоходы</a></li>
        <li className={s.headerMenuItem}><a className={s.headerMenuLink} href="">Двигатели</a></li>
        <li className={s.headerMenuItem}><a className={s.headerMenuLink} href="">Запчасти</a></li>
      </ul>
  );
}

export default HeaderMenu;
