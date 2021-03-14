import s from './ProductInfoRow.module.scss';

function ProductInfoRow(props) {
    return (
      <div className={s.rows}>
          <span className={props.characteristicNameClass}>{props.CharacteristicName}</span>
          <span className={props.characteristicValueClass}>{props.CharacteristicValue}</span>
      </div>
    );
  }
  
  export default ProductInfoRow;