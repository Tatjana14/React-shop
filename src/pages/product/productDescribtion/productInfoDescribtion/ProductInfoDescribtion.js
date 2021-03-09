import './ProductInfoDescribtion.css';
import Button from '../../../../components/button/Button';
import ButtonLike from '../../../../components/buttonLike/ButtonLike';
import Like from '../../../../assets/img/common/like.svg';
import ButtonStatistic from './buttonStatistic/ButtonStatistic';
import ButtonStar from './buttonStar/ButtonStar';
import ProductInfoRow from './productInfoRow/ProductInfoRow';



function ProductInfoDescribtion() {
    return (
        <div className="productInfoDescribtion">
            <div className="productInfoDescribtion-top">
                <h2 className="productInfoDescribtion-top__title">
                    Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic
                </h2>
                <span className="productInfoDescribtion-top__product-code">Код товара: 366666-2</span>
                <div className="productInfoDescribtion-top__btns">
                    <ButtonLike src={Like} />
                    <ButtonStatistic />
                    <div className="stars_block">
                        <ButtonStar />
                        <ButtonStar />
                        <ButtonStar />
                        <ButtonStar />
                        <ButtonStar />
                    </div>
                </div>
            </div>
            <div className="productInfoDescribtion-content">
            <ProductInfoRow CharacteristicName="Производитель" CharacteristicValue="Канада"/>
            <ProductInfoRow CharacteristicName="Количество мест, шт:" CharacteristicValue="3"/>
            <ProductInfoRow CharacteristicName="Мощность, л.с." CharacteristicValue="155"/>
            <ProductInfoRow CharacteristicName="Тип двигателя" CharacteristicValue="Бензиновый"/>
            <ProductInfoRow CharacteristicName="Год выпуска" CharacteristicValue="2018"/>
            </div>
        </div>
    );
}

export default ProductInfoDescribtion;
