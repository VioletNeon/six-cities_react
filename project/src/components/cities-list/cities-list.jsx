import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

export default function CitiesList(props) {
  const {activeCity, onCitySelection, cities} = props;
  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <li className="locations__item" key={city}>
          <Link className={`locations__item-link tabs__item ${city === activeCity ? 'tabs__item--active' : ''}`} data-city={city} onClick={(evt) => onCitySelection(evt.currentTarget.dataset.city)} to="#">
            <span>{city}</span>
          </Link>
        </li>
      ),
      )}
    </ul>
  );
}

CitiesList.propTypes = {
  activeCity: PropTypes.string.isRequired,
  onCitySelection: PropTypes.func.isRequired,
  cities: PropTypes.array.isRequired,
};
