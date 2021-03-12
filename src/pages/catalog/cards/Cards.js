

import './Cards.module.scss';
import Card from '../../../components/card/Card';
import jet_ski_130hp from '../../../assets/img/products/jet_sky/jet_ski_130hp.svg';
import jet_ski_155hp from '../../../assets/img/products/jet_sky/jet_ski_155hp.svg';
import jet_ski_230hp from '../../../assets/img/products/jet_sky/jet_ski_230hp.svg';
import jet_ski_230hp_black from '../../../assets/img/products/jet_sky/jet_ski_230hp_black.svg';
import jet_ski_300hp from '../../../assets/img/products/jet_sky/jet_ski_300hp.svg';
import jet_ski_60hp from '../../../assets/img/products/jet_sky/jet_ski_60hp.svg';
import jet_ski_90hp from '../../../assets/img/products/jet_sky/jet_ski_90hp.svg';
import jet_ski_230hp_pro from '../../../assets/img/products/jet_sky/jet_ski_230hp_PRO.svg';
import jet_ski_spark_pepper from '../../../assets/img/products/jet_sky/jet_ski_spark_pepper.svg';
import jet_ski_spark_pineapple from '../../../assets/img/products/jet_sky/jet_ski_spark_pineapple.svg';
import jet_ski_spark_ace from '../../../assets/img/products/jet_sky/jet_ski_spark_ace.svg';
import jet_ski_spark_blueberry from '../../../assets/img/products/jet_sky/jet_ski_spark_blueberry.svg';








function Cards() {
  return (
    <div className="cards">
      <Card to  src = {jet_ski_130hp} cardText = 'Гидроцикл BRP SeaDoo GTI 130hp SE Black\Mango' valuePrice = '1 049 500 ₽'  Sticker={{display: 'none'}} NonAvailable={{display: 'none'}} />
      <Card to value = 'Sale'   src = {jet_ski_155hp} cardText = 'Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic' valuePrice = '1 100 475 ₽' NonAvailable={{display: 'none'}}/>
      <Card to  src = {jet_ski_230hp} cardText = 'Гидроцикл BRP SeaDoo GTR 230hp X California green ' valuePrice = '1 323 700 ₽' Sticker={{display: 'none'}} NonAvailable={{display: 'none'}}/>
      <Card to value = 'Sale'  src = {jet_ski_230hp_black} cardText = 'Гидроцикл BRP SeaDoo GTR 230hp STD Black / Gulfstream'  Available = {{display: 'none'}}/>
      <Card to  src = {jet_ski_300hp} cardText = 'Гидроцикл BRP SeaDoo GTX 300hp LTD Liquid Metal' valuePrice = '1 543 000 ₽' Sticker={{display: 'none'}} NonAvailable={{display: 'none'}}/>
      <Card to  src = {jet_ski_60hp} cardText = 'Гидроцикл BRP SeaDoo Spark 60hp 2 up' valuePrice = '732 345 ₽' Sticker={{display: 'none'}} NonAvailable={{display: 'none'}}/>
      <Card to  src = {jet_ski_90hp} cardText = 'Гидроцикл BRP SeaDoo Spark GTS 90hp Rental' valuePrice = '857 666 ₽' Sticker={{display: 'none'}} NonAvailable={{display: 'none'}}/>
      <Card to value = 'Sale'  src = {jet_ski_230hp_pro} cardText = 'Гидроцикл BRP SeaDoo WAKE 230hp PRO Teal blue' valuePrice = '1 229 711 ₽' NonAvailable={{display: 'none'}}/>
      <Card to  src = {jet_ski_spark_pepper} cardText = 'Гидроцикл Spark 2-UP 900 Ho Ace Chili Pepper' valuePrice = '587 440 ₽' Sticker={{display: 'none'}} NonAvailable={{display: 'none'}}/>
      <Card to  src = {jet_ski_spark_pineapple} cardText = 'Гидроцикл Spark 2-UP 900 Ho Ace Pineapple ' valuePrice = '587 440 ₽' Sticker={{display: 'none'}} NonAvailable={{display: 'none'}}/>
      <Card to value = 'Sale'  src = {jet_ski_spark_ace} cardText = 'Гидроцикл BRP Sea-doo Spark 2-UP 900 Ace Vanilla'  NonAvailable={{display: 'none'}}/>
      <Card to  src = {jet_ski_spark_blueberry} cardText = 'Гидроцикл Spark 3-UP 900 HO Ace IBR Blueberry' Available = {{display: 'none'}} Sticker={{display: 'none'}}/>
    </div>
  );
}

export default Cards;
