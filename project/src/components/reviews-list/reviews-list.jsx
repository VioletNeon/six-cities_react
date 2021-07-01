import React from 'react';
import ReviewsItem from '../reviews-item/reviews-item';
import PropTypes from 'prop-types';

function ReviewsList(props) {
  const {reviews} = props;
  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review) => <ReviewsItem review={review} key={review.id}/>)}
      </ul>
    </>
  );
}

ReviewsList.propTypes = {
  reviews: PropTypes.array.isRequired,
};

export default ReviewsList;
