import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import TrybeerContext from './TrybeerContext';
import { fetchGetProducts } from '../../requests';

function TrybeerProvider({ children }) {
  const [salesProducts, setSalesProducts] = useState([]);
  const [totalPriceSales, setTotalPriceSales] = useState(0);

  useEffect(() => {
    fetchGetProducts()
      .then((result) => {
        setSalesProducts(result);
      });

    if (localStorage.getItem('totalPriceSales')) {
      setTotalPriceSales(
        JSON.parse(localStorage.getItem('totalPriceSales')),
      );
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('totalPriceSales', JSON.stringify(totalPriceSales) || 0);
  }, [totalPriceSales]);

  const context = {
    salesProducts,
    totalPriceSales,
    setTotalPriceSales };

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
