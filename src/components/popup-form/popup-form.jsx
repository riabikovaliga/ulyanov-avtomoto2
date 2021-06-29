import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {RATING_STARS, TIME, KeyName, Validations, Means} from '../../const';
import {useInput} from '../../hooks/hooks';
import {useSelector, useDispatch} from 'react-redux';
import {postReview} from '../../store/actions';

const PopupForm = (props) => {
  const {active, setActive} = props;
  const {reviews} = useSelector((state) => state.DATA);
  const [userFormRating, setUserFormRating] = useState(1);
  const [isError, setError] = useState(false);
  const name = useInput(``, Validations.IS_EMPTY);
  const comment = useInput(``, Validations.IS_EMPTY);
  const advantages = useInput(``);
  const problems = useInput(``);

  const dispatch = useDispatch();

  const onKeydown = (evt) => {
    switch (evt.key) {
      case KeyName.ESC:
        setActive(false);
        break;
    }
  };

  useEffect(() => {
    document.addEventListener(`keydown`, onKeydown);
    return () => document.removeEventListener(`keydown`, onKeydown);
  });

  const resetForm = () => {
    name.setValue(``);
    advantages.setValue(``);
    problems.setValue(``);
    setUserFormRating(5);
    comment.setValue(``);
  };

  const handleClose = () => {
    const scrollY = document.body.style.top;
    document.body.style.position = ``;
    document.body.style.top = '';
    document.body.style.minWidth = `320px`;
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
    resetForm();
    setActive(false);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (name.isEmpty || comment.isEmpty) {
      setError(true);
    } else {
      setError(false);
      const newReview = {
        id: reviews.length + 1,
        name: name.value,
        advantages: advantages.value,
        problems: problems.value,
        comments: comment.value,
        rating: userFormRating,
        means: (userFormRating >= 3) ? Means.YES : Means.NO,
        time: TIME
      };
      dispatch(postReview(newReview));
      handleClose();
    }
  };

  return (
    <section className={`page-popup message-popup ${active ? `active` : ``}`} onClick={handleClose}>
      <div className="message-popup__container" onClick={(evt) => evt.stopPropagation()}>
        <h3 className="message-popup__title">Оставить отзыв</h3>

        <button className="message-popup__btn close-btn" type="button" aria-label="Закрыть" onClick={handleClose}>
          <svg className="close-btn__svg" width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.6399 15.0096L7.50482 8.86495L1.36977 15.0096L0 13.6399L6.14469 7.50482L0 1.36978L1.36977 0L7.50482 6.14469L13.6399 0.00964652L15 1.36978L8.86495 7.50482L15 13.6399L13.6399 15.0096Z" fill="#9F9E9E"/>
          </svg>

        </button>

        <form className="message-popup__form message-form" action="https://echo.htmlacademy.ru" method="post" onSubmit={handleSubmit} noValidate={true}>
          <div className="message-form__wrapper">
            <div className="message-form__left">
              <label className="message-form__label">
                <input
                  autoFocus={true}
                  aria-label="Имя"
                  className={`message-form__field name-field ${(isError && name.isEmpty) && `error`}`}
                  type="text"
                  name="name-id"
                  placeholder="Имя"
                  required={true}
                  value={name.value}
                  onChange={(evt) => name.onChange(evt)}
                  onBlur={(evt) => name.onBlur(evt)}
                />
                <span className="message-form__required">*</span>
                {(name.isEmpty) && <span className={`message-form__errorText ${(isError) && `error`}`}>Пожалуйста, заполните поле</span>}
              </label>

              <label className="message-form__label">
                <input
                  aria-label="Достоинства"
                  className="message-form__field"
                  type="text" name="mail-id"
                  placeholder="Достоинства"
                  value={advantages.value}
                  onChange={(evt) => advantages.onChange(evt)} />
              </label>

              <label className="message-form__label">
                <input
                  aria-label="Недостатки"
                  className="message-form__field"
                  type="text"
                  name="mail-id"
                  placeholder="Недостатки"
                  value={problems.value}
                  onChange={(evt) => problems.onChange(evt)} />
              </label>

            </div>
            <div className="message-form__right">
              <div className="message-form__rating">
                <p className="message-form__text">Оцените товар:</p>
                <div className="message-form__stars rating">
                  {RATING_STARS.map((rating, index) => (
                    <React.Fragment key={`Rating-${index}`}>
                      <input
                        aria-label="Оценка"
                        className="rating__input"
                        id={`star-${rating}`}
                        type="radio" name="rating"
                        value={rating}
                        checked={userFormRating === index + 1}
                        onChange={() => {
                          setUserFormRating(index + 1);
                        }}
                      />
                      <label className="rating__label" htmlFor={`star-${rating}`}>Rating {rating}</label>
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <label className="message-form__label textarea-label">
                <textarea
                  aria-label="Комментарий"
                  className={`message-form__area ${(isError && comment.isEmpty) && `error`}`}
                  name="message-text"
                  placeholder="Комментарий"
                  value={comment.value}
                  onChange={(evt) => comment.onChange(evt)}
                  onBlur={(evt) => comment.onBlur(evt)}
                  required={true}
                ></textarea>
                <span className="message-form__required">*</span>
                {(comment.isEmpty) && <span className={`message-form__errorText ${(isError) && `error`}`}>Пожалуйста, заполните поле</span>}
              </label>
            </div>
          </div>
          <button className="message-form__submit button" type="submit">оставить отзыв</button>
        </form>
      </div>
    </section>
  );
};

PopupForm.propTypes = {
  active: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired,
};

export default PopupForm;
