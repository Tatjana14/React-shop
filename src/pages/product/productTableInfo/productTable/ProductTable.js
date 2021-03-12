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

                <ProductTableRow adress="Москва, ул. Науки 25" weekdayworkDaysValue="пн-сб:" weekdayworkHoursValue="08:00-19:00" weekendWorkDaysValue="вс:" weekendWorkHoursValue="09:00-17:00" avaiable="В наличии" count="1" />
                <ProductTableRow adress="Москва, ул. Южная 134" weekdayworkDaysValue="пн-сб:" weekdayworkHoursValue="08:00-19:00" weekendWorkDaysValue="вс:" weekendWorkHoursValue="09:00-17:00" avaiable="В наличии" count="2" />
                <ProductTableRow adress="Санкт-Петербург, ул. Красная 19" weekdayworkDaysValue="пн-сб:" weekdayworkHoursValue="08:00-19:00" weekendWorkDaysValue="вс:" weekendWorkHoursValue="09:00-17:00" avaiable="Нет в наличии" count="0" />
                <ProductTableRow adress="Киев, ул Шевченко 167" weekdayworkDaysValue="пн-сб:" weekdayworkHoursValue="08:00-19:00" weekendWorkDaysValue="вс:" weekendWorkHoursValue="09:00-17:00" avaiable="Нет в наличии" count="0" />
            </table>
            
        </div>
    );
}

export default ProductTable;