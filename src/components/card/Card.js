import './Card.css';
import Image from '../Image/Image';
import ProductItem from '../../assets/img/products/jet_sky/jet_ski_60hp.svg';


function Card() {
    return (
        <div className="Card">
            <Image src={ProductItem}></Image>
        </div>
        
    );
}

export default Card;