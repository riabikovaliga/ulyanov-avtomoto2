import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {RATING_STARS} from '../../const';
import PopupForm from '../popup-form/popup-form';

const Reviews = () => {
  const [modalActive, setModalActive] = useState(false);
  const {reviews} = useSelector((state) => state.DATA);

  const onModalOpenHandler = () => {
    const scrollY = window.pageYOffset;
    const screenWidth = document.body.clientWidth;
    document.body.style.position = `fixed`;
    document.body.style.minWidth = `${screenWidth}px`;
    document.body.style.top = `-${scrollY}px`;
    setModalActive(true);
  }

  return (
    <section className="tabs__reviews reviews">
      <ul className="reviews__list">
        {reviews.map((review) => (
          <li key={review.id} className="reviews__item">
            <h4 className="reviews__title">{review.name}</h4>
            <p className="reviews__text reviews__text--title reviews__text--advantages">Достоинства</p>
            <p className="reviews__text reviews__text--move">{review.advantages}</p>
            <p className="reviews__text reviews__text--title reviews__text--problems">Недостатки</p>
            <p className="reviews__text reviews__text--move">{review.problems}</p>
            <p className="reviews__text reviews__text--title">Комментарий</p>
            <p className="reviews__text">{review.comments}</p>
            <div className="reviews__rating">
              <ul className="reviews__stars stars">
                {RATING_STARS.map((star, index) => (
                  <li className="stars__item" key={index}>
                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8.36875 0L10.2477 5.87336L16.3279 5.87336L11.4089 9.50329L13.2878 15.3766L8.36875 11.7467L3.44972 15.3766L5.32862 9.50329L0.409596 5.87336L6.48985 5.87336L8.36875 0Z"
                        fill={review.rating >= index + 1 ? `#D12136` : `#BDBEC2`}
                        fillOpacity={review.rating >= index + 1 ? `1` : `0.7`}
                      />
                    </svg>
                  </li>
                ))}
              </ul>
              <p className="reviews__means">{review.means}</p>
            </div>
            <div className="reviews__answer">
              <p className="reviews__time">{review.time}</p>
              <Link to="#" className="reviews__link">Ответить</Link>
            </div>
          </li>
        ))}
      </ul>
      <button
        className="reviews__sent button"
        onClick={onModalOpenHandler}
      >оставить отзыв</button>
      {(modalActive) ? <PopupForm active={modalActive} setActive={setModalActive}/> : ``}
    </section>
  );
};

export default Reviews;
