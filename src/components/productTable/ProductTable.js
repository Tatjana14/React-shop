import s from './ProductTable.module.scss';
import TableRow from './tableRow/TableRow';


function Table(props) {
    return (
        <table className={s.table}>
            <thead className={s.top}>
                <tr className={s.topRow}>
                    <th className={s.cell}>Адрес</th>
                    <th className={s.cell}>Режим работы</th>
                    <th className={s.cell}>Доступно</th>
                    <th className={s.cell}>Количество</th>
                </tr>
            </thead>

            <tbody className={s.body}>
                <TableRow
                    adressValue='Москва, ул. Науки 25'
                    weekdaysValue='пн-сб:'
                    weekDaysHoursValue='08:00-19:00'
                    weekendDaysValue='вс:'
                    weekendHoursValue='09:00-17:00'
                    availableValue='В наличии'
                    countValue='1'
                />

                <TableRow
                    adressValue='Москва, ул.  Южная 134'
                    weekdaysValue='пн-сб:'
                    weekDaysHoursValue='08:00-19:00'
                    weekendDaysValue='вс:'
                    weekendHoursValue='09:00-17:00'
                    availableValue='В наличии'
                    countValue='2'
                />

                <TableRow
                    adressValue='Санкт-Петербург, 
                    ул. Красная 19'
                    weekdaysValue='пн-сб:'
                    weekDaysHoursValue='08:00-19:00'
                    weekendDaysValue='вс:'
                    weekendHoursValue='09:00-17:00'
                    availableValue='Нет в наличии'
                    countValue='0'
                />

                <TableRow
                    adressValue='Киев, ул Шевченко 167'
                    weekdaysValue='пн-сб:'
                    weekDaysHoursValue='08:00-19:00'
                    weekendDaysValue='вс:'
                    weekendHoursValue='09:00-17:00'
                    availableValue='Нет в наличии'
                    countValue='0'
                />
            </tbody>

        </table>
    );
}

export default Table;