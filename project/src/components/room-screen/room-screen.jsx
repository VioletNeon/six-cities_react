import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Link, useParams, useLocation} from 'react-router-dom';
import {connect} from 'react-redux';
import {AppRoute, AuthorizationStatus} from '../../const';
import {generateKey, toUpperFirstLetter} from '../../utils';
import Comments from '../comments/comments';
import ReviewsList from '../reviews-list/reviews-list';
import Map from '../map/map';
import OfferCardsList from '../offer-cards-list/offer-cards-list';
import {ActionCreator} from '../../store/action';
import {fetchHotel, fetchNearbyHotels, fetchComments} from '../../store/api-actions';
import LoadingScreen from '../loading-screen/loading-screen';
import roomScreenProp from './room-screen.prop';

function RoomScreen(props) {
  const {
    nearbyOffers,
    onActiveCardChange,
    onBookmarkButtonClick,
    offer, onHotelSelect,
    authorizationStatus,
    onHotelClearData,
    comments,
    activeCardId,
  } = props;

  const {id} = useParams();
  const hotelURL = useLocation().pathname;
  const nearbyHotelsURL =  `${hotelURL}/nearby`;
  const commentsURL = AppRoute.COMMENTS + id;

  useEffect(() => {
    onHotelSelect(hotelURL, nearbyHotelsURL, commentsURL);
    return onHotelClearData;
  }, [id]);

  const [hotel] = offer;
  if (!hotel) { return <LoadingScreen />; }

  const {
    images, isPremium, title,
    isFavorite, rating, type,
    bedrooms, maxAdults, price,
    goods, host, description,
    city: {location},
  } = hotel;

  const {latitude, longitude, zoom} = location;

  const cityMap = {
    lat: latitude,
    lng: longitude,
    zoom: zoom,
  };

  const {avatarUrl, isPro, name} = host;

  const threeNearbyOffers = nearbyOffers.slice(0, 3);
  const isNearPlaces = true;
  const getRoomScreenKey = generateKey();
  const offersMap = [...threeNearbyOffers, {...hotel, isCurrentOffer: true}];

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

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.map((imageSrc) => (
                <div className="property__image-wrapper" key={getRoomScreenKey()}>
                  <img className="property__image" src={imageSrc} alt="Photo studio"/>
                </div>
              ),
              )}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium && <div className="property__mark"><span>Premium</span></div>}
              <div className="property__name-wrapper">
                <h1 className="property__name">{title}</h1>
                <button className={`property__bookmark-button button ${isFavorite && 'property__bookmark-button--active'}`} type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark">
                    </use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${Math.round(rating)*20}%`}}>
                  </span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {toUpperFirstLetter(type)}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goods.map((item) => <li className="property__inside-item" key={getRoomScreenKey()}>{item}</li>)}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={avatarUrl} width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="property__user-name">
                    {name}
                  </span>
                  {isPro && <span className="property__user-status">Pro</span>}
                </div>
                <div className="property__description">
                  <p className="property__text">{description}</p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <ReviewsList reviews={comments}/>
                {authorizationStatus === AuthorizationStatus.AUTH && <Comments commentID={id}/>}
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map city={cityMap} activeCityPoints={offersMap} activeCardId={activeCardId}/>
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <OfferCardsList
              activeCityOffers={threeNearbyOffers}
              isNearPlaces={isNearPlaces}
              onCardHover={onActiveCardChange}
              onBookmarkButtonClick={onBookmarkButtonClick}
            />
          </section>
        </div>
      </main>
    </div>
  );
}

RoomScreen.propTypes = {
  offer: roomScreenProp,
  comments: PropTypes.array.isRequired,
  nearbyOffers: PropTypes.array.isRequired,
  onActiveCardChange: PropTypes.func.isRequired,
  onBookmarkButtonClick: PropTypes.func.isRequired,
  onHotelSelect: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  onHotelClearData: PropTypes.func.isRequired,
  activeCardId: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  offer: state.offer,
  nearbyOffers: state.nearbyOffers,
  comments: state.comments,
  authorizationStatus: state.authorizationStatus,
  activeCardId: state.activeCardId,
});

const mapDispatchToProps = (dispatch) => ({
  onActiveCardChange(activeCardId) {
    dispatch(ActionCreator.changeActiveCardId(activeCardId));
  },
  onHotelSelect(hotelURL, nearbyHotelURL, commentsURL) {
    dispatch(fetchHotel(hotelURL));
    dispatch(fetchNearbyHotels(nearbyHotelURL));
    dispatch(fetchComments(commentsURL));
  },
  onHotelClearData() {
    dispatch(ActionCreator.clearHotelData());
  },
});

export {RoomScreen};
export default connect(mapStateToProps, mapDispatchToProps)(RoomScreen);
