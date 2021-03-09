import left from '../../assets/img/common/slider_arrow_left.svg'
import right from '../../assets/img/common/slider_arrow_right.svg'
import s from './Slider.module.css';
import ButtonSlider from '../buttonSlider/ButtonSlider'

function Slider(props) {
  return ( 
  <div className = {s.wrapper}>
    <ButtonSlider
      buttonClass = {s.buttonLeft} 
      imgClass = {s.imgLeft} 
      src = {left} 
      alt = "Arrow left"
    />
    {props.sliderContent}
    <ButtonSlider
      buttonClass = {s.buttonRight} 
      imgClass = {s.imgRight} 
      src = {right} 
      alt = "Arrow right"
    />
  </div>
  );
}

export default Slider;
