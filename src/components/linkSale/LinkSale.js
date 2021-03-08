
import s from './LinkSale.module.css';

function LinkSale(props) {
  return (
      <a className = {props.className} href = {props.to}>{props.value}</a>
    )
}

export default LinkSale;
