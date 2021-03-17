
import s from './SectionProducts.module.scss';

function SectionProducts(props) {
  return (
    <>
    <div className = {s.wrapperSection}>
      <h2 className = {s.titleSection}>{props.nameSection}</h2>
      <ul className = {s.menuListSection}>
        <li className = {s.menuListItem}>
          <a className = {s.linkSection}  href="#">
          запчасти
          </a>
        </li>
        <li className = {s.menuListItem}>
          <a className = {s.linkSection} href="#">
          моторы
          </a>
        </li >
        <li className = {s.menuListItem}>
          <a className = {s.linkSection} href="#">
          шины
          </a>
        </li>
        <li className = {s.menuListItem}>
          <a className = {s.linkSection} href="#">
          электроника
          </a>
        </li>
        <li className = {s.menuListItem}>
          <a className = {s.linkSection} href="#">
          инструменты
          </a>
        </li>
        <li className = {s.menuListItem}>
          <a className = {s.linkSection} href="#">
          аксессуары
          </a>
        </li>
        </ul>
    </div>
    </>
    )
}

export default SectionProducts;
