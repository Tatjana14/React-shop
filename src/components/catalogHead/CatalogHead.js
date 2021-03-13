
import s from './CatalogHead.module.scss';
import View from '../../assets/img/catalog_section/View.svg';
import List from '../../assets/img/catalog_section/List.svg';



function CatalogHead(props) {
    return (
        <div className={s.catalogHead}>
            <h2 className={s.catalogHeadTitle}>{props.title}</h2>
            <div className={s.catalogHeadWrap}>
                <div className={s.catalogHeadButtons}>
                    <button className={s.catalogHeadBtn}>{props.btnValue1}</button>
                    <button className={s.catalogHeadBtn}>{props.btnValue2}</button>
                    <button className={s.catalogHeadBtn}>{props.btnValue3}</button>
                    <button className={s.catalogHeadBtn}>{props.btnValue4}</button>
                </div>
                <div className={s.catalogHeadSort}>
                    <select className="sort" name="Sort" id="Sort">
                        <option value="">По популярности</option>
                        <option value="">По цене</option>
                        <option value="">По алфавиту</option>
                        <option value="">По рейтингу</option>
                    </select>
                    <button className={s.catalogHeadBtnView}><img src={View} alt=""/></button>
                    <button className={s.catalogHeadBtnList}><img src={List} alt=""/></button>
                </div>
            </div>
        </div>
    );
}

export default CatalogHead;