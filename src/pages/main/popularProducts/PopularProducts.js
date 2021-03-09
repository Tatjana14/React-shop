import Section from '../../../components/section/Section';
import s from './PopularProducts.module.css';
import SliderPopular from './sliderPopular/SliderPopular'


function PopularProducts() {
  return (
    <div className = {s.wrapper}>
      <Section 
        nameSection = "Популярные товары" 
        content = {
          <SliderPopular />
        }
      />
    </div>
    )
}

export default PopularProducts;
