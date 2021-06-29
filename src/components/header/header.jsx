import React from 'react';
import HeaderMenu from '../header-menu/header-menu';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <header className="page-header">
      <div className="container">
        <div className="page-header__wrapper">
          <div className="page-header__logo logo">
            <Link to="/" className="logo__link">
              <div className="logo__wrapper">
                <img src="./img/logo.svg" alt="Лого" className="logo__image" width="55" height="55"/>
                <div className="logo__title title">
                  <p className="title__text title__text--upper">AVTO</p>
                  <p className="title__text title__text--lower">MOTO</p>
                </div>
              </div>
            </Link>
          </div>
          <HeaderMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
