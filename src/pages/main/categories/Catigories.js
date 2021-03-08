
import LinkSale from '../../../components/linkSale/LinkSale';
import s from './CardDiscount.module.css';

function CardDiscount(props) {
  return (
    <div>
      <LinkSale className = {s.link} to = "#" value = "АКЦИЯ"/>
      <span className = {s.priceNow} >{props.newPrice}</span>
      <span className = {s.priceOld}>{props.oldPrice}</span>
      <div className = {s.content}>
        <img className = {s.img} src = {props.scr} alt={props.alt}/>
        <p className = {s.titleProduct}>{props.nameProduct}</p>
      </div>
      <div cclassName = {s.wrapperSubtitle}>
        <p className = {s.subtitle}>Акция действует до</p>
        <span className = {s.date}>{props.date}</span>
      </div>
    </div>
    )
}

export default CardDiscount;
