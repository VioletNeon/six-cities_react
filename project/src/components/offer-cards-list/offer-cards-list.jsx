import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import OfferCard from '../offer-card/offer-card';

function OfferCardsList(props) {
  const {activeCityOffers, isNearPlaces} = props;
  const [, setActiveCard] = useState(null);
  const handleCardHover = (nextActiveCard) => {
    setActiveCard(nextActiveCard);
  };
  return (
    <div className={`${isNearPlaces ? 'near-places__list' : 'cities__places-list tabs__content'} places__list`}>
      {activeCityOffers.map((offer) => <OfferCard offer={offer} onCardHover={handleCardHover} isNearPlace={isNearPlaces} key={offer.id}/>)}
    </div>
  );
}

OfferCardsList.propTypes = {
  activeCityOffers: PropTypes.arrayOf(PropTypes.object).isRequired,
  isNearPlaces: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  activeCityOffers: state.cityOffers,
});

export {OfferCardsList};
export default connect(mapStateToProps, null)(OfferCardsList);
