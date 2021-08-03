import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {useParams, useLocation} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {APIRoute, AuthorizationStatus} from '../../const';
import {capitalizeFirstLetter} from '../../utils';
import Comments from '../comments/comments';
import ReviewsList from '../reviews-list/reviews-list';
import Map from '../map/map';
import OfferCardsList from '../offer-cards-list/offer-cards-list';
import {changeActiveCardId, clearHotelData} from '../../store/action';
import {fetchHotel, fetchNearbyHotels, fetchComments, markFavoriteInCard} from '../../store/api-actions';
import LoadingScreen from '../loading-screen/loading-screen';
import Header from '../header/header';
import {selectOffer, selectNearbyOffers, selectComments} from '../../store/offer-data/selectors';
import {selectAuthorizationStatus} from '../../store/user/selectors';
import {selectActiveCardId} from '../../store/active-card/selectors';

const MAX_NEARBY_OFFERS = 3;
const STAR_RATING_PART = 20;

function RoomScreen(props) {
  const {onBookmarkButtonClick} = props;

  const offer = useSelector(selectOffer);
  const nearbyOffers = useSelector(selectNearbyOffers).slice(0, MAX_NEARBY_OFFERS);
  const comments = useSelector(selectComments);
  const authorizationStatus = useSelector(selectAuthorizationStatus);
  const activeCardId = useSelector(selectActiveCardId);
  const dispatch = useDispatch();

  const onActiveCardChange = (cardId) => {
    dispatch(changeActiveCardId(cardId));
  };

  const {id} = useParams();
  const hotelUrl = useLocation().pathname;

  useEffect(() => {
    dispatch(fetchHotel(hotelUrl));
    dispatch(fetchNearbyHotels(`${hotelUrl}/nearby`));
    dispatch(fetchComments(APIRoute.COMMENTS + id));
    return () => {
      dispatch(clearHotelData());
    };
  }, [dispatch, id, hotelUrl]);

  const [hotel] = offer;
  if (!hotel) { return <LoadingScreen />; }

  const {
    images, isPremium, title,
    isFavorite, rating, type,
    bedrooms, maxAdults, price,
    goods, host, description,
    city,
  } = hotel;

  const {latitude, longitude, zoom} = city.location;

  const cityMap = {
    lat: latitude,
    lng: longitude,
    zoom: zoom,
  };

  const favoriteCardURL = `${APIRoute.FAVORITE}/${id}/${Number(!isFavorite)}`;

  const handleFavoriteCLick = () => {
    authorizationStatus === AuthorizationStatus.NO_AUTH ? onBookmarkButtonClick() : dispatch(markFavoriteInCard(favoriteCardURL));
  };

  const {avatarUrl, isPro, name} = host;

  const nearbyMapOffers = [...nearbyOffers, {...hotel, isCurrentOffer: true}];

  return (
    <div className="page">
      <Header props={props} />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.map((imageSrc) => (
                <div className="property__image-wrapper" key={imageSrc}>
                  <img className="property__image" src={imageSrc} alt="studio"/>
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
                <button
                  className={`property__bookmark-button button ${isFavorite && 'property__bookmark-button--active'}`}
                  type="button"
                  onClick={handleFavoriteCLick}
                >
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark">
                    </use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${Math.round(rating)*STAR_RATING_PART}%`}}>
                  </span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {capitalizeFirstLetter(type)}
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
                  {goods.map((item) => <li className="property__inside-item" key={item}>{item}</li>)}
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
            <Map city={cityMap} activeCityPoints={nearbyMapOffers} activeCardId={activeCardId}/>
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <OfferCardsList
              activeCityOffers={nearbyOffers}
              isNearPlaces
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
  onBookmarkButtonClick: PropTypes.func.isRequired,
};

export default RoomScreen;
