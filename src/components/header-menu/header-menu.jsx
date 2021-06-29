import React from 'react';
import {Link} from 'react-router-dom';

const HeaderMenu = () => {
  return (
    <nav className="page-menu">
      <ul className="page-menu__list">
        <li className="page-menu__item">
          <Link to="#" className="page-menu__link page-menu__link--active">Автомобили</Link>
        </li>
        <li className="page-menu__item">
          <Link to="#" className="page-menu__link">Контакты</Link>
        </li>
        <li className="page-menu__item">
          <Link to="#" className="page-menu__link">Услуги</Link>
        </li>
        <li className="page-menu__item">
          <Link to="#" className="page-menu__link">Вакансии</Link>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderMenu;
