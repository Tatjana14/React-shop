
import Cards from '../../components/cards/Cards';
import CatalogHead from '../../components/catalogHead/CatalogHead';
import s from './Catalog.module.scss';



function Catalog() {
  return (
    <section className={s.Catalog}>
      <CatalogHead title = 'Гидроциклы' btnValue1 = 'Полноприводные' btnValue2 = 'от 5000' btnValue3 = 'BRP' btnValue4 = 'Еще'/>
      <div className={s.catalogWrapper}>
        <div>
          <div>
            <a href="">Параметры</a>
            <a href="">По марке</a>
          </div>
          <div className={s.menuInner}>
            <div className={s.meniAvailavle}>
              <h4>Наличие</h4>
              <div className={s.meniAvailavleInner}>
                <input type="checkbox" name="Availability" />
                <label for="Availability">В наличие</label>
                <input type="checkbox" name="Availability" />
                <label for="Availability">Под заказ</label>
              </div>
            </div>
            <div className={s.menuNew}>
              <h4>Новинки</h4>
              <div className={s.menuNewInner}>
                <input type="checkbox" name="New" />
                <label for="New">Все</label>
                <input type="checkbox" name="New" />
                <label for="New">Новинки</label>
                <input type="checkbox" name="New" />
                <label for="New">Акции</label>
              </div>
            </div>
            <div className={s.menuPrice}>
              <h4>Цена</h4>
              <div className={s.priceInner}>
                <input type="range" name="Price" min="100000" max="500000" />
                <div className={s.labelInnerPrice}>
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
