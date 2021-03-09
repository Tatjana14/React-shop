import Section from '../section/Section';
import s from './WidhThis.module.css';
import SliderWihtThis from './sliderWithThis/SliderWihtThis';


function WidhThis() {
  return (
    <div className = {s.wrapper}>
      <Section 
        nameSection = "С этим товаром покупают" 
        content = {
          <SliderWihtThis />
        }
      />
    </div>
    )
}

export default WidhThis;
