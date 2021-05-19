import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import TrybeerContext from './TrybeerContext';
import { fetchLogin, fetchGetProducts } from '../../requests';

function TrybeerProvider({ children }) {
  const getCart = JSON.parse(localStorage.getItem('products'));
  const [products, setProducts] = useState(getCart);
  const [shopCart, setShopCart] = useState([]);
  const [orders, setOrders] = useState([]);
  const [salesDetails, setSalesDetails] = useState([]);
  const [amount, setAmount] = useState(0);
  const [loggedInUser, setLoggedInUser] = useState(false);
  const [adminSalesDetails, setAdminSalesDetails] = useState([]);

  useEffect(() => {
    if (products) {
      const total = products
        .reduce((acc, { quantity, price }) => acc + (quantity * price), 0);
      setAmount(total);

      const cart = products.filter(({ quantity }) => quantity > 0);
      setShopCart(cart);
      localStorage.setItem('amount', JSON.stringify(total));
      localStorage.setItem('products', JSON.stringify(products));
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [products]);

  const setLocalProducts = async () => {
    const LocalProducts = await fetchGetProducts().then((itens) => (
      itens.map((item) => {
        const newItem = { ...item, quantity: 0 };
        return newItem;
      })
    ));
    setProducts(LocalProducts);
    localStorage.setItem('products', JSON.stringify(LocalProducts));
  };

  const setLocalUser = async (email, password) => {
    const user = await fetchLogin(email, password);
    localStorage.setItem('user', JSON.stringify(user));
    return user;
  };

  const context = {
    products,
    amount,
    setAmount,
    loggedInUser,
    setLoggedInUser,
    shopCart,
    setShopCart,
    setProducts,
    orders,
    setOrders,
    salesDetails,
    setSalesDetails,
    adminSalesDetails,
    setAdminSalesDetails,
    setLocalProducts,
    setLocalUser };

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
