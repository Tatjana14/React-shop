import s from './ProductTableMobile.module.scss';

function ProductTableMobile(props) {
    return (
        <div className={s.mobileBox}>
        <div className={s.tableMobile}>
            <div className={s.mainCell}>
                <span className={s.mainText}>Адрес</span>
            </div>
            <div className={s.mainCell}>
                <span className={s.mainText}>Режим работы</span>
            </div>
            <div className={s.mainCell}>
                <span className={s.mainText}>Доступно</span>
            </div>
            <div className={s.mainCell}>
                <span className={s.mainText}>Количество</span>
            </div>
            <div className={s.mainCell}>
                <span className={s.valueText}>{props.adressText}</span>
            </div>
            <div className={s.mainCell}>
                <span className={s.valueText}>пн-сб:</span>
                <span className={s.valueText}>вс:</span>
            </div>
            <div className={s.mainCell}>
                <span className={s.valueText}>08:00-19:00</span>
                <span className={s.valueText}>09:00-17:00</span>
            </div>
            <div className={s.mainCell}>
                <span className={s.valueText}>{props.availableText}</span>
            </div>
            <div className={s.mainCell}>
                <span className={s.valueText}>{props.countText}</span>
            </div>
            <button className={s.btn}>КУПИТЬ</button>
        </div>
        <a href="" className={s.link}>Показать все магазины</a>
        </div>
    );
}

export default ProductTableMobile;