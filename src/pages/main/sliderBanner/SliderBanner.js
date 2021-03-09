
import arrowLeft from '../../../assets/img/common/slider_arrow_left.svg';
import arrowRight from '../../../assets/img/common/slider_arrow_right.svg';
import s from './SliderBanner.module.css';
import bannerFirst  from '../../../assets/img/common/slider_banner.svg';
import ButtonSlider from '../../../components/buttonSlider/ButtonSlider'

function SliderBanner() {
  return (
    <div className = {s.container}>
      <div className = {s.wrapper}>
        <ButtonSlider buttonClass = {s.buttonLeft} imgClass = {s.imgLeft} src = {arrowLeft} alt = "Arrow left"/>
        <div className = {s.images}>
          <img className={s.image} src = {bannerFirst} alt = "First banner"/>
        </div>
        <ButtonSlider buttonClass = {s.buttonRight} imgClass = {s.imgRight} src = {arrowRight} alt = "Arrow right"/>
        <div className = {s.indicatores}>
          <div className = "SliderIndicatorItem"></div>
          <div className = "SliderIndicatorItem"></div>
          <div className = "SliderIndicatorItem"></div>
          <div className = "SliderIndicatorItem"></div>
          <div className = "SliderIndicatorItem"></div>
          <div className = "SliderIndicatorItem"></div>
        </div>
      </div>
    </div>
  );
}

export default SliderBanner;
