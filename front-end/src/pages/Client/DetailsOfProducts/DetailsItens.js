import React from 'react';
import PropTypes from 'prop-types';

const DetailsItens = (props) => {
  const { salesDetails } = props;
  console.log(salesDetails)
  const salesTotalPrice = salesDetails
    .reduce(
      (acc, { quantity, price }) => acc + (parseFloat(quantity) * parseFloat(price)), 0,
    );

  return (
    <div>
      <div className="detailsContainer">
        <span data-testid="order-number">{`Pedido ${salesDetails[0].saleId}`}</span>
        <span data-testid="order-date">{`${salesDetails[0].saleDate}`}</span>
      </div>
      <div>
        <ul>
          {salesDetails.map(({ price, quantity, name }, index) => {
            const salesPrice = (price * quantity).toFixed(2).replace('.', ',');
            return (
              <li key={ index } className="detailsContainer">
                <span data-testid={ `${index}-product-qtd` }>{quantity}</span>
                <span data-testid={ `${index}-product-name` }>
                  {name}
                </span>
                <span data-testid={ `${index}-product-total-value` }>
                  {`R$ ${salesPrice}`}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <span data-testid="order-total-value">
          {`Total: R$ ${Number(salesTotalPrice).toFixed(2).replace('.', ',')}`}
        </span>
      </div>
    </div>
  );
};

DetailsItens.propTypes = {
  salesDetails: PropTypes.shape({
    map: PropTypes.func,
    reduce: PropTypes.func,
  }).isRequired,
};

export default DetailsItens;
