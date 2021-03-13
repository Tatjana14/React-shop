import './ProductInfoRow.module.scss';

function ProductInfoRow(props) {
    return (
      <div className="ProductInfoRow">
          <span className={props.CharacteristicNameClass}>{props.CharacteristicName}</span>
          <span className={props.CharacteristicValueClass}>{props.CharacteristicValue}</span>
      </div>
    );
  }
  
  export default ProductInfoRow;