import MenuItem from '../../../components/menuItem/MenuItem'
import s from './Section.module.css';

function Section(props) {
  return (
    <div className = {s.wrapper}>
      <h2 className = {s.title}>{props.nameSection}</h2>
      <ul className = {s.menuList}>
        <MenuItem 
          classItem = {s.menuListItem} 
          classLink = {s.menuLink} 
          adress = "#" 
          valueLink = "запчасти" 
        />
        <MenuItem 
          classItem = {s.menuListItem} 
          classLink = {s.menuLink} 
          adress = "#" 
          valueLink = "моторы" 
        />
        <MenuItem 
          classItem = {s.menuListItem} 
          classLink = {s.menuLink} 
          adress = "#" 
          valueLink = "шины" 
        />
        <MenuItem 
          classItem = {s.menuListItem} 
          classLink = {s.menuLink} 
          adress = "#" 
          valueLink = "электроника" 
        />
        <MenuItem 
          classItem = {s.menuListItem} 
          classLink = {s.menuLink} 
          adress = "#" 
          valueLink = "инструменты" 
        />
        <MenuItem 
          classItem = {s.menuListItem} 
          classLink = {s.menuLink} 
          adress = "#" 
          valueLink = "аксессуары" 
        />
      </ul>
      {props.content}
    </div>
    )
}

export default Section;
