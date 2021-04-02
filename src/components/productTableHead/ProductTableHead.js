import s from './ProductTableHead.module.scss';

function ProductTableHead() {
    return (
        <div className={s.tableHead}>
            <ul className={s.tableHead__list}>
                <li className={s.item}>Адрес</li>
                <li className={s.item}>Режим работы</li>
                <li className={s.item}>Доступно</li>
                <li className={s.item}>Количество</li>
            </ul>
        </div>

    );
}

export default ProductTableHead;
