import {ActionCreator} from './action';
import {AuthorizationStatus, APIRoute} from '../const';
import {adaptToClient} from '../utils';

const fetchHotelsList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.HOTELS)
    .then(({data}) => {
      dispatch(ActionCreator.loadHotels(data.map((dataItem) => adaptToClient(dataItem))));
    })
);

const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export {fetchHotelsList, checkAuth};
