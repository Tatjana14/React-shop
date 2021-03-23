import SectionProducts from '../section/SectionProducts';
import Slider from '../slider/Slider';
import Card from '../card/Card';
import { SwiperSlide } from 'swiper/react';

import bag from '../../assets/img/products/popular/backpack.svg';
import vest from '../../assets/img/products/popular/vest.svg';
import key from '../../assets/img/products/with_this_product/key.svg';
import menSuit from '../../assets/img/products/with_this_product/men_suit.svg';

import s from './PopularProducts.module.scss'

function PopularProducts() {
    return ( 
    <>
    <div className = {s.popularWrapper}>
        <SectionProducts nameSection = "Популярные товары"/>
        <Slider sliderContent ={
        <>
        <SwiperSlide>
            <Card to 
            value = 'Sale'  
            src = {bag} 
            cardText = 'BRP Audio-портативная система' 
            Available = {{display: 'none'}}  />
        </SwiperSlide>
        <SwiperSlide>
            <Card to   
            src = {vest} 
            cardText = "Garmin Echomap Plus 62cv" 
            valuePrice = '45 800 ₽' 
            Sticker={{display: 'none'}}  
            NonAvailable={{display: 'none'}} />
        </SwiperSlide>
        <SwiperSlide>
            <Card to 
                value = 'Sale' 
                src = {key} 
                cardText = "RF D.E.S.S.TM Key"  
                Available = {{display: 'none'}} />
        </SwiperSlide>
        <SwiperSlide>
            <Card to  
                src = {menSuit} 
                cardText = "Мужской костюм 3мм" 
                valuePrice = '7 000 ₽' 
                Sticker={{display: 'none'}}  
                NonAvailable={{display: 'none'}} />
        </SwiperSlide>
        <SwiperSlide>
            <Card to  
                src = {menSuit} 
                cardText = "Мужской костюм 3мм" 
                valuePrice = '7 000 ₽' 
                Sticker={{display: 'none'}}  
                NonAvailable={{display: 'none'}} />
        </SwiperSlide>
        <SwiperSlide>
            <Card to  
                src = {menSuit} 
                cardText = "Мужской костюм 3мм" 
                valuePrice = '7 000 ₽' 
                Sticker={{display: 'none'}}  
                NonAvailable={{display: 'none'}} />
        </SwiperSlide>
        </>
        } />
        <div className = {s.popularBtnWrapper}>
        <button className = {s.popularBtn} >ПОКАЗАТЬ ЕЩЁ</button>
        </div>
    </div>
    </>
    );
}

export default PopularProducts;