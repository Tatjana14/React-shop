import './ProductInfoDescribtion.module.scss';
import Like from '../../../assets/img/common/like.svg';
import Raiting from '../../../assets/img/Product/raiting_icon.svg';
import ProductInfoRow from './productInfoRow/ProductInfoRow';

function ProductInfoDescribtion() {
    return (
        <div className="productInfoDescribtion">
            <h2 className="productInfoDescribtion__title">Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic</h2>
            <span className="ProductDescribtion_product-code">Код товара: 366666-2</span>
            <div className="productInfoDescribtion__product-buttons">
                <button className="productInfoDescribtion__btn"><a href="" className="productInfoDescribtion__link"><img src={Like} alt="" className="productInfoDescribtion__icon"/></a></button>
                <button className="productInfoDescribtion__btn"><a href="" className="productInfoDescribtion__link"><img src={Raiting} alt="" className="productInfoDescribtion__icon"/></a></button>
                <img src="" alt=""/>
                </div>
                
                <div className="productInfoDescribtion-characteristick">
                    <div className="productInfoDescribtion-characteristick__links-nav">
                    <a href="" className="productInfoDescribtion-characteristick__link-nav">Характеристики</a>
                    <a href="" className="productInfoDescribtion-characteristick__link-nav">Наличие в магазине</a>
                    </div>
                    <div className="productInfoDescribtion-characteristick__info-row">
                        <ProductInfoRow CharacteristicName="Производитель" CharacteristicValue="Канада"/>
                        <ProductInfoRow CharacteristicName="Количество мест, шт:" CharacteristicValue="3"/>
                        <ProductInfoRow CharacteristicName="Мощность, л.с." CharacteristicValue="155"/>
                        <ProductInfoRow CharacteristicName="Тип двигателя" CharacteristicValue="Бензиновый"/>
                        <ProductInfoRow CharacteristicName="Год выпуска" CharacteristicValue="2018"/>
                        <a href="">Показать еще</a>
                        <button>Купить</button>
                    </div>
                </div>
            
        </div>
    );
}

export default ProductInfoDescribtion;
