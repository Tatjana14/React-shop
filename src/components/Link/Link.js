import './Link.css';


function Link(props) {
    return (
        <a href="#" className="link">{props.linkName}</a>
    );
}

export default Link;