import './Catalog.css';
import Card from '../../components/card/Card';
import ProductItem1 from '../../assets/img/products/jet_sky/jet_ski_60hp.svg';
import ProductItem2 from '../../assets/img/products/jet_sky/jet_ski_155hp.svg';


function Catalog() {
  return (
    <section className="Catalog">
      <div className="Catalog-wrapper">
        <Card img={ProductItem1} alt="#" cardText="Гидроцикл BRP SeaDoo GTI 130hp SE Black\Mango" price="1 049 500 ₽"/>
        <Card img={ProductItem2} alt="#" cardText="Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic" price="1 100 475 ₽"/>
      </div>
    </section>
  );
}

export default Catalog;
