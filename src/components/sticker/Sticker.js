import './Sticker.css';


function Sticker(props) {
    return (
        <span className="sticker" style={props.Sticker}>{props.saleValue}</span>
    );
}

export default Sticker;