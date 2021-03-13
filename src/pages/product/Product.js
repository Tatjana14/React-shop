import './Product.module.scss';
import ProductDescribtion from '../../components/productDescribtion/ProductDescribtion';
import ProductTableInfo from '../../components/productTableInfo/ProductTableInfo';


function Product() {
    return (
        <div className="Product">
            <div className="ProductDescription">
                    <ProductDescribtion />
                    <ProductTableInfo/>
            </div>
        </div>
    );
}

export default Product;