import React from 'react';
import {Link} from 'react-router-dom';

function NotFoundScreen() {
  return (
    <div className="page">
      <main className="page__main page__main--index">
        <section className="locations container">
          <h1>404. Page not found</h1>
          <Link className="header__nav-link" to="/">Вернуться на главную</Link>
        </section>
      </main>
    </div>
  );
}

export default NotFoundScreen;
