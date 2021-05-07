import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Products from './pages/Products';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Checkout from './pages/Client/Checkout';
import AdminProfile from './pages/AdminProfile';
import Details from './pages/Client/DetailsOfProducts';
import Orders from './pages/Client/Ordens';

const Routes = () => (
  <main>
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route path="/login" component={ Login } />
      <Route exact path="/admin/orders" component={ Home } />
      <Route path="/products" component={ Products } />
      <Route path="/register" component={ Register } />
      <Route path="/profile" component={ Profile } />
      <Route exact path="/checkout" component={ Checkout } />
      <Route exact path="/admin/profile" component={ AdminProfile } />
      <Route exact path="/orders/:id_order" component={ Details } />
      <Route exact path="/orders" component={ Orders } />
    </Switch>
  </main>
);

export default Routes;
