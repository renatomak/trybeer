import React from 'react';
import PropTypes from 'prop-types';

const CardOrder = (props) => {
  const { order: { id, totalPrice, saleDate }, index } = props;

  const details = () => {
    const { history } = props;
    history.push('/orders/1');
  };
  return (
    <button
      type="button"
      data-testid={ `${index}-order-card-container` }
      onClick={ details }
    >
      <span data-testid={ `${index}-order-number` }>{ `Pedido ${id}` }</span>
      <span data-testid={ `${index}-order-date` }>{saleDate}</span>

      <span data-testid={ `${index}-order-total-value` }>{`R$ ${totalPrice}`}</span>
    </button>);
};

CardOrder.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  order: PropTypes.arrayOf
};

export default CardOrder;
