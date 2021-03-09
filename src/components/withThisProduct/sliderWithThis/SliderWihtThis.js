import ButtonCount from '../../buttonCount/ButtonCount'
import Card from '../../card/Card';
import Slider from '../../slider/Slider';
import s from './SliderWihtThis.module.css';
import audioSystem from '../../../assets/img/products/with_this_product/audio_system.svg'
import echomap from '../../../assets/img/products/with_this_product/echomap.svg'
import key from '../../../assets/img/products/with_this_product/key.svg'
import menSuit from '../../../assets/img/products/with_this_product/men_suit.svg'
import count from '../../../assets/img/common/count_button.svg'

function SliderWihtThis() {
  return (
    <div className = {s.wrapper}>
      <Slider sliderContent = {
        <>
        <Card 
          value = "SALE" 
          to = "#" 
          src ={audioSystem}  
          cardText= "BRP Audio-портативная система" 
          className = {s.spanNot}  
          valueSpan = "нет в наличии" 
          available = "Сообщить о поступлении" 
        />
        <Card
          to = "#" 
          src ={echomap}  
          cardText= "СGarmin Echomap Plus 62cv" 
          className = {s.spanPrice}  
          valueSpan = "45 800 ₽"  
          button = { <> <ButtonCount buttonClass = {s.btnCount} src = {count} alt = "Button count" /> </> } 
        />
        <Card
          value = "SALE" 
          to = "#" 
          src ={key}  
          cardText= "RF D.E.S.S.TM Key" 
          className = {s.spanNot}  
          valueSpan = "нет в наличии" 
          available = "Сообщить о поступлении" 
        />
        <Card  
          to = "#" 
          src ={menSuit}  
          cardText= "Мужской костюм 3мм" 
          className = {s.spanPrice}  
          valueSpan = "7 000 ₽"  
          button = { <> <ButtonCount buttonClass = {s.btnCount} src = {count} alt = "Button count" /> </> }  
        />
        </>
      } />
    </div>
    )
}

export default SliderWihtThis;
