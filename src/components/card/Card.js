
import s from './Card.module.scss';
import like from '../../assets/img/common/like.svg';
import count from '../../assets/img/common/count_button.svg';
import Sticker from '../sticker/Sticker';






function Card(props) {
    return (
        <div className={s.card}>
                <Sticker Sticker={props.Sticker} className={s.cardSticker} saleValue = {props.value}/>
                <button className={s.btnLike}><img className={s.imgLike} src={like} alt=""/></button>
            <a className={s.cardLink} href={props.to}>
                <img className={s.cardImg} src = {props.src}/>
                <p className={s.cardText}>{props.cardText}</p>
            </a>
            <div className={s.cardAvailable} style={props.Available}>
                <span className = {s.cardPrice}>{props.valuePrice}</span>
                <button className={s.btnCount}><img className="imgCount" src={count} alt=""/></button>
            </div>
            <div className={s.cardNonAvailable} style={props.NonAvailable}>
                <span className={s.cardNonAvailableText}>Нет в наличии</span>
                <a className={s.cardNonAvailableLink} href="">Сообщить о поступлении</a>
            </div>
        </div>
    );
}

export default Card;