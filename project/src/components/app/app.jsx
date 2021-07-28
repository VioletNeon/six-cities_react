import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, Router} from 'react-router-dom';
import {connect} from 'react-redux';
import {AppRoute} from '../../const';
import MainScreen from '../main-screen/main-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import RoomScreen from '../room-screen/room-screen';
import SignInScreen from '../sign-in-screen/sign-in-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import LoadingScreen from '../loading-screen/loading-screen';
import PrivateRoute from '../private-route/private-route';
import browserHistory from '../../browser-history';
import {getDataLoadedState} from '../../store/offers/selectors';

function App({isDataLoaded}) {

  if (!isDataLoaded) {return <LoadingScreen />;}

  return (
    <Router history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.MAIN}
          render={({history}) => (
            <MainScreen
              onBookmarkButtonClick={() => history.push(AppRoute.FAVORITES)}
            />
          )}
        >
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <SignInScreen />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.FAVORITES}
          render={() => <FavoritesScreen />}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.ROOM}
          render={({history}) => (
            <RoomScreen
              onBookmarkButtonClick={() => history.push(AppRoute.FAVORITES)}
            />
          )}
        >
        </Route>
        <Route path={AppRoute.NOT_FOUND} >
          <NotFoundScreen />
        </Route>
      </Switch>
    </Router>
  );
}

App.propTypes = {
  isDataLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isDataLoaded: getDataLoadedState(state),
});

export {App};
export default connect(mapStateToProps, null)(App);

