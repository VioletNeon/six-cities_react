import PropTypes from 'prop-types';

export default PropTypes.arrayOf(PropTypes.shape({
  images: PropTypes.array.isRequired,
  isPremium: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  rating: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  bedrooms: PropTypes.number,
  maxAdults: PropTypes.number,
  price: PropTypes.number,
  goods: PropTypes.array.isRequired,
  host: PropTypes.shape({
    avatarUrl: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    isPro: PropTypes.bool.isRequired,
  }),
  city: PropTypes.shape({
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired,
    }),
  }),
})).isRequired;
