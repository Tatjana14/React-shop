import './productCardDescribtion.css';
import Button from '../../../../components/button/Button';
import Image from '../../../../components/image/Image';
import Link from '../../../../components/link/Link';
import HydroCicleBlueMetallic from '../../../../assets/img/Product/gidrotsikl-beach-blue-metallic.svg'
import Sticker from '../../../../components/sticker/Sticker';


function ProductCardDescribtion(props) {
  return (
    <div className="ProductCardDescribtion">
      <div className="Card1">
      <Sticker saleValue="SALE"/>
      <img src={HydroCicleBlueMetallic} alt=""/>
      </div>
      <span>1 200 475 ₽</span>
      <span>1 100 475 ₽</span>
      <a href="" className="ProductCardDescribtion__link">Нашли дешевле? Снизим цену!</a>
    </div>


  );
}

export default ProductCardDescribtion;