import React from 'react';
import PropTypes from 'prop-types';
import MainScreen from '../main-screen/main-screen';

function App(props) {
  const {offerCount} = props;
  return (
    <MainScreen offerCount={offerCount}/>
  );
}

App.propTypes = {
  offerCount: PropTypes.number.isRequired,
};

export default App;
