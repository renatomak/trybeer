import React, { useContext } from 'react';
import { TrybeerContext } from '../../../util';
import LineProduct from './LineProduct';
import { ListContainer, Ul } from './ListProductsStyled';

function ListProducts() {
  const { shopCart } = useContext(TrybeerContext);

  return (
    <ListContainer>
      <h1>Produtos</h1>
      <Ul>
        {shopCart.map((product, index) => (
          <LineProduct item={ product } index={ index } key={ product.id } />
        ))}
      </Ul>
    </ListContainer>
  );
}

export default ListProducts;
