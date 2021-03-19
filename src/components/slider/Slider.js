import left from '../../assets/img/common/slider_arrow_left.svg'
import right from '../../assets/img/common/slider_arrow_right.svg'
import s from './Slider.module.scss';

function Slider(props) {
  return ( 
  <div className = {s.wrapperSlider}>
    <a className = {s.buttonLeft}>
      <img src={left} alt="Arrow left"/>
    </a>
    <div className = {s.sliderContent}>
      {props.sliderContent}
    </div>
    <a className = {s.buttonRight}><img src={right} alt="Arrow right"/> </a>
  </div>
  );
}

export default Slider;
