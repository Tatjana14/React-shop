
import BreadCrumbs from '../../components/breadCrumbs/BreadCrumbs';
import Cards from '../../components/cards/Cards';
import CatalogHead from '../../components/catalogHead/CatalogHead';
import Checkbox from '../../components/checkbox/Checkbox';
import OptionMenu from '../../components/optionsMenu/OptionMenu';
import Radio from '../../components/radio/Radio';
import s from './Catalog.module.scss';




function Catalog() {
  return (
    <section className={s.Catalog}>
      <BreadCrumbs to='#' value='Главная'/>
      <CatalogHead title = 'Гидроциклы' btnValue1 = 'Полноприводные' btnValue2 = 'от 5000' btnValue3 = 'BRP' btnValue4 = 'Еще'/>
      <div className={s.catalogWrapper}>
        <div className={s.optionsWrap}>
          <div>
            <a href="">Параметры</a>
            <a href="">По марке</a>
          </div>
          <>
            <OptionMenu
            titleValue='Наличие'
            option = {
              <>
              <Checkbox checkName='В наличие'/>
              <Checkbox checkName='Под заказ'/>
              </>
            }
            />
            <OptionMenu
            titleValue='Доставка'
            option = {
              <>
              <Checkbox checkName='В наличие'/>
              <Checkbox checkName='Под заказ'/>
              </>
            }
            />
          </>
          </div>
          <Cards/>
        </div>
    </section>
  );
}

export default Catalog;
