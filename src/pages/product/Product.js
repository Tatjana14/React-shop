import './Product.css';
import NavMenu from './navMenu/NavMenu';
import ProductDescribtion from './productDescribtion/ProductDescribtion';


function Product() {
    return (
        <div className="Product">
            <NavMenu/>
            <div className="ProductDescription">
                <div className="ProductDescription__card">
                    <ProductDescribtion />
                </div>
            </div>
        </div>
    );
}

export default Product;