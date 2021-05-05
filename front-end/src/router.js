import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Products from './pages/Products';
import Register from './pages/Register';

const Routes = () => (
  <main>
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route path="/login" component={ Login } />
      <Route path="/admin/orders" component={ Home } />
      <Route path="/products" component={ Products } />
      <Route path="/register" component={ Register } />
    </Switch>
  </main>
);

export default Routes;
