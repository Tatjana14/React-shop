

import s from './Radio.module.scss';


function Radio(props) {
    return (
        <div className={s.wrapRadio}>
            <input type="radio" id='radio'/>
            <label for='radio'>{props.radioName}</label>
        </div>        
    );
}

export default Radio;