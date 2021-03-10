import './ButtonStatistic.css';
import Statistic from '../../../../../assets/img/Product/raiting_icon.svg';



function ButtonStatistic(props) {
  return (
    <button className={props.btnStatistic}>
        <img className={props.imgClass}  src = {Statistic} alt = {props.alt}/>
    </button>
  );
}

export default ButtonStatistic;