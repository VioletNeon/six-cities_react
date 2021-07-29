import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {AppRoute} from './const';
import rootReducer from './store/root-reducer';
import App from './components/app/app';
import {createAPI} from './services/api';
import {redirectToRoute} from './store/action';
import {checkAuth, fetchHotelsList} from './store/api-actions';
import {redirect} from './store/middlewares/redirect';

const api = createAPI(
  () => store.dispatch(redirectToRoute(AppRoute.LOGIN)),
);

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
    applyMiddleware(redirect),
  ),
);

store.dispatch(checkAuth());
store.dispatch(fetchHotelsList());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
