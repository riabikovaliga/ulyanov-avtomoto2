import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {

  return (
    <footer className="page-footer footer">
      <div className="container">
        <div className="page-footer__wrapper">
          <ul className="footer__list">
            <li className="footer__item">
              <Link to="#" className="footer__link">Корпоративным клиентам</Link>
            </li>
            <li className="footer__item">
              <Link to="#" className="footer__link">Клиентам</Link>
            </li>
            <li className="footer__item">
              <Link to="#" className="footer__link">Аренда авто</Link>
            </li>
            <li className="footer__item">
              <Link to="#" className="footer__link">Каршеринг</Link>
            </li>
            <li className="footer__item">
              <Link to="#" className="footer__link">Как продать авто</Link>
            </li>
            <li className="footer__item">
              <Link to="#" className="footer__link">Trade-in</Link>
            </li>
            <li className="footer__item">
              <Link to="#" className="footer__link">Test drive</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
