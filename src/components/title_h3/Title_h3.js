import './Title_h3.css';

function Title_h3(props){
    return(
        <h3 className={props.titleH3Class}>{props.title_h3Name}</h3>
    );

}

export default Title_h3;
