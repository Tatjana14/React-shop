import Section from '../section/Section';
import s from './WidhThis.module.css';
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
