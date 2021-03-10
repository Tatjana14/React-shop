import './Footer.css';
import Input from './Input/Input';
import Button from '../../src/components/button/Button';
import Link from '../components/link/Link'
import MenuFooter_Information from './MenuFooter_Information/MenuFooter_Information';
import MenuFooter_onlineShop from './MenuFooter_onlineShop/MenuFooter_onlineShop';
import ListSocial from './ListSocial/ListSocial';
import Title_h3 from '../components/title_h3/Title_h3';

import Instagram from '../assets/img/footer/instagram_footer.svg';
import VK from '../assets/img/footer/vk_footer.svg';
import Facebook from '../assets/img/footer/facebook_footer.svg';
import Youtube from '../assets/img/footer/youtube_footer.svg';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-subscribe">
          <h3 className="footer-subscribe__title">Подпишитесь на нашу рассылку и узнавайте о акция быстрее
            </h3>

          <form className="footer-subscribe__input-email">
            <input type="email" placeholder="Введите ваш e-mail:" />
            <button className="footer-subscribe__btn">Отправить</button>
          </form>
        </div>


        <div className="information-menu">
          <h3 className="information-menu__title">Информация</h3>
          <ul className="information-menu__list list">
            <li className="information-menu__item"><a href="" className="information-menu__link">О компании</a></li>
            <li className="information-menu__item"><a href="" className="information-menu__link">Контакты</a></li>
            <li className="information-menu__item"><a href="" className="information-menu__link">Акции</a></li>
            <li className="information-menu__item"><a href="" className="information-menu__link">Магазины</a></li>
          </ul>


        </div>

        <div className="onlineRetail-menu">
          <h3 className="onlineRetail-menu__title">Интернет-магазин</h3>
          <ul className="onlineRetail-menu__list list">
            <li className="onlineRetail-menu__item">
              <a href="" className="onlineRetail-menu__link">
                Доставка и самовывоз
              </a>
            </li>
            <li className="onlineRetail-menu__item">
              <a href="" className="onlineRetail-menu__link">
                Оплата
                </a>
            </li>
            <li className="onlineRetail-menu__item">
              <a href="" className="onlineRetail-menu__link">
                Возврат-обмен
              </a>
            </li>
            <li className="onlineRetail-menu__item">
              <a href="" className="onlineRetail-menu__link">
                Новости
                </a>
            </li>
          </ul>
        </div>

        <div className="social-menu">
          <ul className="social-menu__list list">
            <li className="social-menu__item"><a href="" className="social-menu__link"><img src={Instagram} alt="" className="social-menu__icon"/></a></li>
            <li className="social-menu__item"><a href="" className="social-menu__link"><img src={VK} alt="" className="social-menu__icon"/></a></li>
            <li className="social-menu__item"><a href="" className="social-menu__link"><img src={Facebook} alt="" className="social-menu__icon"/></a></li>
            <li className="social-menu__item"><a href="" className="social-menu__link"><img src={Youtube} alt="" className="social-menu__icon"/></a></li>
          </ul>

        </div>
      </div>

      <div className="footer-bottom">
            <a href="" className="footer-bottom__link">Договор оферты</a>
            <a href="" className="footer-bottom__link">Политика обработки персональных данных</a>
      </div>



    </div>
  );
}

export default Footer;
