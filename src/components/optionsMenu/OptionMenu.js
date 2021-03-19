import arrowTop from '../../assets/img/common/shapeTop.svg';
import s from './OptionMenu.scss';


function OptionMenu(props) {
    return (
        <div id='wrapFlex' className={props.className}>
            <input type="checkbox" className='rotate' id={props.isexpanded}/>
            <label className='rotating' for={props.isexpanded} id={props.expandBtn}>
                <img className='arrowTop' src={arrowTop} alt=""/>
                {props.titleValue}
            </label> 
            <div id={props.expandable} className={props.boxOption}>
                {props.option}
            </div>
        </div>
    );
}

export default OptionMenu;