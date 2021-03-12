import left from '../../assets/img/common/slider_arrow_left.svg'
import right from '../../assets/img/common/slider_arrow_right.svg'
import s from './Slider.module.scss';

function Slider(props) {
  return ( 
  <div className = {s.wrapper}>
    <button className = {s.buttonLeft}>
      <img src={left} alt="Arrow left"/>
    </button>
    {props.sliderContent}
    <button className = {s.buttonRight}><img src={right} alt="Arrow right"/> </button>
  </div>
  );
}

export default Slider;
