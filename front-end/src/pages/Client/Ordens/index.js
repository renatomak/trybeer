import React from 'react';
import PropTypes from 'prop-types';
import SideBar from '../../components/SideBar';
import CardOrder from './CardOrder';
import data from './data';

const Ordens = () => {
  return (
    <div>
      <SideBar title="Meus Pedidos" />
      Meus pedidos
      {data
        .map((order, index) => (<CardOrder
          order={ order }
          key={ order.id }
          index={ index }
        />)) }
    </div>
  );
};

export default Ordens;
