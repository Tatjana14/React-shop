
import s from './BreadCrumbs.module.scss';







function BreadCrumbs(props) {
    return (
        <ul className={s.breadCrumbList}>
            <li className={s.breadCrumbItem}>
                <a className={s.breadCrumbLink} href={props.to}>{props.value}</a>
            </li>
        </ul>
    );
}

export default BreadCrumbs;