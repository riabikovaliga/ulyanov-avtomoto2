import React from 'react';
import {useSelector} from 'react-redux';

const SpecificationList = () => {
  const {car} = useSelector((state) => state.DATA);
  const {specifications} = car;

  return (
    <section className="tabs__specifications specifications">
      <h3 className="visually-hidden">Характеристики</h3>
      <ul className="specifications__list">
        {specifications.map((specification, index) => (
          <li key={`specifications-${index}`} className="specifications__item">
            <span className="specifications__text">{specification.name}</span>
            <span className="specifications__text">{specification.data}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SpecificationList;
