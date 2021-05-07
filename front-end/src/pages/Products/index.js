import React, { useContext } from 'react';
import { Container } from './styled';
import { TrybeerContext } from '../../util';
import data from './data';
import Card from './Card';

export default () => {
  const { salesProducts } = useContext(TrybeerContext);

  return (
    <div>
      <Container>
        {data.map((product, index) => <Card product={ product } key={ index } />)}
      </Container>
      <button
        type="button"
        data-testid="checkout-bottom-btn"
      >
        Ver carrinho
        <span data-testid="checkout-bottom-btn-value">
          {`R$  ${salesProducts} `}
        </span>
      </button>
    </div>
  );
};
