import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import bannerFirst from '../../assets/img/common/slider_banner.svg';
import './SliderBanner.scss';

SwiperCore.use([Navigation, Pagination]);

function SliderBanner(props) {
    return (
    <Swiper
        navigation
        pagination={{ clickable: true }}
    >
    <SwiperSlide><img className = "imageSlider" src = {bannerFirst} alt = "First banner"/></SwiperSlide>
    <SwiperSlide><img className = "imageSlider" src = {bannerFirst} alt = "First banner"/></SwiperSlide>
    <SwiperSlide><img className = "imageSlider" src = {bannerFirst} alt = "First banner"/></SwiperSlide>
    <SwiperSlide><img className = "imageSlider" src = {bannerFirst} alt = "First banner"/></SwiperSlide>
    <SwiperSlide><img className = "imageSlider" src = {bannerFirst} alt = "First banner"/></SwiperSlide>
    </Swiper>
    );
}

export default SliderBanner;