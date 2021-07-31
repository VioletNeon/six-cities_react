import React from 'react';
import PropTypes from 'prop-types';
import {useSelector, useDispatch} from 'react-redux';
import {changeCityOffers, changeSortType, changeActiveCardId} from '../../store/action';
import Header from '../header/header';
import CitiesList from '../cities-list/cities-list';
import CityOffersListEmpty from '../city-offers-list-empty/city-offers-list-empty';
import CityOffers from '../city-offers/city-offers';
import {
  selectCities,
  selectCity,
  selectCityOffers,
  selectSortType,
  selectLatitude,
  selectLongitude,
  selectZoom
} from '../../store/offers/selectors';

function MainScreen(props) {
  const {onBookmarkButtonClick} = props;

  const activeCity = useSelector(selectCity);
  const activeCityOffers = useSelector(selectCityOffers);
  const sortType = useSelector(selectSortType);
  const cities = useSelector(selectCities);
  const latitude = useSelector(selectLatitude);
  const longitude = useSelector(selectLongitude);
  const zoom = useSelector(selectZoom);

  const dispatch = useDispatch();

  const onCitySelection = (location, name) => {
    dispatch(changeCityOffers(location, name));
  };

  const onSortTypeChange = (activeSortType) => {
    dispatch(changeSortType(activeSortType));
  };

  const onActiveCardChange = (activeCardId) => {
    dispatch(changeActiveCardId(activeCardId));
  };

  const isOffersListEmpty = activeCityOffers.length === 0;

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
          {isOffersListEmpty ?
            <CityOffersListEmpty /> :
            <CityOffers
              activeCityOffers={activeCityOffers}
              activeCity={activeCity}
              sortType={sortType}
              onSortTypeChange={onSortTypeChange}
              onActiveCardChange={onActiveCardChange}
              latitude={latitude}
              longitude={longitude}
              zoom={zoom}
              onBookmarkButtonClick={onBookmarkButtonClick}
            />}
        </div>
      </main>
    </div>
  );
}

MainScreen.propTypes = {
  onBookmarkButtonClick: PropTypes.func.isRequired,
};

export default MainScreen;
