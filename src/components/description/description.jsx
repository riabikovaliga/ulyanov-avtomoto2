import React from 'react';
import {useSelector} from 'react-redux';

const Description = () => {
  const {car} = useSelector((state) => state.DATA);
  const {title, description, prices, loan} = car;

  return (
    <section className="page-main__description description">
      <h3 className="description__title">{title}</h3>
      <ul className="description__list">
        <li className="description__item">
          <span className="description__icon">
            <img src="./img/engine.svg" alt="тип топлива" width="24" height="22"/>
          </span>
          <span className="description__text">{description.fuel}</span>
        </li>
        <li className="description__item">
          <span className="description__icon">
            <img src="./img/gear.svg" alt="тип коробки передач" width="26" height="24"/>
          </span>
          <span className="description__text">{description.gear}</span>
        </li>
        <li className="description__item">
          <span className="description__icon">
            <img src="./img/power.svg" alt="мощность" width="32" height="21"/>
          </span>
          <span className="description__text">{description.power}</span>
        </li>
        <li className="description__item">
          <span className="description__icon">
            <img src="./img/volume.svg" alt="объем двигателя" width="30" height="23"/>
          </span>
          <span className="description__text">{description.volume}</span>
        </li>
      </ul>
      <div className="description__prices">
        <span className="description__price description__price--new">{prices.new}</span>
        <span className="description__price description__price--old">{prices.old}</span>
      </div>
      <button className="description__order button">оставить заявку</button>
      <button className="description__loan button">В КРЕДИТ ОТ {loan}</button>
    </section>
  );
};

export default Description;
