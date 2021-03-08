import './CardProduct.css';
import Link from '../Link/Link';
import Button from '../Button/Button';


function cardProduct() {
    return (
        <div className="cardProduct">
            <div className="cardProduct__navigation">
                <Link linkName="Главная" />
                <Link linkName="Гидроциклы" />
                <Link linkName="Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic" />
            </div>
            <div className="characteristics">
                <div className="characteristics__leftBlock">
                    <Button />
                </div>
            </div>
        </div>
    );
}

export default cardProduct;