
import Card from '../../card/Card';
import Slider from '../../slider/Slider';
import s from './SliderWihtThis.module.css';
import audioSystem from '../../../assets/img/products/with_this_product/audio_system.svg'
import echomap from '../../../assets/img/products/with_this_product/echomap.svg'
import key from '../../../assets/img/products/with_this_product/key.svg'
import menSuit from '../../../assets/img/products/with_this_product/men_suit.svg'

function SliderWihtThis() {
  return (
    <div className = {s.wrapper}>
      <Slider sliderContent = {
        <>
        <Card value = {<Sale saleValue = "SALE" />} to = "#" src ={audioSystem}  cardText= "BRP Audio-портативная система" price = ""/>
        <Card  to = "#" src ={echomap}  cardText= "Garmin Echomap Plus 62cv" price = "6 900 ₽"/>
        <Card value = {<Sale saleValue = "SALE" />} to = "#" src ={key}  cardText= "RF D.E.S.S.TM Key" price = "68 000 ₽"/>
        <Card  to = "#" src ={menSuit}  cardText= "Мужской костюм 3мм" price = ""/>
        </>
      } />
    </div>
    )
}

export default SliderWihtThis;
