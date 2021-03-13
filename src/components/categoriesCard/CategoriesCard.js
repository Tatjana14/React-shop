
import s from './CategoriesCard.module.scss';

function CategoriesCard(props) {
  return (
    <div className = {s.category}>
      <div className = {s.wrapper} >
        <div className = {s.links}>
          <a className = {s.linkCategory} href= {props.categoriesAdress}><h3 className = {s.title}>{props.categoriesValue}</h3></a>
          <a className = {s.linkMore} href={props.categoriesAdress2}>Подробнее &rsaquo;</a>
        </div>
        <div className = {s.image}>
          <img className = {s.imgCategories} src={props.imgCategories} alt={props.altCategories}/>
        </div>        
      </div>
      
    </div>
    )
}

export default CategoriesCard;
