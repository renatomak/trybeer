import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { fetchGetSalesProducts } from '../../../requests';
import { TrybeerContext } from '../../../util';

const CardOrder = (props) => {
  const { setSalesDetails } = useContext(TrybeerContext);
  const { order, index } = props;
  const { id, sale_date: saleDate, total_price: totalPrice } = order;

  const date = new Date(saleDate);
  const numSlice = -2;
  const mes = (`0${date.getMonth() + 1}`).slice(numSlice);
  const formatDate = `${date.getDate()}/${mes}`;

  const details = async () => {
    const detailsSales = await fetchGetSalesProducts(id);

    console.log('ID: ', id);
    console.log('DetailsSales: ', detailsSales);
    setSalesDetails(detailsSales);

    const { history } = props;
    history.push('/orders/1');
  };

  return (
    <div
      className="containerCardOrder"
      data-testid={ `${index}-order-card-container` }
    >
      <button
        type="button"
        onClick={ details }
        data-testid={ `${index}-order-number` }
      >
        { `Pedido ${id}` }
      </button>
      <span data-testid={ `${index}-order-date` }>{formatDate}</span>

      <span
        data-testid={ `${index}-order-total-value` }
      >
        {`R$ ${Number(totalPrice).toFixed(2).replace('.', ',')}`}
      </span>
      <span id="message" />
    </div>);
};

CardOrder.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  order: PropTypes.objectOf({
    id: PropTypes.any,
    saleDate: PropTypes.any,
    totalPrice: PropTypes.any,
  }).isRequired,
};

export default CardOrder;
