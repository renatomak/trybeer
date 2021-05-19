import React from 'react';
import logo from './buyBeer.png';

export default (props) => {
  const { width, height } = props;
  return (
    <img src={ logo } alt="logo - BuyBeer" width={ width } height={ height } />
  );
};
