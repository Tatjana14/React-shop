import './Cards.css';
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
      <Card to  src = {jet_ski_130hp} cardText = 'Гидроцикл BRP SeaDoo GTI 130hp SE Black\Mango' price = '1 049 500 ₽'/>
      <Card value = 'Акция' to  src = {jet_ski_155hp} cardText = 'Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic' price = '1 100 475 ₽'/>
      <Card to  src = {jet_ski_230hp} cardText = 'Гидроцикл BRP SeaDoo GTR 230hp X California green ' price = '1 323 700 ₽'/>
      <Card value = 'Акция' to  src = {jet_ski_230hp_black} cardText = 'Гидроцикл BRP SeaDoo GTR 230hp STD Black / Gulfstream' price = 'нет в наличии' available = 'Сообщить о поступлении'/>
      <Card to  src = {jet_ski_300hp} cardText = 'Гидроцикл BRP SeaDoo GTX 300hp LTD Liquid Metal' price = '1 543 000 ₽'/>
      <Card to  src = {jet_ski_60hp} cardText = 'Гидроцикл BRP SeaDoo Spark 60hp 2 up' price = '732 345 ₽'/>
      <Card to  src = {jet_ski_90hp} cardText = 'Гидроцикл BRP SeaDoo Spark GTS 90hp Rental' price = '857 666 ₽'/>
      <Card value = 'Акция' to  src = {jet_ski_230hp_pro} cardText = 'Гидроцикл BRP SeaDoo WAKE 230hp PRO Teal blue' price = '1 229 711 ₽'/>
      <Card to  src = {jet_ski_spark_pepper} cardText = 'Гидроцикл Spark 2-UP 900 Ho Ace Chili Pepper' price = '587 440 ₽'/>
      <Card to  src = {jet_ski_spark_pineapple} cardText = 'Гидроцикл Spark 2-UP 900 Ho Ace Pineapple ' price = '587 440 ₽'/>
      <Card value = 'Акция' to  src = {jet_ski_spark_ace} cardText = 'Гидроцикл BRP Sea-doo Spark 2-UP 900 Ace Vanilla ' price = 'нет в наличии' available = 'Сообщить о поступлении'/>
      <Card to  src = {jet_ski_spark_blueberry} cardText = 'Гидроцикл Spark 3-UP 900 HO Ace IBR Blueberry' price = 'нет в наличии' available = 'Сообщить о поступлении'/>
    </div>
  );
}

export default Cards;
