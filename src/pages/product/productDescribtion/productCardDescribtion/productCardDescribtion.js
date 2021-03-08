import './productCardDescribtion.css';
import Button from '../../../../components/button/Button';
import Image from '../../../../components/Image/Image';
import Link from '../../../../components/link/Link';
import HydroCicleBlueMetallic from '../../../../assets/img/Product/gidrotsikl-beach-blue-metallic.svg'


function ProductCardDescribtion() {
    return (
      <div className="ProductCardDescribtion">
      <Button/>
      <Image src={HydroCicleBlueMetallic} />
      <span>1 200 475 ₽</span>
      <span>1 100 475 ₽</span>
      <Link linkValue='Нашли дешевле? Снизим цену!'/>
      </div>
  
  
    );
  }
  
  export default ProductCardDescribtion;