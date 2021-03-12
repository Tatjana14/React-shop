
import './BreadCrumbs.module.scss';







function BreadCrumbs(props) {
    return (
        <ul className='breadCrumbList'>
            <li className='breadCrumbItem'>
                <a className='breadCrumbLink' href={props.to}>{props.value}</a>
            </li>
        </ul>
    );
}

export default BreadCrumbs;