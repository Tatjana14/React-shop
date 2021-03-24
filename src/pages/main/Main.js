
import s from './Main.module.scss'
import motor from '../../assets/img/sale/motor.svg'
import CategoriesCard from "../../components/categoriesCard/CategoriesCard";

import SectionProducts from '../../components/section/SectionProducts';
import Slider from '../../components/slider/Slider';
import quadro from '../../assets/img/catalog_section/quadro.svg'
import hydro  from '../../assets/img/catalog_section/hydro.svg'
import boat  from '../../assets/img/catalog_section/boat.svg'
import snow  from '../../assets/img/catalog_section/snow.svg'
import allTerain  from '../../assets/img/catalog_section/all_terrain_vehicle.svg'
import engine  from '../../assets/img/catalog_section/engine.svg'

import moto  from '../../assets/img/main/advertising/moto.svg'
import quadrosale  from '../../assets/img/main/advertising/quadro.svg'
import Card from '../../components/card/Card';

import audioSystemPremium from '../../assets/img/products/popular/audio_system_premium.svg'
import equipment from '../../assets/img/products/popular/equipment.svg'

import audioSystem from '../../assets/img/products/with_this_product/audio_system.svg'
import echomap from '../../assets/img/products/with_this_product/echomap.svg'



import SliderBanner from '../../components/sliderBanner/SliderBanner';

import PopularProducts from '../../components/popularProducts/PopularProducts';

import { SwiperSlide } from 'swiper/react';

function Main() {
  return ( 
  <>
  <div className = {s.main}>
  <section className = {s.iformation}>
      <div className = {s.informationContainer}>
        <SliderBanner />
        <div className = {s.informationCard}>
          <a className = {s.linkSale} href="#">АКЦИЯ</a>
          <span className = {s.priceNow} >190 000 ₽</span>
          <span className = {s.priceOld}>225 000 ₽</span>
          <img className = {s.imgCard} src = {motor} alt="Motor"/>
          <div className = {s.titleWrapper}>
            <p className = {s.titleProduct}>Лодочный мотор Suzuki DF9.9BRS</p>
          </div>
          <div className = {s.wrapperSubtitle}>
            <p className = {s.subtitle}>Акция действует до</p>
            <span className = {s.date}>31.08.2020</span>
          </div>
        </div>        
      </div>
    </section>
    
    <section className = {s.search}>
      <div className = {s.wrapperSearch} > 
        <div className = {s.menuSearch}>
          <ul className = {s.menuList}>
            <li className = {s.menuListItem}>
              <a className = {s.searchLink} href="#">Поиск по номеру</a>
            </li>
            <li className = {s.menuListItem}>
              <a className = {s.searchLink} href="#">Поиск по марке</a>
            </li>
            <li className = {s.menuListItem}>
              <a className = {s.searchLink} href="#">Поиск по названию товара</a>
            </li>
          </ul>
          </div>
        <div className = {s.inputForm}>
          <div className = {s.inputWrapper}>
            <input className = {s.inputSearch} type="text" placeholder =  "Введите марку" />
          </div>
          <button className = {s.buttonSearch}>ИСКАТЬ</button>
        </div>
      </div>
    </section>

    <section className = {s.categories}>
      <div className = {s.categoriesWrapper}>
      <CategoriesCard 
      categoriesAdress = "#" 
      categoriesValue = "Квадроциклы" 
      categoriesAdress2 = "#" 
      imgCategories ={quadro} 
      altCategories = "Квадроциклы"
      style = {{ paddingRight: "10.3%"}}
      />
      <CategoriesCard 
      categoriesAdress = "#" 
      categoriesValue = "Гидроциклы" 
      categoriesAdress2 = "/hydroCatalog" 
      imgCategories ={hydro} 
      altCategories = "Гидроциклы"
      style = {{ paddingRight: "6.8%"}}
      />
      <CategoriesCard 
      categoriesAdress = "#" 
      categoriesValue = "Катера" 
      categoriesAdress2 = "#" 
      imgCategories ={boat} 
      altCategories = "Катера"
      style = {{ paddingRight: "1.6%"}} 
      />
      <CategoriesCard 
      categoriesAdress = "#" 
      categoriesValue = "Снегоходы" 
      categoriesAdress2 = "#" 
      imgCategories ={snow} 
      altCategories = "Снегоходы"
      style = {{ paddingRight: "5.4%"}} 
      />
      <CategoriesCard 
      categoriesAdress = "#" 
      categoriesValue = "Вездеходы" 
      categoriesAdress2 = "#" 
      imgCategories ={allTerain} 
      altCategories = "Вездеходы"
      style = {{ paddingRight: "6.2%"}} 
      />
      <CategoriesCard 
      categoriesAdress = "#" 
      categoriesValue = "Двигатели" 
      categoriesAdress2 = "#" 
      imgCategories ={engine} 
      altCategories = "Двигатели"
      style = {{ paddingRight: "20.8%"}}
      />
      </div>
    </section>
    <section className = {s.popular}>
      <PopularProducts />
    </section>
    <section className = {s.advertising}>
      <div className = {s.advertisingContainer}>
        <div className = {s.advertisingWrapper}>
          <div className = {s.advertisingImages}>
            <img className = {s.imgQuadro} src={moto} alt="Moto"/>
            <img className = {s.imgAll} src={quadrosale} alt="Quadro"/>
          </div>
          <div className = {s.advertisingTitleWrapper} >
            <p className = {s.advertisingTitle}>CКИДКИ на все запчасти до 70%</p>
          </div>
          <button className = {s.advertisingBtn}>ПОСМОТРЕТЬ ВСЕ</button>
        </div>
    </div>
    </section>
    <section>
      <div className = {s.withThisWrapper}>
      <SectionProducts nameSection = "С этим товаром покупают"/>
      <Slider sliderContent ={
        <>
        <SwiperSlide>
          <Card 
          idCard='idCard' 
          src = {audioSystem} 
          cardText = 'Водонепроницаемый Рюкзак' 
          valuePrice = '9 800 ₽'  
          Sticker={{display: 'none'}} 
          NonAvailable={{display: 'none'}} />
        </SwiperSlide>
        <SwiperSlide>
          <Card
          value = 'Sale'  
          src = {echomap} 
          cardText = "Спасательный жилет BRP Men's Airflow PFD" 
          valuePrice = '6 900 ₽'  
          NonAvailable={{display: 'none'}} />
        </SwiperSlide>
        <SwiperSlide>
          <Card 
          src = {audioSystemPremium} 
          cardText = "BRP Audio-Premium System" 
          valuePrice = '68 000 ₽'  
          Sticker={{display: 'none'}}  
          NonAvailable={{display: 'none'}} />
        </SwiperSlide>
        <SwiperSlide>
          <Card 
          value = 'Sale'  
          src = {equipment} 
          cardText = "Спасательное снаряжение" 
          valuePrice = '68 000 ₽' 
          Available = {{display: 'none'}} 
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card 
          value = 'Sale'  
          src = {equipment} 
          cardText = "Спасательное снаряжение" 
          valuePrice = '68 000 ₽' 
          Available = {{display: 'none'}} 
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card 
          value = 'Sale'  
          src = {equipment} 
          cardText = "Спасательное снаряжение" 
          valuePrice = '68 000 ₽' 
          Available = {{display: 'none'}} 
          />
        </SwiperSlide>
        </>
      } 
      />
      </div>
    </section>
    </div>
    </>
  );
}

export default Main;
