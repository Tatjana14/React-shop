import './ProductTableRow.css';

function ProductTableInfoRow(props) {
    return (
        <tr className="productTableInfoRow">
            <td>{props.adress}</td>
            <td>{props.workHours}</td>
            <td>{props.avaiable}</td>
            <td>{props.count}</td>
            <td><button>Купить</button></td>
        </tr>
    );
}

export default ProductTableInfoRow;