import s from './Product.module.scss';
import BRPSeaDooGTI155hpSELongBlueMetallic from '../../assets/img/Product/gidrotsikl-beach-blue-metallic.svg';
import Raiting from '../../assets/img/Product/raiting_icon.svg';


import ProductInfoRow from '../../components/productInfoRow/ProductInfoRow';
import ProductTableRow from '../../components/productTableRow/ProductTableRow';
import Sticker from '../../components/sticker/Sticker';
import SimpleRating from '../../components/simpleRating/SimpleRating';
import ProductTableHead from '../../components/productTableHead/ProductTableHead';
import LikeIcon from '../../assets/img/common/like.svg';
// import BreadCrumbs from '../../components/breadCrumbs/BreadCrumbs';

import { makeStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}









function Product() {


    return (



        <div className={s.product}>


            <div className={s.breadCrumbsContainer}>
                <Breadcrumbs separator=">" aria-label="breadcrumb">
                    <Link color="#C4C4C4" href="#" onClick={handleClick} className={s.breadCrumb}>
                        Главная
        </Link>
                    <Link color="#C4C4C4" href="#" onClick={handleClick} className={s.breadCrumb}>
                        Гидроциклы
        </Link>
                    <Typography color="#C4C4C4" className={s.breadCrumb}>Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic</Typography>
                </Breadcrumbs>
            </div>
            <div className={s.describtion}>
                <div className={s.card}>
                    <div className={s.imgContainer}>
                        <Sticker className={s.sticker} saleValue="SALE" />
                        <img className={s.img} src={BRPSeaDooGTI155hpSELongBlueMetallic} alt="" />
                    </div>
                    <div className={s.purchase}>
                        <span className={s.priceOld}>1 200 475 ₽</span>
                        <span className={s.priceDiscount}>1 100 475 ₽</span>
                        <a href="#" className={s.link}>Нашли дешевле? Снизим цену!</a>
                    </div>
                </div>
                <div className={s.information}>
                    <h2 className={s.title}>Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic</h2>
                    <div className={s.productCode}>
                        <span className={s.code}>Код товара:</span>
                        <span className={s.codeNumber}>366666-2</span>
                    </div>

                    <div className={s.buttons}>
                        <ul className={s.btnsList}>
                            <li className={s.listItem}>
                                <button className={s.like}>
                                    <img src={LikeIcon} alt="" className={s.likeImg} />
                                </button>
                            </li>
                            <li className={s.listItem}>
                                <button className={s.raiting}>
                                    <img className={s.img} src={Raiting} alt="" />
                                </button>
                            </li>
                            <li className={s.listItem}>
                                <SimpleRating />
                            </li>
                        </ul>
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
                            <button className={s.btn}>КУПИТЬ</button>
                        </div>
                    </div>
                </div>
            </div>





            <div className={s.tableContainer}>
                <div className={s.nav}>
                    <ul className={s.list}>
                        <li className={s.item}>
                            <a href="" className={s.link}>
                                О товаре
                            </a>
                        </li>
                        <li className={s.item}>
                            <a href="" className={s.link}>
                                Характеристики
                            </a>
                        </li>
                        <li className={s.item}>
                            <a href="" className={s.link}>
                                Отзывы
                            </a>
                        </li>
                        <li className={s.item}>
                            <a href="" className={s.link}>
                                Самовывоз
                            </a>
                        </li>
                        <li className={s.item}>
                            <a href="" className={s.link}>
                                Доставка
                            </a>
                        </li>
                        <li className={s.item}>
                            <a href="" className={s.link}>
                                Cервис
                            </a>
                        </li>
                        <li className={s.item}>
                            <a href="" className={s.link}>
                                Гарантия
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={s.delivery}>
                    <div className={s.inputsContainer}>
                        <div className={s.inputSearchShopContainer}>
                            <label className={s.inputSearchLabel} for="search">Магазин</label>
                            <input className={s.inputSearchShop} type="text" name="search" />
                        </div>
                        <div className={s.radioBtns}>
                            <div className={s.radioBtnToday}>
                                <input className={s.inputRadioBtnToday} type="radio" name="today" />
                                <label className={s.inputRadioBtnLater} for="today">Забрать сегодня</label>
                            </div>
                            <div className={s.radioBtnLater}>
                                <input type="radio" name="later" />
                                <label for="later">Забрать в течение недели</label>
                            </div>
                        </div>
                    </div>

                    <table className={s.table}>
                        <ProductTableHead/>

                        <tbody className={s.tableBody}>
                            <ProductTableRow adress="Москва, ул. Науки 25"
                                weekdayworkDaysValue="пн-сб:"
                                weekdayworkHoursValue="08:00-19:00"
                                weekendWorkDaysValue="вс:"
                                weekendWorkHoursValue="09:00-17:00"
                                avaiable="В наличии" count="1" />
                            <ProductTableRow adress="Москва, ул. Южная 134" weekdayworkDaysValue="пн-сб:" weekdayworkHoursValue="08:00-19:00" weekendWorkDaysValue="вс:" weekendWorkHoursValue="09:00-17:00" avaiable="В наличии" count="2" />
                            <ProductTableRow adress="Санкт-Петербург, ул. Красная 19" weekdayworkDaysValue="пн-сб:" weekdayworkHoursValue="08:00-19:00" weekendWorkDaysValue="вс:" weekendWorkHoursValue="09:00-17:00" avaiable="Нет в наличии" count="0" />
                            <ProductTableRow adress="Киев, ул Шевченко 167" weekdayworkDaysValue="пн-сб:" weekdayworkHoursValue="08:00-19:00" weekendWorkDaysValue="вс:" weekendWorkHoursValue="09:00-17:00" avaiable="Нет в наличии" count="0" />
                        </tbody>
                    </table>

                </div>

            </div>












        </div >
    );
}


export default Product;

