
import { NavLink } from 'react-router-dom';
import s from './CategoriesCard.module.scss';

function CategoriesCard(props) {
  return (
    <div className = {s.category}>
      <div className = {s.links}>
        <h3 className = {s.title}>{props.categoriesValue}</h3>
        <NavLink className = {s.linkMore} to={props.categoriesAdress2}>Подробнее </NavLink>
      </div>
      <div style = {props.style} className = {s.imgWrapper} >
        <img  className = {s.imgCategories} src={props.imgCategories} alt={props.altCategories}/>
      </div>              
    </div>
    )
}

export default CategoriesCard;
