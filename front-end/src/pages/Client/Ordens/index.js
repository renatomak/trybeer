import React from 'react';
import PropTypes from 'prop-types';

const Ordens = (props) => {
  const details = () => {
    const { history } = props;
    history.push('/orders/1');
  };

  return (
    <div>
      Meus pedidos
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
