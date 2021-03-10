import './Card.css';
import like from '../../assets/img/common/like.svg';
import count from '../../assets/img/common/count_button.svg';
import ButtonLike from '../buttonLike/ButtonLike';
import ButtonCount from '../buttonCount/ButtonCount';
import Sticker from '../sticker/Sticker';






function Card(props) {
    return (
        <div className="Card">
                <Sticker Sticker={props.Sticker} className="cardSticker" saleValue = {props.value}/>
                <button className="btnLike"><img className="imgLike" src={like} alt=""/></button>
            <a className='cardLink' href={props.to}>
                <img className="cardImg" src = {props.src}/>
                <p className="cardText">{props.cardText}</p>
            </a>
            <div className="cardAvailable" style={props.Available}>
                <span className = 'cardPrice'>{props.valuePrice}</span>
                <button className="btnCount"><img className="imgCount" src={count} alt=""/></button>
            </div>
            <div className="cardNonAvailable" style={props.NonAvailable}>
                <span className='cardNonAvailableText'>Нет в наличии</span>
                <a className='cardNonAvailableLink' href="">Сообщить о поступлении</a>
            </div>
        </div>
    );
}

export default Card;