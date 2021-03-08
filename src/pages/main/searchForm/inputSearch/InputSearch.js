import s from './InputSearch.module.css';

function InputSearch(props) {
  return (
    <input className = {props.inputClass} type="text" placeholder = {props.placeholder} value = ""/>
    )
}

export default InputSearch;
