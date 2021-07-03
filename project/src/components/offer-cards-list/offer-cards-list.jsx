import React, {useState} from 'react';
import PropTypes from 'prop-types';
import OfferCard from '../offer-card/offer-card';

function OfferCardsList(props) {
  const {offers, isNearPlaces} = props;
  const [, setActiveCard] = useState(null);
  const handleCardHover = (nextActiveCard) => {
    setActiveCard(nextActiveCard);
  };
  return (
    <div className={`${isNearPlaces ? 'near-places__list' : 'cities__places-list tabs__content'} places__list`}>
      {offers.map((offer) => <OfferCard offer={offer} onCardHover={handleCardHover} isNearPlace={isNearPlaces} key={offer.id}/>)}
    </div>
  );
}

OfferCardsList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object).isRequired,
  isNearPlaces: PropTypes.bool.isRequired,
};

export default OfferCardsList;
