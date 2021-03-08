
import s from './MenuItem.module.css';

function MenuItem(props) {
  return (
      <li className = {props.classItem}>
        <a className = {props.classLink}  href = {props.adress}>{props.valueLink}</a>
      </li>
    )
}

export default MenuItem;
