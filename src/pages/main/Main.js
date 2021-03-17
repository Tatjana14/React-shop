
import s from './Main.module.scss'
import motor from '../../assets/img/sale/motor.svg'
import CategoriesCard from "../../components/categoriesCard/CategoriesCard";

import arrowLeft from '../../assets/img/common/slider_arrow_left.png';
import arrowRight from '../../assets/img/common/slider_arrow_right.png';
import bannerFirst  from '../../assets/img/common/slider_banner.svg';
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

import bag from '../../assets/img/products/popular/backpack.svg'
import audioSystemPremium from '../../assets/img/products/popular/audio_system_premium.svg'
import equipment from '../../assets/img/products/popular/equipment.svg'
import vest from '../../assets/img/products/popular/vest.svg'

import audioSystem from '../../assets/img/products/with_this_product/audio_system.svg'
import echomap from '../../assets/img/products/with_this_product/echomap.svg'
import key from '../../assets/img/products/with_this_product/key.svg'
import menSuit from '../../assets/img/products/with_this_product/men_suit.svg'


function Main() {
  return ( 
  <>
  <section className = {s.iformation}>
      <div className = {s.informationContainer}>
        <div className = {s.informationSlider}>
          <button className = {s.informationButtonLeft}>
            <img className = {s.imgLeft} src = {arrowLeft} alt = "Arrow left"/>
          </button>
          <div className = {s.images}>
            <img className={s.image} src = {bannerFirst} alt = "First banner"/>
          </div>
          <button className = {s.informationButtonRight}>
            <img className = {s.imgLeft} src = {arrowRight} alt = "Arrow right"/>
          </button>
          <div className = {s.indicatores}>
            <div className = {s.SliderIndicatorItem}></div>
            <div className = {s.SliderIndicatorItem} ></div>
            <div className = {s.SliderIndicatorItem}></div>
            <div className = {s.SliderIndicatorItem}></div>
            <div className = {s.SliderIndicatorItem}></div>
            <div className = {s.SliderIndicatorItem}></div>
          </div>
        </div>
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
      categoriesAdress2 = "#" 
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

    <section>
      <div>
      <SectionProducts nameSection = "Популярные товары"/>
      <Slider sliderContent ={
        <>
        <Card to 
        value = 'Sale'  
        src = {bag} 
        cardText = 'BRP Audio-портативная система' 
        Available = {{display: 'none'}}  />
        <Card to   
        src = {vest} 
        cardText = "Garmin Echomap Plus 62cv" 
        valuePrice = '45 800 ₽' 
        Sticker={{display: 'none'}}  
        NonAvailable={{display: 'none'}} />
        <Card to 
        value = 'Sale' 
        src = {key} 
        cardText = "RF D.E.S.S.TM Key"  
        Available = {{display: 'none'}} />
        <Card to  
        src = {menSuit} 
        cardText = "Мужской костюм 3мм" 
        valuePrice = '7 000 ₽' 
        Sticker={{display: 'none'}}  
        NonAvailable={{display: 'none'}} />
        </>
      } />
      <button>ПОКАЗАТЬ ЕЩЁ</button>
      </div>
    </section>
    <section className = {s.advertising}>
      <div className = {s.advertisingContainer}>
        <div className = {s.advertisingWrapper}>
          <div className = {s.advertisingImages}>
            <img className = {s.advertisingImg} src={moto} alt="Moto"/>
            <img className = {s.advertisingImg} src={quadrosale} alt="Quadro"/>
          </div>
          <div className = {s.advertisingTitleWrapper} >
            <p className = {s.advertisingTitle}>CКИДКИ</p>
            <p className = {s.advertisingTitle}>на все запчасти</p>
            <p className = {s.advertisingTitle}>до 70%</p>
          </div>
          <button className = {s.advertisingBtn}>ПОСМОТРЕТЬ ВСЕ</button>
        </div>
    </div>
    </section>
    <section>
      <div>
      <SectionProducts nameSection = "С этим товаром покупают"/>
      <Slider sliderContent ={
        <>
        <Card to  src = {audioSystem} cardText = 'Водонепроницаемый Рюкзак' valuePrice = '9 800 ₽'  Sticker={{display: 'none'}} NonAvailable={{display: 'none'}} />
        <Card to value = 'Sale'  src = {echomap} cardText = "Спасательный жилет BRP Men's Airflow PFD" valuePrice = '6 900 ₽'  NonAvailable={{display: 'none'}} />
        <Card to  src = {audioSystemPremium} cardText = "BRP Audio-Premium System" valuePrice = '68 000 ₽'  Sticker={{display: 'none'}}  NonAvailable={{display: 'none'}} />
        <Card to value = 'Sale'  src = {equipment} cardText = "Спасательное снаряжение" valuePrice = '68 000 ₽' Available = {{display: 'none'}} />
        </>
      } />
      
      </div>
    </section>
    </>
  );
}

export default Main;
