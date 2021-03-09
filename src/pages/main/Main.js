import SliderBanner from "./sliderBanner/SliderBanner";
import './Main.module.css'
import CardDiscount from "./cardDiscount/CardDiscount";
import motor from '../../assets/img/sale/motor.svg'
import SearchForm from "./searchForm/SearchForm";
import Categories from "./categories/Categories";
import PopularProducts from "./popularProducts/PopularProducts";
import Advertising from "./advertising/Advertising";

function Main() {
  return ( <div>
    <SliderBanner />
    <CardDiscount 
      newPrice = "190 000" 
      oldPrice = "225 000" 
      scr = {motor} 
      alt = "Motor" 
      nameProduct = "Лодочный мотор" 
      date = "31.08.2020"
    />
    <SearchForm />
    <Categories />
    <PopularProducts />
    <Advertising />
  </div>
  );
}

export default Main;
