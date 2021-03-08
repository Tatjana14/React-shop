import './Card.css';
import Image from '../image/Image'
import like from '../../assets/img/common/like.svg';
import count from '../../assets/img/common/count_button.svg';




function Card(props) {
    return (
        <div className="Card">
            <button className="btnlike"><Image src = {like}/></button>
            <img src={props.img} alt={props.alt}/>
            <p>{props.cardText}</p>
            <span>{props.price}</span>
            <button className="btncount"><Image src = {count}/></button>
        </div>
    );
}

export default Card;