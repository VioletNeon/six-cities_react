import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import CitiesListEmpty from '../cities-list-empty/cities-list-empty';

function CitiesList(props) {
  const {activeCity, onCitySelection, cities} = props;
  const isCitiesListEmpty = cities.length === 0;

  return (
    <ul className="locations__list tabs__list">
      {!isCitiesListEmpty ? cities.map(({location, name}) => (
        <li className="locations__item" key={name}>
          <Link className={`locations__item-link tabs__item ${name === activeCity ? 'tabs__item--active' : ''}`} onClick={() => onCitySelection(location, name)} to="#" >
            <span>{name}</span>
          </Link>
        </li>
      ),
      ) : <CitiesListEmpty />}
    </ul>
  );
}

CitiesList.propTypes = {
  activeCity: PropTypes.string.isRequired,
  onCitySelection: PropTypes.func.isRequired,
  cities: PropTypes.array.isRequired,
};

export default memo(CitiesList);
