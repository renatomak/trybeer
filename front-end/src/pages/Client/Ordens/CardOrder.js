import React from 'react';
import PropTypes from 'prop-types';

const CardOrder = (props) => {
  const { order, index } = props;
  const { id, sale_date: saleDate, total_price: totalPrice } = order;

  console.log(order);

  const date = new Date(saleDate);
  const numSlice = -2;
  const mes = (`0${date.getMonth() + 1}`).slice(numSlice);
  const formatDate = `${date.getDate()}/${mes}`;

  console.log(id, saleDate, totalPrice);
  const details = () => {
    const { history } = props;
    history.push('/orders/1');
  };

  const onKeyPressHandler = () => '';

  return (
    <div
      className="containerCardOrder"
      role="button"
      data-testid={ `${index}-order-card-container` }
      onClick={ details }
      onKeyPress={ onKeyPressHandler }
      tabIndex="0"
    >
      <span data-testid={ `${index}-order-number` }>{ `Pedido ${id}` }</span>
      <span data-testid={ `${index}-order-date` }>{formatDate}</span>

      <span
        data-testid={ `${index}-order-total-value` }
      >
        {`R$ ${Number(totalPrice).toFixed(2).replace('.', ',')}`}
      </span>
    </div>);
};

CardOrder.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  order: PropTypes.objectOf({
    id: PropTypes.any,
    sale_date: PropTypes.any,
    total_price: PropTypes.any,
  }).isRequired,
};

export default CardOrder;
