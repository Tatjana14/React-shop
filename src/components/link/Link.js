import './Link.css';


function Link(props) {
    return (
        <a href={props.to} className={props.className}>{props.linkValue}</a>
    );
}

export default Link;
