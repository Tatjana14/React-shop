import './Product.css';
import NavMenu from './navMenu/NavMenu';
import ProductDescribtion from './productDescribtion/ProductDescribtion';
import ProductTableInfo from './productTableInfo/ProductTableInfo';


function Product() {
    return (
        <div className="Product">
            <NavMenu/>
            <div className="ProductDescription">
                <div className="ProductDescription__card">
                    <ProductDescribtion />
                    <ProductTableInfo/>
                </div>
            </div>
        </div>
    );
}

export default Product;