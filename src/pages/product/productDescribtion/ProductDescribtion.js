import './ProductDescribtion.css';
import ProductCardDescribtion from './productCardDescribtion/productCardDescribtion';
import ProductInfoDescribtion from './productInfoDescribtion/ProductInfoDescribtion';

function ProductDescribtion() {
  return (
    <div className="ProductDescribtion">
      <ProductCardDescribtion/>
      <ProductInfoDescribtion/>
    </div>


  );
}

export default ProductDescribtion;
