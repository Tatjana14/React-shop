import './ProductTableInfoNav.css';

function ProductTableInfoNav() {
    return (
    <div className="productTableInfoNav">
        <nav className="productTableInfoNav__menu">
            <ul className="productTableInfoNav__list list">
                <li className="productTableInfoNav__item"><a href="" className="productTableInfoNav__link">О товаре</a></li>
                <li className="productTableInfoNav__item"><a href="" className="productTableInfoNav__link">Характеристики</a></li>
                <li className="productTableInfoNav__item"><a href="" className="productTableInfoNav__link">Отзывы</a></li>
                <li className="productTableInfoNav__item"><a href="" className="productTableInfoNav__link">Самовывоз</a></li>
                <li className="productTableInfoNav__item"><a href="" className="productTableInfoNav__link">Доставка</a></li>
                <li className="productTableInfoNav__item"><a href="" className="productTableInfoNav__link">Cервис</a></li>
                <li className="productTableInfoNav__item"><a href="" className="productTableInfoNav__link">Гарантия</a></li>
            </ul>
        </nav>
    
    </div>
    );
}

export default ProductTableInfoNav;