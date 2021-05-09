import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import SideBar from '../../components/SideBar';
import CardOrder from './CardOrder';
import { TrybeerContext } from '../../../util';

const Ordens = (props) => {
  const { shopCart } = useContext(TrybeerContext);
  const details = () => {
    const { history } = props;
    history.push('/orders/1');
  };

  return (
    <div>
      <SideBar title="Meus Pedidos" />
      Meus pedidos
      {shopCart.map((order) => <CardOrder order={ order } key={ order.id } />) }
      <button type="button" onClick={ details }>
        Pedido 1
      </button>
    </div>
  );
};

Ordens.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Ordens;
