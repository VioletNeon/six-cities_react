import React from 'react';
import PropTypes from 'prop-types';
import Map from '../map/map';
import OfferCardsList from '../offer-cards-list/offer-cards-list';
import SortOption from '../sort-option/sort-option';

function CityOffers(props) {
  const {
    activeCityOffers,
    activeCity,
    sortType,
    latitude, longitude, zoom,
    onActiveCardChange,
    onSortTypeChange,
    onBookmarkButtonClick,
  } = props;

  const city = {
    lat: latitude,
    lng: longitude,
    zoom: zoom,
  };
  const IS_NEAR_PLACES = false;

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{activeCityOffers.length} places to stay in {activeCity}</b>
        <SortOption
          sortType={sortType}
          onSortTypeChange={onSortTypeChange}
        />
        <OfferCardsList
          isNearPlaces={IS_NEAR_PLACES}
          activeCityOffers={activeCityOffers}
          onCardHover={onActiveCardChange}
          onBookmarkButtonClick={onBookmarkButtonClick}
        />
      </section>
      <div className="cities__right-section">
        <section className="cities__map map">
          <Map
            city={city}
            activeCityPoints={activeCityOffers}
          />
        </section>
      </div>
    </div>
  );
}

CityOffers.propTypes = {
  activeCityOffers: PropTypes.array.isRequired,
  activeCity: PropTypes.string.isRequired,
  sortType: PropTypes.string.isRequired,
  onSortTypeChange: PropTypes.func.isRequired,
  onActiveCardChange: PropTypes.func.isRequired,
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
  zoom: PropTypes.number.isRequired,
  onBookmarkButtonClick: PropTypes.func.isRequired,
};

export default CityOffers;
