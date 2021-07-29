import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {changeCityOffers, changeSortType, changeActiveCardId} from '../../store/action';
import Map from '../map/map';
import OfferCardsList from '../offer-cards-list/offer-cards-list';
import Header from '../header/header';
import CitiesList from '../cities-list/cities-list';
import SortOption from '../sort-option/sort-option';
import {
  getCities,
  getCity,
  getCityOffers,
  getSortType,
  getLatitude,
  getLongitude,
  getZoom
} from '../../store/offers/selectors';

function MainScreen(props) {
  const {
    activeCityOffers,
    cities,
    activeCity,
    sortType,
    latitude, longitude, zoom,
    onActiveCardChange,
    onSortTypeChange,
    onCitySelection,
    onBookmarkButtonClick,
  } = props;

  const city = {
    lat: latitude,
    lng: longitude,
    zoom: zoom,
  };
  const isNearPlaces = false;

  return (
    <div className="page page--gray page--main">
      <Header props={props} />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList
              onCitySelection={onCitySelection}
              activeCity={activeCity}
              cities={cities}
            />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{activeCityOffers.length} places to stay in {activeCity}</b>
              <SortOption
                sortType={sortType}
                onSortTypeChange={onSortTypeChange}
              />
              <OfferCardsList
                isNearPlaces={isNearPlaces}
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
        </div>
      </main>
    </div>
  );
}

MainScreen.propTypes = {
  activeCityOffers: PropTypes.array.isRequired,
  activeCity: PropTypes.string.isRequired,
  sortType: PropTypes.string.isRequired,
  onSortTypeChange: PropTypes.func.isRequired,
  onActiveCardChange: PropTypes.func.isRequired,
  onCitySelection: PropTypes.func.isRequired,
  cities: PropTypes.array.isRequired,
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
  zoom: PropTypes.number.isRequired,
  onBookmarkButtonClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  activeCity: getCity(state),
  activeCityOffers: getCityOffers(state),
  sortType: getSortType(state),
  cities: getCities(state),
  latitude: getLatitude(state),
  longitude: getLongitude(state),
  zoom: getZoom(state),
});

const mapDispatchToProps = (dispatch) => ({
  onCitySelection(location, name) {
    dispatch(changeCityOffers(location, name));
  },
  onSortTypeChange(activeSortType) {
    dispatch(changeSortType(activeSortType));
  },
  onActiveCardChange(activeCardId) {
    dispatch(changeActiveCardId(activeCardId));
  },
});

export {MainScreen};
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
