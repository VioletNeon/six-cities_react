import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

export default function CitiesList(props) {
  const {activeCity, onCitySelection, cities} = props;
  return (
    <ul className="locations__list tabs__list">
      {cities.map(({location, name}) => (
        <li className="locations__item" key={name}>
          <Link
            className={`locations__item-link tabs__item
            ${name === activeCity ? 'tabs__item--active' : ''}`}
            onClick={() => onCitySelection(location, name)}
            to="#"
          >
            <span>{name}</span>
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
