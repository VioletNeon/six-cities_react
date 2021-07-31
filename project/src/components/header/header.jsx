import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {AppRoute, AuthorizationStatus} from '../../const';
import {logout} from '../../store/api-actions';
import {selectAuthorizationStatus, selectAuthInfo} from '../../store/user/selectors';

function Header() {
  const authorizationStatus = useSelector(selectAuthorizationStatus);
  const authInfo = useSelector(selectAuthInfo);
  const dispatch = useDispatch();

  const [{email, avatarUrl, name}] = authInfo;
  const isAuthorized = authorizationStatus === AuthorizationStatus.AUTH;

  const onSignOutClick = () => {
    dispatch(logout());
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link
              className={`header__logo-link ${isAuthorized && 'header__logo-link--active'}`}
              to="/"
            >
              <img className="header__logo" src={'img/logo.svg'} alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link
                  className="header__nav-link header__nav-link--profile"
                  to={!isAuthorized ? AppRoute.LOGIN : AppRoute.FAVORITES}
                >
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                    {avatarUrl ?
                      (<img className="user__avatar" width="54" height="54" src={avatarUrl} alt={`avatar ${name}`}/>) : ''}
                  </div>
                  {email ? <span className="header__user-name user__name">{email}</span> : <span className="header__login">Sign in</span>}
                </Link>
              </li>
              {isAuthorized && (
                <li className="header__nav-item">
                  <Link className="header__nav-link" to="#" onClick={onSignOutClick}>
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
