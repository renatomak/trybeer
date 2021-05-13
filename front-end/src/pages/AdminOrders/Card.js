import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { fetchAdminOrder } from '../../requests';
import { TrybeerContext } from '../../util';

const Card = (props) => {
  const { setAdminSalesDetails } = useContext(TrybeerContext);
  const { order, index } = props;
  const { orderNum, orderValue, orderAddress, orderAddressNum, status } = order;

  const details = async () => {
    const detailsSales = await fetchAdminOrder(orderNum);
    console.log(detailsSales);
    setAdminSalesDetails(detailsSales);
    const { history } = props;
    history.push(`/admin/orders/${orderNum}`);
  };

  const onKeyPressHandler = () => '';

  return (
    <div
      role="button"
      data-testid={ `${index}-order-card-container` }
      onClick={ details }
      onKeyPress={ onKeyPressHandler }
      tabIndex="0"
    >
      <span data-testid={ `${index}-order-number` }>{ `Pedido ${orderNum}` }</span>
      <span data-testid={ `${index}-order-address` }>
        {`${orderAddress}, ${orderAddressNum}`}
      </span>

      <span
        data-testid={ `${index}-order-total-value` }
      >
        {`R$ ${Number(orderValue).toFixed(2).replace('.', ',')}`}
      </span>
      <span data-testid={ `${index}-order-status` }>{status}</span>
    </div>);
};

Card.propTypes = {
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

export default Card;
