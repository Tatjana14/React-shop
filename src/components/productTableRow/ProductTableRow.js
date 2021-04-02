import s from './ProductTableRow.module.scss';

function ProductTableInfoRow(props) {
    return (
        <div className={s.tableRow}>
            <ul className={s.tableRow__list}>
                <li className={s.adress}>{props.adressValue}</li>
                <li className={s.workHours}>
                    <div className={s.workHoursCell}>
                        <div className={s.workHoursWeekdays}>
                            <span className={s.weekdays}>{props.weekdaysValue}</span>
                            <span className={s.weekDaysHours}>{props.weekDaysHoursValue}</span>
                        </div>
                        <div className={s.weekend}>
                            <span className={s.weekendDays}>{props.weekendDaysValue}</span>
                            <span className={s.weekendHours}>{props.weekendHoursValue}</span>
                        </div>
                    </div>
                </li>
                <li className={s.available}>{props.availableValue}</li>
                <li className={s.count}>{props.countValue}</li>
                <li className={s.btnCell}><button className = {s.btn}>КУПИТЬ</button></li>
            </ul>
        </div>

    );

}

export default ProductTableInfoRow;