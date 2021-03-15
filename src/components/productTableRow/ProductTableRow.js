import s from './ProductTableRow.module.scss';

function ProductTableInfoRow(props) {
    return (
        <tr className={s.tableRow}>
            <td className={s.cellAdress}>{props.adress}</td>
            <td className={s.cellWorkHours}>
                <div className={s.weekdaysWorkHours}>
                    <span className={s.weekdayworkDays}>{props.weekdayworkDaysValue}</span>
                    <span className={s.weekdayworkHours}>{props.weekdayworkHoursValue}</span>
                </div>

                <div className={s.weekendWorkHours}>
                    <span className={s.weekendWorkDays}>{props.weekendWorkDaysValue}</span>
                    <span className={s.weekendWorkHours}>{props.weekendWorkHoursValue}</span>
                </div>
            </td>
            <td className={s.cellAvailability}>{props.avaiable}</td>
            <td className={s.cellCount}>{props.count}</td>
            <td><button className={s.btn}>Купить</button></td>
        </tr>
    );
}

export default ProductTableInfoRow;