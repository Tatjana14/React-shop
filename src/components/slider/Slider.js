import './Slider.scss';
import { Swiper} from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
SwiperCore.use([Navigation, Pagination]);


function Slider(props) {
  return (
    <div className = "wrapperSlider">
      <Swiper
        slidesPerView = {1}
        navigation
        pagination={
          { clickable: true,
          dynamicMainBullets: 2}}
        breakpoints={{
          1400: {
          slidesPerView: 4,
          spaceBetween: 28, 
          },
          990: {
          slidesPerView: 3,
          spaceBetween: 20, 
          },
          650: {
            slidesPerView: 2,
            spaceBetween: 10, 
            },
        }}
      >
      <div className = "sliderContent">
        {props.sliderContent}
      </div>
      </Swiper>
    </div>
  );
}

export default Slider;
