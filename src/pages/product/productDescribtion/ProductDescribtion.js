import './ProductDescribtion.css';
// import Button from '../../../components/button/Button';
// import Image from '../../../components/image/Image';
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
