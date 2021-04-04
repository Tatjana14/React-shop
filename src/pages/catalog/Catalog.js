
import BreadCrumbs from '../../components/breadCrumbs/BreadCrumbs';
import Cards from '../../components/cards/Cards';
import CatalogHead from '../../components/catalogHead/CatalogHead';
import Check from '../../components/check/Check';
import Checkbox from '../../components/checkbox/Checkbox';
import OptionMenu from '../../components/optionsMenu/OptionMenu';
import BasicPagination from '../../components/pagination/Pagination';
import PriceSelect from '../../components/priceSelect/PriceSelect';
import Radio from '../../components/radio/Radio';
import RadiioBtn from '../../components/radioBtn/RadioBtn';
import ViewMore from '../../components/viewMore/ViewMore';
import s from './Catalog.module.scss';




function Catalog() {
  return (
    <section className={s.catalog}>
      <BreadCrumbs to='#' value='Главная'/>
      <CatalogHead title = 'Гидроциклы' btnValue1 = 'Полноприводные' btnValue2 = 'от 5000' btnValue3 = 'BRP' btnValue4 = 'Еще'/>
      <div className={s.catalogWrapper}>
        <div className={s.optionsWrap}>
          <div className={s.leftBlock}>
          <div className={s.linkMenu}>
            <a className={s.linkMenuItem} href="">Параметры</a>
            <a className={s.linkMenuItem} href="">По марке</a>
          </div>
          <>
            <OptionMenu
            titleValue='Наличие'
            isexpanded='isexpanded'
            isexpanded='isexpanded'
            expand-btn='expandBtn'
            expandable='expandable'
            expandable='expandable'
            option = {
              <>
              <div className={s.checkWrap}>
              {/* <Checkbox checkName='В наличие'/>
              <Checkbox checkName='Под заказ'/> */}
              <Check value = 'В наличии'/>
              </div>
              </>
            }
            />
            <OptionMenu
            titleValue='Новинки'
            isexpanded='isexpandedRadio'
            isexpanded='isexpandedRadio'
            expand-btn='expandBtnRadio'
            expandable='expandableRadio'
            option = {
              <>
              <RadiioBtn name = 'All' value = ' Все'/>
              <RadiioBtn name = 'All' value = 'Новинки'/>
              <RadiioBtn name = 'All' value = 'Акции'/>
              </>
            }
            />
            <OptionMenu
            titleValue='Цена'
            isexpanded='isexpandedPrice'
            isexpanded='isexpandedPrice'
            expand-btn='expandBtnPrice'
            expandable='expandablePrice'
            option = {
              <>
              <PriceSelect/>
              <div className='rangeInner'>
                <label for="range">от 100000</label>
                <label for="range">от 500000</label>
              </div>
              </>
            }
            />
            <OptionMenu
            titleValue='Бренд'
            isexpanded='isexpandedBrand'
            isexpanded='isexpandedBrand'
            expand-btn='expandBtnBrand'
            expandable='expandableBrand'
            option = {
              <>
              <div className={s.checkWrap}>
              <Check value = 'BRP'/>
              <Check value = 'Spark 2'/>
              <Check value = 'Spark 3'/>
              </div>
              <ViewMore/>
              </>
            }
            />
            <OptionMenu
            titleValue='Модель'
            isexpanded='isexpandedModel'
            isexpanded='isexpandedModel'
            expand-btn='expandBtnModel'
            expandable='expandableModel'
            option = {
              <>
              {/* <input type="text"/> */}
              <div className={s.checkWrapModel}>
              <Check value = 'Sea-doo Spark 2'/>
              <Check value = 'SeaDoo Spark 90'/>
              <Check value = 'SeaDoo GTI 155'/>
              <Check value = 'SeaDoo GTR 230'/>
              </div>
              <ViewMore/>
              </>
            }
            />
            <OptionMenu
            titleValue='Акции'
            isexpanded='isexpandedPromo'
            isexpanded='isexpandedPromo'
            expand-btn='expandBtnPromo'
            expandable='expandablePromo'
            option = {
              <>
                <button className={s.btnSale}>SALE</button>
                <button className={s.btnNew}>NEW</button>
                <button className={s.btnHit}>HIT</button>
                <button className={s.btnDealer}>ДИЛЕР</button>
              </>
            }
            />
            <OptionMenu
            titleValue='Страны'
            isexpanded='isexpandedCountry'
            isexpanded='isexpandedCountry'
            expand-btn='expandBtnCountry'
            expandable='expandableCountry'
            option = {
              <>
              <div className={s.checkWrapCountry}>
              <Checkbox basis = {{background: 'green'}} checkName='Россия'/>
              <Check value = 'Германия'/>
              <Check value = 'Китай'/>
              <Check value = 'США'/>
              </div>
              <ViewMore/>
              </>
            }
            />
          </>
          <div className={s.menuBottom}>
            <button className={s.btnSelect}>Выбрать</button>
            <a href="#" className={s.extra}>Дополнительные параметры</a>
            <button className={s.btnFilter}>Сбросить фильтр</button>
          </div>
          </div>
          </div>
          <div className={s.rightBlockWrap}>
          <Cards/>
          <BasicPagination/>
          </div>
        </div>
    </section>
  );
}

export default Catalog;
