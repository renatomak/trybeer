import PropTypes from 'prop-types';
import React, { useContext, useEffect } from 'react';
import AdminSideBar from '../components/AdminSideBar';
import Card from './Card';
import { TrybeerContext } from '../../util';
import { fetchAdminOrders } from '../../requests';

const AdminOrders = (props) => {
  const { orders, setOrders } = useContext(TrybeerContext);

  const userLogged = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const { history } = props;
    if (!user) {
      return history.push('/login');
    }
  };

  const getOrders = async () => {
    const adminOrders = await fetchAdminOrders();
    setOrders(adminOrders);
  };

  useEffect(() => {
    userLogged();
    getOrders();
  }, []);

  return (
    <div>
      <AdminSideBar title="TryBeer" />
      {orders
        .map(
          (order, index) => (
            <Card order={ order } key={ index } { ...props } index={ index } />),
        ) }
    </div>
  );
};

AdminOrders.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default AdminOrders;
