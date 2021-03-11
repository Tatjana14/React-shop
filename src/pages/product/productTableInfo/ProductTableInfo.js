import './ProductTableInfo.css';
import ProductTableInfoNav from '../productTableInfo/productTableinfoNav/ProductTableInfoNav';
import ProductTable from './productTable/ProductTable';
import ProductTableInfoDelivery from './productTableInfoDelivery/ProductTableInfoDelivery';

function ProductTableInfo() {
    return (
    <div className="productTableInfo">
        <ProductTableInfoNav/>
        <ProductTableInfoDelivery/>
        <ProductTable/>
    
    </div>
    );
}

export default ProductTableInfo;