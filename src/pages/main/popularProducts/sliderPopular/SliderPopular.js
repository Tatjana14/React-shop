
import Card from '../../../../components/card/Card';
import Slider from '../../../../components/slider/Slider';
import s from './SliderPopular.module.css';
import bag from '../../../../assets/img/products/popular/backpack.svg'
import vest from '../../../../assets/img/products/popular/vest.svg'
import audio from '../../../../assets/img/products/popular/audio_system_premium.svg'
import equipment from '../../../../assets/img/products/popular/equipment.svg'
import ButtonCount from '../../../../components/buttonCount/ButtonCount';
import count from '../../../../assets/img/common/count_button.svg'
function PopularProducts() {
  return (
    <div className = {s.wrapper}>
      <Slider sliderContent = {
        <>
        <Card 
          to = "#" 
          src ={bag}  
          cardText= "Водонепроницаемый рюкзак" 
          className = {s.spanPrice} 
          valueSpan = "9 800 ₽" 
          button = { <> <ButtonCount buttonClass = {s.btnCount} src = {count} alt = "Button count" /> </> }
        />
        <Card
          value = "SALE" 
          to = "#" 
          src ={vest}  
          cardText= "Спасательный жилет BRP Men's Airflow PFD" 
          className = {s.spanPrice}  
          valueSpan = "6 900 ₽"  
          button = { <> <ButtonCount buttonClass = {s.btnCount} src = {count} alt = "Button count" /> </> } 
        />
        <Card 
          to = "#" 
          src ={audio}  
          cardText= "BRP Audio-Premium System" 
          className = {s.spanPrice}  
          valueSpan = "68 000 ₽" 
          button = { <> <ButtonCount buttonClass = {s.btnCount} src = {count} alt = "Button count" /> </> } 
        />
        <Card
          value = "SALE"  
          to = "#" 
          src ={equipment}  
          cardText= "Спасательное снаряжение" 
          className = {s.spanNot}  
          valueSpan = "нет в наличии" 
          available = "Сообщить о поступлении" 
        />
        </>
      } />
    </div>
    )
}

export default PopularProducts;
