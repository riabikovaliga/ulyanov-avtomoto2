import React from 'react';
import {Link} from 'react-router-dom';
import {YMaps, Map, Placemark, ZoomControl} from 'react-yandex-maps';

const Contacts = () => {
  return (
    <section className="tabs__contacts contacts">
      <h3 className="visually-hidden">Контакты</h3>
      <ul className="contacts__list">
        <li className="contacts__item">
          <p className="contacts__title">Адрес</p>
          <p className="contacts__text contacts__text--address">Санкт-Петербург,<br/> набережная реки Карповки, дом 5</p>
        </li>
        <li className="contacts__item">
          <p className="contacts__title">Режим работы</p>
          <p className="contacts__text">Ежедневно, с 10:00 до 21:00</p>
        </li>
        <li className="contacts__item">
          <p className="contacts__title">Телефон</p>
          <Link to="tel: 88003335599" className="contacts__text">8 (800) 333-55-99</Link>
        </li>
        <li className="contacts__item">
          <p className="contacts__title">E-mail</p>
          <Link to="mailto: info@avto-moto.ru" className="contacts__text">info@avto-moto.ru</Link>
        </li>
      </ul>
      <YMaps>
        <div className="contacts__map">
          <Map
            defaultState={{
              center: [59.968137, 30.316272],
              zoom: 14,
              controls: [],
            }}
            width="100%"
            height="100%">
            <ZoomControl options={{float: `right`}} />
            <Placemark geometry={[59.968137, 30.316272]} />
          </Map>
        </div>
      </YMaps>
    </section>
  );
};

export default Contacts;
