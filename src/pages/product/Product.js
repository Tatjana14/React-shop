import './Product.css';
import NavMenu from './navMenu/NavMenu';
import ProductDescribtion from './productDescribtion/ProductDescribtion';
import ProductTableInfo from './productTableInfo/ProductTableInfo';


function Product() {
    return (
        <div className="Product">
            <NavMenu/>
            <div className="ProductDescription">
                    <ProductDescribtion />
                    <ProductTableInfo/>
            </div>
        </div>
    );
}

export default Product;