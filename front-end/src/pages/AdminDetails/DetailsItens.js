import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { fetchChangeOrderStatus } from '../../requests';
import { TrybeerContext } from '../../util';
import AdminSideBar from '../components/AdminSideBar';

const DetailsItens = () => {
  const { adminSalesDetails } = useContext(TrybeerContext);
  const [status, setStatus] = useState('');

  const handleClick = async () => {
    const response = await fetchChangeOrderStatus(adminSalesDetails.orderNum);
    if (response.message === 'Status do pedido atualizado com sucesso') {
      setStatus('Entregue');
    }
  };

  useEffect(() => {
    setStatus(adminSalesDetails.orderStatus);
  }, []);

  return (
    <div>
      <AdminSideBar title="TryBeer" />
      <div className="detailsContainer">
        <span
          data-testid="order-number"
        >
          {`Pedido ${adminSalesDetails.orderNum}`}
        </span>
        <span data-testid="order-status">{status}</span>
      </div>
      <div>
        <ul>
          {adminSalesDetails.itens.map((item, index) => (
            <li key={ index } className="detailsContainer">
              <span data-testid={ `${index}-product-qtd` }>{item.itenQuantity}</span>
              <span data-testid={ `${index}-product-name` }>
                {item.itenName}
              </span>
              <span data-testid={ `${index}-order-unit-price` }>
                {`(R$ ${Number(item.itenPriceUn).toFixed(2).replace('.', ',')})`}
              </span>
              <span data-testid={ `${index}-product-total-value` }>
                {`R$ ${Number(item.itenPriceTotal).toFixed(2).replace('.', ',')}`}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <span data-testid="order-total-value">
          {`Total: R$ ${
            Number(adminSalesDetails.orderTotalValue).toFixed(2).replace('.', ',')
          }`}
        </span>
        {status === 'Pendente'
          ? (
            <button
              type="button"
              data-testid="mark-as-delivered-btn"
              onClick={ handleClick }
            >
              Marcar como entregue
            </button>)
          : <div />}
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
