import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import FavoriteCity from '../favorite-city/favorite-city';

function FavoritesScreen(props) {
  const {offers} = props;

  const cityOffers = {};

  offers.forEach((offer) => {
    if (!offer.isFavorite) {
      return;
    }
    if (!cityOffers[offer.city.name]) {
      cityOffers[offer.city.name] = [];
    }
    cityOffers[offer.city.name].push(offer);
  });

  const favoriteCityOffers = Object.entries(cityOffers);

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to="main.html">
                <img className="header__logo" src={'img/logo.svg'} alt="6 cities logo" width="81" height="41"/>
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to="#">
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

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {favoriteCityOffers.map(([city, favoriteOffers]) => <FavoriteCity city={city} favoriteOffers={favoriteOffers} key={city}/>)}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to="main.html">
          <img className="footer__logo" src={'img/logo.svg'} alt="6 cities logo" width="64" height="33"/>
        </Link>
      </footer>
    </div>
  );
}

FavoritesScreen.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    isFavorite: PropTypes.bool.isRequired,
    city: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired).isRequired,
};


export default FavoritesScreen;
