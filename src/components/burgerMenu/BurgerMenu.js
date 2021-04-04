import s from './BurgerMenu.scss';

function BurgerMenu(props) {
    return (
<div class="hamburger-menu">
    <input id="menu__toggle" type="checkbox" />
    <label class="menu__btn" for="menu__toggle">
        <span></span>
    </label>
    <div class="menu__box">
                <ul>
                    <li>
                        <a class="menu__item" href="#">Войти</a>
                    </li>
                    <li>
                        <a class="menu__item" href="#">Регистрация</a>
                    </li>
                    <li>
                        <a class="menu__item" href="#">Избранное</a>
                    </li>
                    <li>
                        <a class="menu__item" href="#">Корзина</a>
                    </li>
                    <li>
                        <a class="menu__item" href="#">Магазины</a>
                    </li>
                    <li>
                        <a class="menu__item" href="#">Акции</a>
                    </li>
                    <li>
                        <a class="menu__item" href="#">Доставка и оплата</a>
                    </li>
                    <li>
                        <a class="menu__item" href="#">Квадроциклы</a>
                    </li>
                    <li>
                        <a class="menu__item" href="#">Катера</a>
                    </li>
                    <li>
                        <a class="menu__item" href="#">Гидроциклы</a>
                    </li>
                    <li>
                        <a class="menu__item" href="#">Лодки</a>
                    </li>
                    <li>
                        <a class="menu__item" href="#">Вездеходы</a>
                    </li>
                    <li>
                        <a class="menu__item" href="#">Снегоходы</a>
                    </li>
                    <li>
                        <a class="menu__item" href="#">Двигатели</a>
                    </li>
                    <li>
                        <a class="menu__item" href="#">Запчасти</a>
                    </li>
                </ul>
        <span>Москва, ул. Науки  25</span>
    </div>
</div>
    );
}

export default BurgerMenu;