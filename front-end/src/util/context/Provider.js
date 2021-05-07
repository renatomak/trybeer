import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TrybeerContext from './TrybeerContext';

function TrybeerProvider({ children }) {
  const [salesProducts, setSalesProducts] = useState('');

  function fetchGetAllSalesProducts() {
    const endpoint = `${process.env.REACT_APP_ENDPOINT}login`;
    console.log(endpoint);

    return fetch(
      endpoint,
      {
        method: 'GET',
        headers: { 'Content-type': 'application/json' },
      },
    )
      .then((response) => response.json())
      .then((data) => {
        setSalesProducts(data);
      })
      .catch((err) => console.log(err.message));
  }

  const context = {
    fetchGetAllSalesProducts,
    salesProducts };

  return (
    <TrybeerContext.Provider value={ context }>
      { children }
    </TrybeerContext.Provider>
  );
}

export { TrybeerContext, TrybeerProvider as Provider };

TrybeerProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
