import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import FavoriteCity from '../favorite-city/favorite-city';
import Header from '../header/header';
import {clearFavoritesData} from '../../store/action';
import {fetchFavoriteHotels} from '../../store/api-actions';
import LoadingScreen from '../loading-screen/loading-screen';
import {selectFavoriteOffers, selectFavoritesLoadState} from '../../store/user/selectors';

function FavoritesScreen(props) {
  const dispatch = useDispatch();

  const favoriteOffers = useSelector(selectFavoriteOffers);
  const isFavoritesLoad = useSelector(selectFavoritesLoadState);

  const onFavoriteSelect = () => {
    dispatch(fetchFavoriteHotels());
  };

  const onFavoritesOut = () => {
    dispatch(clearFavoritesData());
  };

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
      const favoriteCityOffers = getFavoriteCityOffers(favoriteOffers);
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

export default FavoritesScreen;
