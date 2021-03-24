import s from './Cards.module.scss';
import Card from '../card/Card';
import jet_ski_130hp from '../../assets/img/products/jet_sky/jet_ski_130hp.svg';
import jet_ski_155hp from '../../assets/img/products/jet_sky/jet_ski_155hp.svg';
import jet_ski_230hp from '../../assets/img/products/jet_sky/jet_ski_230hp.svg';
import jet_ski_230hp_black from '../../assets/img/products/jet_sky/jet_ski_230hp_black.svg';
import jet_ski_300hp from '../../assets/img/products/jet_sky/jet_ski_300hp.svg';
import jet_ski_60hp from '../../assets/img/products/jet_sky/jet_ski_60hp.svg';
import jet_ski_90hp from '../../assets/img/products/jet_sky/jet_ski_90hp.svg';
import jet_ski_230hp_pro from '../../assets/img/products/jet_sky/jet_ski_230hp_PRO.svg';
import jet_ski_spark_pepper from '../../assets/img/products/jet_sky/jet_ski_spark_pepper.svg';
import jet_ski_spark_pineapple from '../../assets/img/products/jet_sky/jet_ski_spark_pineapple.svg';
import jet_ski_spark_ace from '../../assets/img/products/jet_sky/jet_ski_spark_ace.svg';
import jet_ski_spark_blueberry from '../../assets/img/products/jet_sky/jet_ski_spark_blueberry.svg';








function Cards() {

const access1 = {
  valuePrice: '1 049 500 ₽'
}
const access2 = {
  valuePrice: '1 100 475 ₽'
}
const access3 = {
  valuePrice: '1 323 700 ₽'
}
const access5 = {
  valuePrice: '1 543 000 ₽'
}
const access6 = {
  valuePrice: '732 345 ₽'
}
const access7 = {
  valuePrice: '857 666 ₽'
}
const access8 = {
  valuePrice: '1 229 711 ₽'
}
const access9 = {
  valuePrice: '587 440 ₽'
}
const access10 = {
  valuePrice: '587 440 ₽'
}
  return (
    <div className={s.cards}>
      <Card access={access1} styleCard = {{margin: '0 30px 30px 0'}} card='card'  src = {jet_ski_130hp} cardText = 'Гидроцикл BRP SeaDoo GTI 130hp SE Black\Mango'   Sticker={{display: 'none'}} />
      <Card access={access2} styleCard = {{margin: '0 30px 30px 0'}} card='card'  value = 'Sale'   src = {jet_ski_155hp} cardText = 'Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic'/>
      <Card access={access3} styleCard = {{margin: '0 0px 30px 0'}} card='card'   src = {jet_ski_230hp} cardText = 'Гидроцикл BRP SeaDoo GTR 230hp X California green ' Sticker={{display: 'none'}} />
      <Card styleCard = {{margin: '0 30px 30px 0'}} card='card'  value = 'Sale'  src = {jet_ski_230hp_black} cardText = 'Гидроцикл BRP SeaDoo GTR 230hp STD Black / Gulfstream' />
      <Card access={access5} styleCard = {{margin: '0 30px 30px 0'}} card='card'   src = {jet_ski_300hp} cardText = 'Гидроцикл BRP SeaDoo GTX 300hp LTD Liquid Metal' Sticker={{display: 'none'}} />
      <Card access={access6} styleCard = {{margin: '0 0px 30px 0'}} card='card'   src = {jet_ski_60hp} cardText = 'Гидроцикл BRP SeaDoo Spark 60hp 2 up' Sticker={{display: 'none'}} />
      <Card access={access7} styleCard = {{margin: '0 30px 30px 0'}} card='card' src = {jet_ski_90hp} cardText = 'Гидроцикл BRP SeaDoo Spark GTS 90hp Rental' Sticker={{display: 'none'}} />
      <Card access={access8} styleCard = {{margin: '0 30px 30px 0'}} card='card' value = 'Sale'  src = {jet_ski_230hp_pro} cardText = 'Гидроцикл BRP SeaDoo WAKE 230hp PRO Teal blue'/>
      <Card access={access9} styleCard = {{margin: '0 0px 30px 0'}} card='card' src = {jet_ski_spark_pepper} cardText = 'Гидроцикл Spark 2-UP 900 Ho Ace Chili Pepper' Sticker={{display: 'none'}} />
      <Card access={access10} styleCard = {{margin: '0 30px 30px 0'}} card='card'  src = {jet_ski_spark_pineapple} cardText = 'Гидроцикл Spark 2-UP 900 Ho Ace Pineapple ' Sticker={{display: 'none'}} />
      <Card styleCard = {{margin: '0 30px 30px 0'}} card='card' value = 'Sale'  src = {jet_ski_spark_ace} cardText = 'Гидроцикл BRP Sea-doo Spark 2-UP 900 Ace Vanilla' />
      <Card styleCard = {{margin: '0 0px 30px 0'}} card='card' src = {jet_ski_spark_blueberry} cardText = 'Гидроцикл Spark 3-UP 900 HO Ace IBR Blueberry' Available = {{display: 'none'}} Sticker={{display: 'none'}}/>
    </div>
  );
}

export default Cards;
