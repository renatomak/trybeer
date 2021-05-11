import PropTypes from 'prop-types';
import React, { useContext, useEffect } from 'react';
import SideBar from '../../components/SideBar';
import CardOrder from './CardOrder';
import { TrybeerContext } from '../../../util';
import { fetchGetOrders } from '../../../requests';

const Ordens = (props) => {
  const { orders, setOrders } = useContext(TrybeerContext);

  const getOrders = async () => {
    const listOrders = await fetchGetOrders();
    console.log(listOrders);
    setOrders([listOrders]);
  };

  useEffect(() => {
    getOrders();
  }, []);

  const userLogged = () => {
    const { history } = props;
    const user = localStorage.getItem('user');
    if (!user) {
      return history.push('/login');
    }
  };
  userLogged();

  return (
    <div>
      <SideBar title="Meus Pedidos" />
      Meus pedidos
      {orders
        .map(
          (order, index) => (
            <CardOrder order={ order } key={ order.id } { ...props } index={ index } />),
        ) }

    </div>
  );
};

Ordens.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Ordens;
