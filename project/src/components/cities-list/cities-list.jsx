import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {cities} from '../../const';
import {ActionCreator} from '../../store/action';

function CitiesList({citiesOffers}) {
  const {activeCity, onCitySelection} = citiesOffers;
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
  citiesOffers: PropTypes.shape({
    activeCity: PropTypes.string.isRequired,
    onCitySelection: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  activeCity: state.city,
});

const mapDispatchToProps = (dispatch) => ({
  onCitySelection(city) {
    dispatch(ActionCreator.changeCityOffers(city));
  },
});

export {CitiesList};
export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
