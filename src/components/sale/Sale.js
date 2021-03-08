import './Sale.css';


function Sale(props) {
    return (
        <span className="sale">{props.saleName}</span>
    );
}

export default Sale;