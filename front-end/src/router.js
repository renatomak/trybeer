import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products';
import Profile from './pages/Profile';
import Checkout from './pages/Client/Checkout';
import AdminProfile from './pages/AdminProfile';
import Details from './pages/Client/DetailsOfProducts';
import Orders from './pages/Client/Ordens';
import AdminOrders from './pages/AdminOrders';
import DetailsItens from './pages/AdminDetails/DetailsItens';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={ Login } />
    <Route path="/login" component={ Login } />
    <Route path="/products" component={ Products } />
    <Route path="/register" component={ Register } />
    <Route path="/profile" component={ Profile } />
    <Route exact path="/checkout" component={ Checkout } />
    <Route exact path="/admin/profile" component={ AdminProfile } />
    <Route exact path="/orders/:id_order" component={ Details } />
    <Route exact path="/orders" component={ Orders } />
    <Route exact path="/admin/orders" component={ AdminOrders } />
    <Route exact path="/admin/orders/:id" component={ DetailsItens } />
  </Switch>
);

export default Routes;
