import React from 'react';
import {Link} from 'react-router-dom';
import FavoriteCard from '../favorite-card/favorite-card';
import PropTypes from 'prop-types';

function FavoriteCity(props) {
  const {favoriteOffers} = props;
  const [name, offers] = favoriteOffers;

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to="#">
            <span>{name}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((offer) => <FavoriteCard offer={offer} key={offer.id}/>)}
      </div>
    </li>
  );
}

FavoriteCity.propTypes = {
  favoriteOffers: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

export default FavoriteCity;
