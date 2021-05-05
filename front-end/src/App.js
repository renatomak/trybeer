import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import SideBar from './pages/components/SideBar';
import Routes from './router';
/** FONTE: https://gist.github.com/Rajdeepc/aca3300d602b96eced3d76f60cef5e99#file-showhidenav_reactrouter-js */
const App = ({ location }) => (
  <div>
    {location.pathname !== '/login' && location.pathname !== '/' && <SideBar />}
    <Routes />
  </div>
);

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
};

App.defaultProps = {
  location: {
    pathname: '',
  },
};
export default withRouter(App);
