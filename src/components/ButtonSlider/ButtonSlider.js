
import s from './ButtonSlider.module.css';

function ButtonSlider(props) {
  return (
        <button className={props.buttonClass}>
          <img className={props.imgClass}  src = {props.src} alt = {props.alt}/>
        </button>
  );
}

export default ButtonSlider;
