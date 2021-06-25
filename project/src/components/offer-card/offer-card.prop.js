import PropTypes from 'prop-types';

export default PropTypes.shape({
  isPremium: PropTypes.bool.isRequired,
  previewImage: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  rating: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
}).isRequired;
