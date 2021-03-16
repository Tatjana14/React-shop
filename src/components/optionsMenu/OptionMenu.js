import arrowTop from '../../assets/img/common/shapeTop.svg';
import s from './OptionMenu.scss';


function OptionMenu(props) {
    return (
        <div id='wrapFlex' className={props.className}>
            <input type="checkbox" id="isexpanded" />
            <label className='labell' for="isexpanded">
                <img className='arrowTop' src={arrowTop} alt=""/>
                <span>{props.titleValue}</span>
            </label> 
            <div id='check'>
                {props.option}
            </div>
            
        </div>
    );
}

export default OptionMenu;