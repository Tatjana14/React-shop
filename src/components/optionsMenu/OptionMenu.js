import arrowTop from '../../assets/img/common/shapeTop.svg';
import s from './OptionMenu.scss';


function OptionMenu(props) {
    return (
        <div id='wrapFlex' className={props.className}>
            <input type="checkbox" id="isexpanded" />
            <label className='lab' for="isexpanded" id='expand-btn'>
                <img className='arrowTop' src={arrowTop} alt=""/>
                {props.titleValue}
            </label> 
            <div id='expandable' className={props.boxOption}>
                {props.option}
            </div>
        </div>
    );
}

export default OptionMenu;