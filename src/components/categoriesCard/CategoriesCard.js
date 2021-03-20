
import s from './CategoriesCard.module.scss';

function CategoriesCard(props) {
  return (
    <div className = {s.category}>
      <div className = {s.links}>
        <h3 className = {s.title}>{props.categoriesValue}</h3>
        <a className = {s.linkMore} href={props.categoriesAdress2}>Подробнее </a>
      </div>
      <div style = {props.style} className = {s.imgWrapper} >
        <img  className = {s.imgCategories} src={props.imgCategories} alt={props.altCategories}/>
      </div>              
    </div>
    )
}

export default CategoriesCard;
