import React from 'react';
import PropTypes from 'prop-types';
import OfferCard from '../offer-card/offer-card';

export default function OfferCardsList(props) {
  const {
    activeCityOffers,
    isNearPlaces,
    onCardHover,
    onBookmarkButtonClick,
  } = props;

  return (
    <div className={`${isNearPlaces ? 'near-places__list' : 'cities__places-list tabs__content'} places__list`}>
      {activeCityOffers.map((offer) => (
        <OfferCard
          offer={offer}
          onCardHover={onCardHover}
          isNearPlace={isNearPlaces}
          onBookmarkButtonClick={onBookmarkButtonClick}
          key={offer.id}
        />
      ))}
    </div>
  );
}

OfferCardsList.propTypes = {
  activeCityOffers: PropTypes.arrayOf(PropTypes.object).isRequired,
  isNearPlaces: PropTypes.bool.isRequired,
  onCardHover: PropTypes.func.isRequired,
  onBookmarkButtonClick: PropTypes.func.isRequired,
};
