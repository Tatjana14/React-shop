
import s from './Card.module.scss';
import like from '../../assets/img/common/like.svg';
import count from '../../assets/img/common/count_button.svg';
import Sticker from '../sticker/Sticker';
import {NavLink} from 'react-router-dom';






function Card(props) {
    return (
        <div style={props.styleCard} className={s.card}>
            <div className={s.actionCard}>
            {/* {props.href && <NavLink className={s.actionCardText} to={props.hfef.link}>посмотреть товар</NavLink>} */}
             <NavLink className={s.actionCardText} to='/product'>посмотреть товар</NavLink>
            </div>
                <Sticker Sticker={props.Sticker} className={s.cardSticker} saleValue = {props.value}/>
                <button className={s.btnLike}><img className={s.imgLike} src={like} alt=""/></button>
            <div className={s.cardLink}>
                <div className={s.sizeBox}>
                    <img className={s.cardImg} src = {props.src}/>
                </div>
                <p className={s.cardText}>{props.cardText}</p>
            </div>
            {props.access ?
            <div className={s.cardAvailable}>
                <span className = {s.cardPrice}>{props.access.valuePrice}</span>
                <button className={s.btnCount}><img className="imgCount" src={count} alt=""/></button>
            </div>
            : <div className={s.cardNonAvailable}>
                <span className={s.cardNonAvailableText}>нет в наличии</span>
                <a className={s.cardNonAvailableLink} href= '#'>Сообщить о поступлении</a>
            </div> }
        </div>
    );
}

export default Card;