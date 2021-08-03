import React from 'react';
import {Switch, Route, Router} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {AppRoute} from '../../const';
import MainScreen from '../main-screen/main-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import RoomScreen from '../room-screen/room-screen';
import SignInScreen from '../sign-in-screen/sign-in-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import BadRequested from '../bad-requested/bad-requested';
import LoadingScreen from '../loading-screen/loading-screen';
import PrivateRoute from '../private-route/private-route';
import browserHistory from '../../browser-history';
import {selectDataLoadedState} from '../../store/offers/selectors';

function App() {

  const isDataLoaded = useSelector(selectDataLoadedState);

  if (!isDataLoaded) {return <LoadingScreen />;}

  return (
    <Router history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.MAIN}
          render={({history}) => (
            <MainScreen
              onBookmarkButtonClick={() => history.push(AppRoute.LOGIN)}
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
              onBookmarkButtonClick={() => history.push(AppRoute.LOGIN)}
            />
          )}
        >
        </Route>
        <Route exact path={AppRoute.BAD_REQUEST}>
          <BadRequested />
        </Route>
        <Route >
          <NotFoundScreen />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
