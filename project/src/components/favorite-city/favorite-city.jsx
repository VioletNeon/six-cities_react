import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import FavoriteCard from '../favorite-card/favorite-card';

function FavoriteCity(props) {
  const {city, favoriteOffers} = props;
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to="#">
            <span>{city}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {favoriteOffers.map((offer) => <FavoriteCard offer={offer} key={offer.id}/>)}
      </div>
    </li>
  );
}

FavoriteCity.propTypes = {
  city: PropTypes.string.isRequired,
  favoriteOffers: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default FavoriteCity;
