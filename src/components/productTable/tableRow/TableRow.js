import s from './tableRow.module.scss';

function TableRow(props) {
    return (
        <tr className={s.bodyRow}>
            <td className={s.bodyCell}> {props.adressValue} </td>
            <td className={s.bodyCell}>
                <div className={s.workHoursCell}>
                    <div className={s.workHoursWeekdays}>
                        <span className={s.weekdays}>{props.weekdaysValue}</span>
                        <span className={s.weekDaysHours}>{props.weekDaysHoursValue}</span>
                    </div>
                    <div className={s.weekend}>
                        <span className={s.weekendDays}>{props.weekendDaysValue}</span>
                        <span className={s.weekendHours}>{props.weekendHoursValue}</span>
                    </div>
                </div></td>
            <td className={s.bodyCell}>{props.availableValue}</td>
            <td className={s.bodyCell}>{props.countValue}</td>
            <td className={s.bodyCell}><button className={s.button}>КУПИТЬ</button></td>
        </tr>
    );
}

export default TableRow;