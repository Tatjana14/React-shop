import './ProductTable.css';
import ProductTableRow from './productTableRow/ProductTableRow';


function ProductTable() {
    return (
        <div className="ProductTable">
            <table className="ProductTable__table">
                <tr>
                    <th>Адрес</th>
                    <th>Режим работы</th>
                    <th>Доступно</th>
                    <th>Количество</th>
                </tr>

                <ProductTableRow adress="Москва" workHours="c 8 до 21" avaiable="В наличии" count="222" />
            </table>
            
        </div>
    );
}

export default ProductTable;