

import s from './Checkbox.module.scss';


function Checkbox(props) {
    return (
        <div className={s.wrapCheck}>
            <input type="checkbox" id='checkbox'/>
            <label for='check'>{props.checkName}</label>
        </div>        
    );
}

export default Checkbox;