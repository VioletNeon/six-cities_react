import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {SortTypes} from '../../const';

export default function SortOption(props) {
  const [open, setOpen] = useState(false);
  const {sortType, onSortTypeAction} = props;
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by  </span>
      <span className="places__sorting-type" tabIndex="0" onClick={() => setOpen(true)}>
        {sortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"/>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${open && 'places__options--opened'}`}>
        {Object.values(SortTypes).map((type) => <li className={`places__option ${type === sortType ? 'places__option--active' : ''}`} onClick={(evt) => {onSortTypeAction(evt.currentTarget.dataset.sortType); setOpen(false);}} data-sort-type={type} tabIndex="0" key={type}>{type}</li>)}
      </ul>
    </form>
  );
}

SortOption.propTypes = {
  sortType: PropTypes.string.isRequired,
  onSortTypeAction: PropTypes.func.isRequired,
};
