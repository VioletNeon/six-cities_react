import React from 'react';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';

function ReviewsItem(props) {
  const {review} = props;
  const {
    comment,
    date,
    rating,
    user,
  } = review;
  const msDate = dayjs(Date.parse(date));

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatarUrl} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">
          {user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${Math.round(rating)*20}%`}}>
            </span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={msDate.format('YYYY-MM-DD')}>{msDate.format('MMMM YYYY')}</time>
      </div>
    </li>
  );
}

ReviewsItem.propTypes = {
  review: PropTypes.shape({
    comment: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    user: PropTypes.shape({
      avatarUrl: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default ReviewsItem;
