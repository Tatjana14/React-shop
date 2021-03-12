
import s from './CategoriesCard.module.scss';

function CategoriesCard(props) {
  return (
    <div className = {s.wrapper}>
      <a className = {s.linkCategories} href= {props.categoriesAdress}><h3 className = {s.title}>{props.categoriesValue}</h3></a>
      <a className = {s.linkMore} href={props.categoriesAdress2}>Подробнее</a>
      <div className = {s.wrapperImg}>
        <img className = {s.imgCategories} src={props.imgCategories} alt={props.altCategories}/>
      </div>
    </div>
    )
}

export default CategoriesCard;
