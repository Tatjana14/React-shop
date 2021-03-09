import './Card.css';
import like from '../../assets/img/common/like.svg';
import count from '../../assets/img/common/count_button.svg';
import ButtonLike from '../buttonLike/ButtonLike';
import ButtonCount from '../buttonCount/ButtonCount';
import Sale from '../sale/Sale';
import Image from '../image/Image';






function Card(props) {
    return (
        <div className="Card">
            <div className="Card-inner">
                <Sale saleValue = {props.value}/>
                <ButtonLike buttonClass = 'buttonLike' imgClass = 'imgLike'  src = {like} alt = "ButtonLike"/>
            </div>
            <a className='cardLink' href={props.to}>
            <Image src = {props.src}/>
                <p>{props.cardText}</p>
            </a>
            <span className = {props.classNameCpan}>{props.valueSpan}</span>
            <a className ='cardAvailable' href="">{props.available}</a>
            {props.button}
        </div>
    );
}

export default Card;