import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Setting = {
  offerCount: 5,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      offerCount={Setting.offerCount}
    />
  </React.StrictMode>,
  document.getElementById('root'));
