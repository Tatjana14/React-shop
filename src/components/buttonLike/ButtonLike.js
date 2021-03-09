
import './ButtonLike.css'; 

function ButtonLike(props) {
  return (
        <button className={props.buttonClass}>
          <img className={props.imgClass}  src = {props.src} alt = {props.alt}/>
        </button>
  );
}

export default ButtonLike;
