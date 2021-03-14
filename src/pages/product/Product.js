import s from './Product.module.scss';
import BRPSeaDooGTI155hpSELongBlueMetallic from '../../assets/img/Product/gidrotsikl-beach-blue-metallic.svg';
import Rating from '../../assets/img/Product/raiting_icon.svg';


import ProductInfoRow from '../../components/productInfoRow/ProductInfoRow';




function Product(props) {
    return (
        <div className={s.product}>
            <div className={s.card}>
                <div className={s.imgProduct}>
                    <img className={s.img} src={BRPSeaDooGTI155hpSELongBlueMetallic} alt="" />
                </div>
                <div className={s.purchase}>
                    <span className={s.priceOld}>1 200 475 ₽</span>
                    <span className={s.priceDiscount}>1 100 475 ₽</span>
                    <a href="#" className={s.link}>Нашли дешевле? Снизим цену!</a>
                </div>
            </div>
            <div className={s.information}>
                <h2 className={s.title}>{props.productName}Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic</h2>
                <div className={s.productCode}>
                    <span className={s.code}>Код товара:</span>
                    <span className={s.codeNumber}>{props.productCode}366666-2</span>
                </div>

                <div className={s.buttons}>
                    <button className={s.raiting}>
                        <img className={s.img} src={Rating} alt=""/>
                    </button>
                </div>

                <div className={s.characteristics}>
                    <div className={s.linksWrapper}>
                        <ul className={s.list}>
                            <li className={s.item}><a href="" className={s.link}>Характеристики</a></li>
                            <li className={s.item}><a href="" className={s.link}>Наличие в магазине</a>
                            </li>
                        </ul>
                    </div>
                    <div className={s.rows}>
                        <ProductInfoRow 
                        
                        characteristicNameClass={s.item} 
                        characteristicValueClass={s.item}
                        CharacteristicName="Производитель" CharacteristicValue="Канада" />
                        <ProductInfoRow
                        
                        characteristicNameClass={s.item} 
                        characteristicValueClass={s.item}
                        CharacteristicName="Количество мест, шт:" CharacteristicValue="3" />
                        <ProductInfoRow
                         
                        characteristicNameClass={s.item} 
                        characteristicValueClass={s.item} 
                        CharacteristicName="Мощность, л.с." CharacteristicValue="155" />
                        <ProductInfoRow
                        
                        characteristicNameClass={s.item} 
                        characteristicValueClass={s.item}
                        CharacteristicName="Тип двигателя" CharacteristicValue="Бензиновый" />
                        <ProductInfoRow
                        
                        characteristicNameClass={s.item} 
                        characteristicValueClass={s.item} 
                        CharacteristicName="Год выпуска" CharacteristicValue="2018" />
                        <a className={s.link} href="">Показать еще</a>
                        <button className={s.btn}>Купить</button>
                    </div>
                </div>
            </div>




        </div >
    );
}

export default Product;