
import s from './Main.module.css'
import motor from '../../assets/img/sale/motor.svg'
import CategoriesCard from "../../components/categoriesCard/CategoriesCard";

import arrowLeft from '../../assets/img/common/slider_arrow_left.svg';
import arrowRight from '../../assets/img/common/slider_arrow_right.svg';
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

function Main() {
  return ( 
  <>
  <section className = {s.iformation}>
      <div className = {s.informationContainer}>
        <div className = {s.informationWrapper}>
          <button buttonClass = {s.informationButtonLeft}>
            <img className = {s.imgLeft} src = {arrowLeft} alt = "Arrow left"/>
          </button>
          <div className = {s.images}>
            <img className={s.image} src = {bannerFirst} alt = "First banner"/>
          </div>
          <button buttonClass = {s.informationButtonRight}>
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
          <div className = {s.informationSale}>
            <a className = {s.link} href="#">АКЦИЯ</a>
            <span className = {s.priceNow} >190 000 ₽</span>
            <span className = {s.priceOld}>225 000 ₽</span>
            <div className = {s.content}>
              <img className = {s.img} src = {motor} alt="Motor"/>
              <p className = {s.titleProduct}>Лодочный мотор Suzuki DF9.9BRS</p>
            </div>
            <div cclassName = {s.wrapperSubtitle}>
              <p className = {s.subtitle}>Акция действует до</p>
              <span className = {s.date}>31.08.2020</span>
            </div>
          </div>        
        </div>
      </div>
    </section>
    
    <section className = {s.search}>
      <div className = {s.wrapperSearch} > 
        <div className = {s.menuSearch}>
          <ul className = {s.menuList}>
            <li>
              <a href="">Поиск по номеру</a>
            </li>
            <li>
              <a href="">Поиск по марке</a>
            </li>
            <li>
              <a href="">Поиск по названию товара</a>
            </li>
            <div className = {s.inputForm}>
              <input className = {s.inputSearch} type="text" placeholder =  "Введите марку" />
              <button className = {s.button}>Искать</button>
            </div>
          </ul>
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
      />
      <CategoriesCard 
      categoriesAdress = "#" 
      categoriesValue = "Гидроциклы" 
      categoriesAdress2 = "#" 
      imgCategories ={hydro} 
      altCategories = "Гидроциклы" 
      />
      <CategoriesCard 
      categoriesAdress = "#" 
      categoriesValue = "Катера" 
      categoriesAdress2 = "#" 
      imgCategories ={boat} 
      altCategories = "Катера" 
      />
      <CategoriesCard 
      categoriesAdress = "#" 
      categoriesValue = "Снегоходы" 
      categoriesAdress2 = "#" 
      imgCategories ={snow} 
      altCategories = "Снегоходы" 
      />
      <CategoriesCard 
      categoriesAdress = "#" 
      categoriesValue = "Вездеходы" 
      categoriesAdress2 = "#" 
      imgCategories ={allTerain} 
      altCategories = "Вездеходы" 
      />
      <CategoriesCard 
      categoriesAdress = "#" 
      categoriesValue = "Двигатели" 
      categoriesAdress2 = "#" 
      imgCategories ={engine} 
      altCategories = "Двигатели" 
      />
      </div>
    </section>

    <section>
      <div>
      <SectionProducts nameSection = "Популярные товары"/>
      <Slider sliderContent ={"#"} />
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
            <h3 className = {s.advertisingTitle}>CКИДКИ на все запчасти до 70%</h3>
            <button className = {s.advertisingBtn}>ПОСМОТРЕТЬ ВСЕ</button>
        </div>
    </div>
    </section>
    <section>
      <div>
      <SectionProducts nameSection = "С этим товаром покупают"/>
      <Slider sliderContent ={"#"} />
      </div>
    </section>
    </>
  );
}

export default Main;
