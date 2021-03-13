import s from './Footer.module.scss';

import Instagram from '../assets/img/footer/instagram_footer.svg';
import VK from '../assets/img/footer/vk_footer.svg';
import Facebook from '../assets/img/footer/facebook_footer.svg';
import Youtube from '../assets/img/footer/youtube_footer.svg';

function Footer() {
  return (
    <div className={s.footer}>
      <div className={s.footer__top}>

        <div className={s.subscribeForm}>
          <h3 className={s.subscribeForm__title}>Подпишитесь на нашу рассылку и узнавайте о акция быстрее
            </h3>
          <form className={s.inputEmail}>
            <input className={s.inputEmail__input} type="email" placeholder="Введите ваш e-mail:" />
            <button className={s.inputEmail__btn}>Отправить</button>
          </form>
        </div>

        <div className={s.lists}>
          <div className={s.informationMenu}>
            <h3 className={s.informationMenu__title}>Информация</h3>
            <ul className={s.informationMenu__list}>
              <li className={s.informationMenu__item}>
                <a href="" className={s.informationMenu__link}>
                  О компании
                </a>
              </li>
              <li className={s.informationMenu__item}>
                <a href="" className={s.informationMenu__link}>
                  Контакты
                </a>
              </li>
              <li className={s.informationMenu__item}>
                <a href="" className={s.informationMenu__link}>
                  Акци
                </a>
              </li>
              <li className={s.informationMenu__item}>
                <a href="" className={s.informationMenu__link}>
                  Магазины
                </a>
              </li>
            </ul>
          </div>

          <div className={s.onlineRetailMenu}>
            <h3 className={s.onlineRetailMenu__title}>Интернет-магазин</h3>
            <ul className={s.onlineRetailMenu__list}>
              <li className={s.onlineRetailMenu__item}>
                <a href="" className="onlineRetail-menu__link">
                  Доставка и самовывоз
              </a>
              </li>
              <li className={s.onlineRetailMenu__item}>
                <a href="" className={s.onlineRetailMenu__link}>
                  Оплата
                </a>
              </li>
              <li className={s.onlineRetailMenu__item}>
                <a href="" className={s.onlineRetailMenu__link}>
                  Возврат-обмен
              </a>
              </li>
              <li className={s.onlineRetailMenu__item}>
                <a href="" className={s.onlineRetailMenu__link}>
                  Новости
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={s.socialMenu}>

          <ul className={s.socialMenu__list}>

            <li className={s.socialMenu__listItem}>
              <a href="" className={s.socialMenu__itemLink}>
                <img src={Instagram} alt="" className={s.socialMenu__icon} />
              </a>
            </li>

            <li className={s.socialMenu__listItem}>
              <a href="" className={s.socialMenu__itemLink}>
                <img src={VK} alt="" className={s.socialMenu__icon} />
              </a>
            </li>

            <li className={s.socialMenu__listItem}>
              <a href="" className={s.socialMenu__itemLink}>
                <img src={Facebook} alt="" className={s.socialMenu__icon} />
              </a>
            </li>

            <li className={s.socialMenu__listItem}>
              <a href="" className={s.socialMenu__itemLink}>
                <img src={Youtube} alt="" className={s.socialMenu__icon} />
              </a>
            </li>

          </ul>

        </div>
      </div>

      <div className={s.bottom}>
        <div className={s.wrapper}></div>
          <a href="" className={s.link}>Договор оферты</a>
          <a href="" className={s.link}>Политика обработки персональных данных</a>
          
      </div>

    </div>
  );
}

export default Footer;
