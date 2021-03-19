
import s from './CategoriesCard.module.scss';

function CategoriesCard(props) {
  return (
    <div className = {s.category}>
        <div className = {s.links}>
          <a className = {s.linkCategory} href= {props.categoriesAdress}><p className = {s.title}>{props.categoriesValue}</p></a>
          <a className = {s.linkMore} href={props.categoriesAdress2}>Подробнее </a>
        </div>
        <div style = {props.style} className = {s.image} >
          <img  className = {s.imgCategories} src={props.imgCategories} alt={props.altCategories}/>
        </div>              
    </div>
    )
}

export default CategoriesCard;
