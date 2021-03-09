import './Button.css';

function Button(props) {
    return (
        <button className="btn">{props.btnName}</button>
    );
}

export default Button;

