import './ProductTableInfoDelivery.css';

function ProductTableInfoDelivery() {
    return (
        <div className="productTableInfoDelivery">
            <div className="productTableInfoDelivery__input-search">
                <label for="search">Магазин</label>
                <input type="text" name="search" />
            </div>
            <div className="productTableInfoDelivery__inputRadio">
                <div className="productTableInfoDelivery__radio-today">
                    <input type="radio" name="today" />
                    <label for="today">Забрать сегодня</label>
                </div>
                <div className="productTableInfoDelivery__radio-later">
                    <input type="radio" name="later" checked/>
                    <label for="later">Забрать в течение недели</label>
                </div>
            </div>
        </div>
    );
}

export default ProductTableInfoDelivery;