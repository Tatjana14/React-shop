
import Cards from '../../components/cards/Cards';
import './Catalog.module.scss';



function Catalog() {
  return (
    <section className="Catalog">
      <div className="Catalog-wrapper">
        <div>
          <div>
            <a href="">Параметры</a>
            <a href="">По марке</a>
          </div>
          <div className='menuInner'>
            <div className='meniAvailavle'>
              <h4>Наличие</h4>
              <div className='meniAvailavleInner'>
                <input type="checkbox" name="Availability"/>
                <label for="Availability">В наличие</label>
                <input type="checkbox" name ="Availability"/>
                <label for="Availability">Под заказ</label>
              </div>
            </div>
            <div className='menuNew'>
              <h4>Новинки</h4>
              <div className='menuNewInner'>
                <input type="checkbox" name="New"/>
                <label for="New">Все</label>
                <input type="checkbox" name="New"/>
                <label for="New">Новинки</label>
                <input type="checkbox" name="New"/>
                <label for="New">Акции</label>
              </div>
            </div>
            <div className="menuPrice">
              <h4>Цена</h4>
              <div className="priceInner">
                <input type="range" name="Price" min="100000" max="500000"/>
                <div className="labelInnerPrice">
                <label for="Price">от 100000</label>
                <label for="Price">от 500000</label>
                </div>
              </div>
            </div>
            
          </div>
        </div>
        <Cards/>
      </div>
    </section>
  );
}

export default Catalog;
