import React from 'react';
import PropTypes from 'prop-types';
import { fetchChangeOrderStatus } from '../../requests';

const DetailsItens = (props) => {
  const { adminSalesDetails } = props;
  const salesTotalPrice = adminSalesDetails
    .reduce(
      (acc, { orderTotalValue }) => acc + (parseFloat(orderTotalValue)), 0,
    );

  const handleClick = async () => {
    await fetchChangeOrderStatus();
  };

  return (
    <div>
      <div className="detailsContainer">
        <span
          data-testid="order-number"
        >
          {`Pedido ${adminSalesDetails[0].orderNum}`}
        </span>
        <span data-testid="order-status">{`${adminSalesDetails[0].orderStatus}`}</span>
      </div>
      <div>
        <ul>
          {adminSalesDetails.map(({ itens }, index) => (
            <li key={ index } className="detailsContainer">
              <span data-testid={ `${index}-product-qtd` }>{itens.itenQuantity}</span>
              <span data-testid={ `${index}-product-name` }>
                {itens.itenName}
              </span>
              <span data-testid={ `${index}-order-unit-price` }>
                {itens.itenPriceUn}
              </span>
              <span data-testid={ `${index}-product-total-value` }>
                {`R$ ${itens.itenPriceTotal}`}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <span data-testid="order-total-value">
          {`Total: R$ ${Number(salesTotalPrice).toFixed(2).replace('.', ',')}`}
        </span>
        <button
          type="button"
          data-testid="mark-as-delivered-btn"
          onClick={ handleClick }
        >
          Marcar pedido como entregue
        </button>
      </div>
    </div>
  );
};

DetailsItens.propTypes = {
  adminSalesDetails: PropTypes.shape({
    map: PropTypes.func,
    reduce: PropTypes.func,
  }).isRequired,
};

export default DetailsItens;
