import s from './ProductTableHead.module.scss';

function ProductTableHead() {
    return (
        <thead className={s.tableHead}>
            <tr className={s.headRow}>
                <th className={s.headCell}>Адрес</th>
                <th className={s.headCell}>Режим работы</th>
                <th className={s.headCell}>Доступно</th>
                <th className={s.headCell}>Количество</th>
            </tr>
        </thead>

    );
}

export default ProductTableHead;
