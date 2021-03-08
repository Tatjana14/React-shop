import './MenuFooter_onlineShop.css';
import List_item from '../../components/list_item/List_item';
import Link from '../../components/link/Link';

function MenuFooter_onlineShop(props) {
  return (
    <ul className={props.className}>
      <List_item
        itemValue={
          <Link
            linkValue="Доставка и самовывоз"
            to={"#"}
          />
        } />

      <List_item
        itemValue={
          <Link
            linkValue="Оплата"
            to={"#"}
          />
        } />

      <List_item
        itemValue={
          <Link
            linkValue="Возврат-обмен"
            to={"#"}
          />
        } />

      <List_item
        itemValue={
          <Link
            linkValue="Новости"
            to={"#"}
          />
        } />


    </ul>
  );
}

export default MenuFooter_onlineShop;
