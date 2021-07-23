import React from 'react';
import PropTypes from 'prop-types';
import ReviewsItem from '../reviews-item/reviews-item';

function ReviewsList({reviews}) {
  const sortedReviews = reviews.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
  const reviewsList = sortedReviews.length > 10 ? reviews.slice(0, 10) : reviews;
  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewsList.length}</span></h2>
      <ul className="reviews__list">
        {reviewsList.map((review) => <ReviewsItem review={review} key={review.id}/>)}
      </ul>
    </>
  );
}

ReviewsList.propTypes = {
  reviews: PropTypes.array.isRequired,
};

export default ReviewsList;
