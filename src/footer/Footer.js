import './Footer.css';
import Input from './Input/Input';
import Button from '../components/Button/Button';
import Link from '../components/Link/Link'
import Menu_information from './Menu_information/Menu_information';
import Menu_onlineRetail from './Menu_onlineRetail/Menu_onlineRetail';
import ListSocial from './ListSocial/ListSocial';
import Title_h3 from '../components/Title_h3/Title_h3';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-subscribe">
          <div className="footer-subscribe__title">
            <Title_h3 title_h3Name="Подпишитесь на нашу рассылку и узнавайте о акция быстрее" />
          </div>

          <form className="footer-subscribe__email-form">
            <Input />
            <Button btnName="Отправить" />
          </form>
        </div>


        <div className="footer-top__information-list">
        <Title_h3 title_h3Name="Информация" />
          <Menu_information />
        </div>

        <div className="footer-top__onlineRetail-list">
        <Title_h3 title_h3Name="Интернет-магазин" />
          <Menu_onlineRetail />
        </div>

        <div className="footer-top__social">
          <ListSocial />
        </div>
      </div>

      <div className="footer-bottom">
        <Link  linkName="Договор оферты"/>
        <Link  linkName="Политика обработки персональных данных"/>
      </div>



    </div>
  );
}

export default Footer;
