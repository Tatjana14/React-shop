import s from './Footer.module.scss';

import Instagram from '../assets/img/footer/instagram_footer.svg';
import VK from '../assets/img/footer/vk_footer.svg';
import Facebook from '../assets/img/footer/facebook_footer.svg';
import Youtube from '../assets/img/footer/youtube_footer.svg';

function Footer() {
  return (
    <div className={s.footer}>
      <div className={s.top}>

        <div className={s.subscribeForm}>
          <h3 className={s.title}>Подпишитесь на нашу рассылку и узнавайте о акциях быстрее </h3>
          <form className={s.inputEmail}>
            <input className={s.input} type="email" placeholder="Введите ваш e-mail:" />
            <button className={s.btn}>ОТПРАВИТЬ</button>
          </form>
        </div>

        <div className={s.lists}>
          <div className={s.content}>
            <div className={s.informationMenu}>
              <h3 className={s.title}>Информация</h3>
              <ul className={s.list}>
                <li className={s.item}>
                  <a href="" className={s.link}>
                    О компании
                </a>
                </li>
                <li className={s.item}>
                  <a href="" className={s.link}>
                    Контакты
                </a>
                </li>
                <li className={s.item}>
                  <a href="" className={s.link}>
                    Акции
                </a>
                </li>
                <li className={s.item}>
                  <a href="" className={s.link}>
                    Магазины
                </a>
                </li>
                <li className={s.item}>
                </li>
              </ul>
            </div>

            <div className={s.onlineRetailMenu}>
              <h3 className={s.title}>Интернет-магазин</h3>
              <ul className={s.list}>
                <li className={s.item}>
                  <a href="" className={s.link}>
                    Доставка и самовывоз
              </a>
                </li>
                <li className={s.item}>
                  <a href="" className={s.link}>
                    Оплата
                </a>
                </li>
                <li className={s.item}>
                  <a href="" className={s.link}>
                    Возврат-обмен
              </a>
                </li>
                <li className={s.item}>
                  <a href="" className={s.link}>
                    Новости
                </a>
                </li>
              </ul>
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
          <div className={s.documents}>
            <a href="#" className={s.link}>Договор оферты</a>
            <a href="#" className={s.link}>Политика обработки персональных данных</a>
          </div>
        </div>


      </div>



    </div>
  );
}

export default Footer;
