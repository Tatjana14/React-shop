
import Image from '../../../components/image/Image';
import s from './Advertising.module.css';
import quadro from '../../../assets/img/main/advertising/quadro.svg'
import moto from '../../../assets/img/main/advertising/moto.svg'
import Button from '../../../components/button/Button';

function Advertising(props) {
  return ( 
    <div className = {s.container}>
      <div className = {s.wrapper}>
        <div className = {s.images}>
          <Image 
            className = {s.img}
            src = {moto}
            alt = {"Moto"}
            />
          <Image 
            className = {s.img}
            src = {quadro}
            alt = {"Quadro"}
            />
        </div>
        <div className = {s.title}>
          <h3>CКИДКИ на все запчасти до 70%</h3>
        </div>
        <Button className = {s.btn} btnName = "ПОСМОТРЕТЬ ВСЕ"/>
      </div>
    </div>   
    )
}

export default Advertising;
