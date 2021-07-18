import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import {ActionCreator} from '../../store/action';
import Map from '../map/map';
import OfferCardsList from '../offer-cards-list/offer-cards-list';
import CitiesList from '../cities-list/cities-list';
import SortOption from '../sort-option/sort-option';

function MainScreen(props) {
  const {
    activeCityOffers,
    onCitySelection,
    activeCity,
    sortType,
    onSortTypeChange,
    activeCardId,
    onActiveCardChange,
    cities,
    latitude,
    longitude,
    zoom,
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
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link header__logo-link--active" to="#">
                <img className="header__logo" src={'img/logo.svg'} alt="6 cities logo" width="81" height="41"/>
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to={AppRoute.LOGIN}>
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </Link>
                </li>
                <li className="header__nav-item">
                  <Link className="header__nav-link" to="#">
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList onCitySelection={onCitySelection} activeCity={activeCity} cities={cities}/>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{activeCityOffers.length} places to stay in {activeCity}</b>
              <SortOption sortType={sortType} onSortTypeChange={onSortTypeChange}/>
              <OfferCardsList
                isNearPlaces={isNearPlaces}
                activeCityOffers={activeCityOffers}
                onCardHover={onActiveCardChange}
                onBookmarkButtonClick={onBookmarkButtonClick}
              />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map city={city} activeCityPoints={activeCityOffers} activeCardId={activeCardId} />
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
  activeCardId: PropTypes.number.isRequired,
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
  activeCity: state.city,
  activeCityOffers: state.cityOffers,
  sortType: state.sortType,
  activeCardId: state.activeCardId,
  cities: state.cities,
  latitude: state.latitude,
  longitude: state.longitude,
  zoom: state.zoom,
});

const mapDispatchToProps = (dispatch) => ({
  onCitySelection(location, name) {
    dispatch(ActionCreator.changeCityOffers(location, name));
  },
  onSortTypeChange(activeSortType) {
    dispatch(ActionCreator.changeSortType(activeSortType));
  },
  onActiveCardChange(activeCardId) {
    dispatch(ActionCreator.changeActiveCardId(activeCardId));
  },
});

export {MainScreen};
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
