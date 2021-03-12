import './ProductTableInfoDelivery.css';

function ProductTableInfoDelivery() {
    return (
        <div className="productTableInfoDelivery">
            <div className="productTableInfoDelivery__input-search">
                <label for="search">Магазин</label>
                <input type="text" name="search" />
            </div>
            <div className="productTableInfoDelivery__checkboxes">
                <div className="productTableInfoDelivery__checkbox-today">
                    <input type="checkbox" name="today" />
                    <label for="today">Забрать сегодня</label>
                </div>
                <div className="productTableInfoDelivery__checkbox-later">
                    <input type="checkbox" name="later" />
                    <label for="later">Забрать в течение недели</label>
                </div>
            </div>
        </div>
    );
}

export default ProductTableInfoDelivery;