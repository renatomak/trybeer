import React from 'react';
import { withRouter } from 'react-router-dom';
import Routes from './router';

const App = () => (
  <div>
    <Routes />
  </div>
);

export default withRouter(App);
