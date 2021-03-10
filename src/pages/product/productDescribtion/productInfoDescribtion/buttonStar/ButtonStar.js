import './ButtonStar.css';
import StarEmpty from '../../../../../assets/img/Product/Star_empty.svg';


function ButtonStar(props) {
  return (
    <button className={props.btnStar}>
        <img className={props.imgClass}  src = {StarEmpty} alt = {props.alt}/>
    </button>
  );
}

export default ButtonStar;