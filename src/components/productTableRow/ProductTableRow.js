import s from './ProductTableRow.module.scss';

function ProductTableInfoRow(props) {
    return (
        <tr className={s.tableRow}>
            <td className={s.cell}>{props.adress}</td>
            <td className={s.workHours}>
                <div className="weekdaysWorkHours">
                    <span className="weekdayworkDays">{props.weekdayworkDaysValue}</span>
                    <span className="weekdayworkHours">{props.weekdayworkHoursValue}</span>
                </div>

                <div className="weekendWorkHours">
                    <span className="weekendWorkHours">{props.weekendWorkDaysValue}</span>
                    <span className="weekendWorkHours">{props.weekendWorkHoursValue}</span>
                </div>
            </td>
            <td>{props.avaiable}</td>
            <td>{props.count}</td>
            <td><button className={s.btn}>Купить</button></td>
        </tr>
    );
}

export default ProductTableInfoRow;