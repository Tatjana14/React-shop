import s from './SectionProducts.module.css';

function SectionProducts(props) {
  return (
    <>
    <div className = {s.wrapper}>
      <h2 className = {s.title}>{props.nameSection}</h2>
      <ul className = {s.menuList}>
        <li>
          <a classname = {s.menuListItem} className = {s.menuLink}  href="#">
          запчасти
          </a>
        </li>
        <li>
          <a classname = {s.menuListItem} className = {s.menuLink} href="#">
          моторы
          </a>
        </li>
        <li>
          <a classname = {s.menuListItem} className = {s.menuLink} href="#">
          шины
          </a>
        </li>
        <li>
          <a classname = {s.menuListItem} className = {s.menuLink} href="#">
          электроника
          </a>
        </li>
        <li>
          <a classname = {s.menuListItem} className = {s.menuLink} href="#">
          инструменты
          </a>
        </li>
        <li>
          <a classname = {s.menuListItem} className = {s.menuLink} href="#">
          аксессуары
          </a>
        </li>
        </ul>
    </div>
    </>
    )
}

export default SectionProducts;
