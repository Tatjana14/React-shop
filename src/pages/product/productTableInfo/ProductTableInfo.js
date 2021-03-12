import './ProductTableInfo.css';
import ProductTableInfoNav from '../productTableInfo/productTableinfoNav/ProductTableInfoNav';
import ProductTable from './productTable/ProductTable';

function ProductTableInfo() {
    return (
    <div className="productTableInfo">
        <ProductTableInfoNav/>
        <ProductTable/>
    
    </div>
    );
}

export default ProductTableInfo;