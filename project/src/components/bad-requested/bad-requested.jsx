import React from 'react';
import {Link} from 'react-router-dom';

function BadRequested() {
  return (
    <div className="page">
      <main className="page__main page__main--index">
        <section className="locations container">
          <h1>400. Bad request. Что-то пошло не так</h1>
          <Link className="header__nav-link" to="/">Попробовать еще раз</Link>
        </section>
      </main>
    </div>
  );
}

export default BadRequested;
