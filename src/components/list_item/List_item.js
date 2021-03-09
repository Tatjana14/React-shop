import './List_item.css';


function List_item(props) {
  return (
    <li className={props.className}>{props.itemValue}</li>
  );
}

export default List_item;
