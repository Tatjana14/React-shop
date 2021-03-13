

import s from './Sticker.module.scss';


function Sticker(props) {
    return (
        <span className={props.className} style={props.Sticker}>{props.saleValue}</span>
    );
}

export default Sticker;