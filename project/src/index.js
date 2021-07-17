import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {AuthorizationStatus} from './const';
import {reducer} from './store/reducer';
import reviews from './mocks/reviews';
import offers from './mocks/offers';
import App from './components/app/app';
import {createAPI} from './services/api';
import {ActionCreator} from './store/action';
import {checkAuth, fetchHotelsList} from './store/api-actions';

const api = createAPI(
  () => store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)),
);

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api))));

store.dispatch(checkAuth());
store.dispatch(fetchHotelsList());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        reviews={reviews}
        offers={offers}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
