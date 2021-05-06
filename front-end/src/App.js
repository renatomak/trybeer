import React from 'react';
import { withRouter } from 'react-router-dom';
import Routes from './router';
/** FONTE: https://gist.github.com/Rajdeepc/aca3300d602b96eced3d76f60cef5e99#file-showhidenav_reactrouter-js */
const App = () => (
  <div>
    <Routes />
  </div>
);

export default withRouter(App);
