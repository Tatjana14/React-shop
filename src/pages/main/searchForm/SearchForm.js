
import MenuItem from '../../../components/menuItem/MenuItem';
import InputSearch from './inputSearch/InputSearch';
import s from './SearchForm.module.css';

function SearchForm(props) {
  return (
    <div className = {s.wrapper} >
      <div className = {s.menu}>
        <ul className = {s.menuList}>
          <MenuItem 
            classItem = {s.menuItem} 
            classLink = {s.menuLink} 
            adress = "#" 
            valueLink = "Поиск по номеру"
          />
          <MenuItem 
            classItem = {s.menuItem} 
            classLink = {s.menuLink} 
            adress = "#" 
            valueLink = "Поиск по марке"/>
          <MenuItem 
            classItem = {s.menuItem} 
            classLink = {s.menuLink} 
            adress = "#" 
            valueLink = "Поиск по названию товара"
          />
        </ul>
      </div>
      <div className = {s.inputForm}>
        <InputSearch inputClass = {s.input} placeholder =  "Введите марку"/>
        <button className = {s.button}>Искать</button>
      </div>
      
    </div>
    )
}

export default SearchForm;
