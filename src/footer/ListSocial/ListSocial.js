import './ListSocial.css';
import Instagram from '../../assets/img/footer/instagram_footer.svg';
import Vk from '../../assets/img/footer/vk_footer.svg';
import Facebook from '../../assets/img/footer/facebook_footer.svg';
import Youtube from "../../assets/img/footer/youtube_footer.svg";
import MenuItem from '../../components/menuItem/MenuItem';
import Image from '../../components/Image/Image';

function ListSocial() {
    return (
        <ul className="social-list list">
            <MenuItem classLink='#' adress={'#'} valueLink={<Image src={Instagram}/>} />
            <MenuItem classLink='#' adress={'#'} valueLink={<Image src={Vk}/>} />
            <MenuItem classLink='#' adress={'#'} valueLink={<Image src={Facebook}/>} />
            <MenuItem classLink='#' adress={'#'} valueLink={<Image src={Youtube}/>} />
        </ul>
    );
}

export default ListSocial;
