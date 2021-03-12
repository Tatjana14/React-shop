

import './Sticker.module.scss';


function Sticker(props) {
    return (
        <span className="sticker" style={props.Sticker}>{props.saleValue}</span>
    );
}

export default Sticker;