import './ListSocial.css';
import Instagram from '../../assets/img/footer/instagram_footer.svg';
import Vk from '../../assets/img/footer/vk_footer.svg';
import Facebook from '../../assets/img/footer/facebook_footer.svg';
import Youtube from "../../assets/img/footer/youtube_footer.svg";

function ListSocial() {
    return (
        <ul className="social-list list">
            <li className="social-list__item"><a href="" className="social-list__link"><img src={Instagram} alt="" className="social-list__img" /></a></li>
            <li className="social-list__item"><a href="" className="social-list__link"><img src={Vk} alt="" className="social-list__img" /></a></li>
            <li className="social-list__item"><a href="" className="social-list__link"><img src={Facebook} alt="" className="social-list__img" /></a></li>
            <li className="social-list__item"><a href="" className="social-list__link"><img src={Youtube} alt="" className="social-list__img" /></a></li>
        </ul>
    );
}

export default ListSocial;
