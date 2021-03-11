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

                <ProductTableRow adress="Москва" weekdayworkDaysValue="пн-сб:" weekdayworkHoursValue="08:00-19:00" weekendWorkDaysValue="вс:" weekendWorkHoursValue="09:00-17:00" avaiable="В наличии" count="222" />
            </table>
            
        </div>
    );
}

export default ProductTable;