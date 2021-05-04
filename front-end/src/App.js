import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Products from './pages/Products';
import Register from './pages/Register';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route path="/login" component={ Login } />
      <Route path="/admin" component={ Home } />
      <Route path="/products" component={ Products } />
      <Route path="/register" component={ Register } />
    </Switch>
  );
}

export default App;
