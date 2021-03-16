

import s from './Checkbox.module.scss';


function Checkbox(props) {
    return (
        <>
        <input type="checkbox" id='checkbox'/>
        <label for='check'>{props.checkName}</label>
        </>
    );
}

export default Checkbox;