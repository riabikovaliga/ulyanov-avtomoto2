import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Specifications from '../specification-list/specification-list';
import Reviews from '../reviews/reviews';
import Contacts from '../contacts/contacts';
import {TabsType} from '../../const';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(TabsType.SPECIFICATION);

  const TabContent = () => {
    switch (activeTab) {
      case TabsType.SPECIFICATION:
        return (
          <Specifications />
        );
      case TabsType.REVIEWS:
        return (
          <Reviews />
        );
      case TabsType.CONTACTS:
        return (
          <Contacts />
        );
    }

    return ``;
  };
  return (
    <section className="page-main__tabs tabs">
      <h3 className="visually-hidden">Информация</h3>
      <div className="tabs__wrapper">
        <ul className="tabs__menu">
          <li className="tabs__item">
            <Link
              to="#"
              className={`tabs__link ${activeTab === TabsType.SPECIFICATION ? `tabs__link--active` : ``}`}
              onClick={() => setActiveTab(TabsType.SPECIFICATION)}
            >Характеристики</Link>
          </li>
          <li className="tabs__item">
            <Link
              to="#"
              className={`tabs__link ${activeTab === TabsType.REVIEWS ? `tabs__link--active` : ``}`}
              onClick={() => setActiveTab(TabsType.REVIEWS)}
            >Отзывы</Link>
          </li>
          <li className="tabs__item">
            <Link
              to="#"
              className={`tabs__link ${activeTab === TabsType.CONTACTS ? `tabs__link--active` : ``}`}
              onClick={() => setActiveTab(TabsType.CONTACTS)}
            >Контакты</Link>
          </li>
        </ul>
        <div className="tabs__body">
          <TabContent />
        </div>
      </div>
    </section>
  );
};

export default Tabs;
