import Image from '../../../components/Image/Image'
import arrowLeft from '../../../assets/img/common/slider_arrow_left.svg';
import arrowRight from '../../../assets/img/common/slider_arrow_right.svg';
import './SliderBanner.css';
import bannerFirst  from '../../../assets/img/common/slider_banner.svg';

function SliderBanner() {
  return (
    <div className="SliderBanner">
        <button><Image src = {arrowLeft} alt = "Arrow left"/></button>
        <Image src = {bannerFirst} alt = "First banner"/>
        <button><Image src = {arrowRight} alt = "Arrow right"/></button>
        <div className = "SliderIndicator">
          <div className = "SliderIndicatorItem"></div>
        </div>
    </div>
  );
}

export default SliderBanner;
