import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import FavoriteCity from '../favorite-city/favorite-city';
import Header from '../header/header';
import {clearFavoritesData} from '../../store/action';
import {fetchFavoriteHotels} from '../../store/api-actions';
import LoadingScreen from '../loading-screen/loading-screen';
import {getFavoriteOffers, getFavoritesLoadState} from '../../store/user/selectors';

function FavoritesScreen(props) {
  const {onFavoriteSelect, onFavoritesOut, favoriteOffers, isFavoritesLoad} = props;

  useEffect(() => {
    onFavoriteSelect();
    return onFavoritesOut;
  }, []);

  if (!isFavoritesLoad) { return <LoadingScreen />; }

  const isFavoritesEmpty = favoriteOffers.length === 0;

  const cityOffers = {};

  const getFavoriteCityOffers = (offers) => {
    offers.forEach((offer) => {
      if (!cityOffers[offer.city.name]) {
        cityOffers[offer.city.name] = [];
      }
      cityOffers[offer.city.name].push(offer);
    });
    return Object.entries(cityOffers);
  };

  const showFavoritesPart = () => {
    if (!isFavoritesEmpty) {
      const favoriteCityOffers = getFavoriteCityOffers();
      return (
        <ul className="favorites__list">
          {favoriteCityOffers.map(([city, hotels]) => <FavoriteCity city={city} favoriteOffers={hotels} key={city}/>)}
        </ul>
      );
    }
    return (
      <div className="favorites__status-wrapper">
        <b className="favorites__status">Nothing yet saved.</b>
        <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
      </div>
    );
  };

  return (
    <div className="page">
      <Header props={props} />
      <main className={`page__main page__main--favorites ${isFavoritesEmpty && 'page__main--favorites-empty'}`}>
        <div className="page__favorites-container container">
          <section className={`favorites ${isFavoritesEmpty && 'favorites--empty'}`}>
            <h1 className={isFavoritesEmpty ? 'visually-hidden' : 'favorites__title'}>{isFavoritesEmpty ? 'Favorites (empty)' : 'Saved listing'}</h1>
            {showFavoritesPart()}
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to="/">
          <img className="footer__logo" src={'img/logo.svg'} alt="6 cities logo" width="64" height="33"/>
        </Link>
      </footer>
    </div>
  );
}

FavoritesScreen.propTypes = {
  favoriteOffers: PropTypes.arrayOf(PropTypes.shape({
    city: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired).isRequired,
  onFavoriteSelect: PropTypes.func.isRequired,
  onFavoritesOut: PropTypes.func.isRequired,
  isFavoritesLoad: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  favoriteOffers: getFavoriteOffers(state),
  isFavoritesLoad: getFavoritesLoadState(state),
});

const mapDispatchToProps = (dispatch) => ({
  onFavoriteSelect() {
    dispatch(fetchFavoriteHotels());
  },
  onFavoritesOut() {
    dispatch(clearFavoritesData());
  },
});

export {FavoritesScreen};
export default connect(mapStateToProps, mapDispatchToProps)(FavoritesScreen);
