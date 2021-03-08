import './MenuFooter_Information.css';
import List_item from '../../components/List_item/List_item';
import Link from '../../components/Link/Link';

function MenuFooter_Information(props) {
  return (
    <ul className={props.className}>
      <List_item
        itemValue={
          <Link
            linkValue="О компании"
            to={"#"}
          />
        } />

      <List_item
        itemValue={
          <Link
            linkValue="Контакты"
            to={"#"}
          />
        } />

      <List_item
        itemValue={
          <Link
            linkValue="Акции"
            to={"#"}
          />
        } />

      <List_item
        itemValue={
          <Link
            linkValue="Магазины"
            to={"#"}
          />
        } />


    </ul>
  );
}

export default MenuFooter_Information;
