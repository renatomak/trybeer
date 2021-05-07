import React from 'react';
import SideBar from '../../components/SideBar';
import data from './data';

const Details = () => {
  let total = 0;
  return (
    <div>
      <SideBar title="Detalhes de Pedido" />
      <div>
        <div>
          <span data-testid="order-number">Pedido 1</span>
          <span data-testid="order-date">08/09</span>
        </div>
        <div>
          <ul>
            {data.map((item, index) => {
              total += parseFloat(item.price);
              return (
                <li key={ index }>
                  <span data-testid={ `${index}-product-qtd` }>{item.quantity}</span>
                  <span data-testid={ `${index}-product-name` }>
                    {item.name}
                  </span>
                  <span data-testid={ `${index}-product-total-value` }>
                    {item.price}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <span data-testid="order-total-value">
            {`Total: R$ ${total}`}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Details;
