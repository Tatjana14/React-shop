import './Sale.css';


function Sale(props) {
    return (
        <span className="sale">{props.saleValue}</span>
    );
}

export default Sale;