import PropTypes from 'prop-types';
import React, { useState, useContext, useEffect } from 'react';
import { TrybeerContext } from '../../util';
import { CardContainer, Price, DivImg, DivControlers, BtnContainer } from './Styled';

const Card = (props) => {
  const { setProducts, products } = useContext(TrybeerContext);
  const { product: { name, price, quantity }, index } = props;

  const [qtdProduct, setQtdProduct] = useState(quantity);

  const hadleChange = (type) => {
    if (type === 'plus') {
      setQtdProduct(qtdProduct + 1);
    }

    if (type === 'minus' && qtdProduct > 0) {
      setQtdProduct(qtdProduct - 1);
    }
  };

  useEffect(() => {
    const cart = [...products];
    cart[index].quantity = qtdProduct;
    setProducts(cart);
  }, [qtdProduct]);

  return (
    <CardContainer>
      <DivImg data-testid={ `${index}-product-img` }>
        <img alt="card" src={ `/images/${name}.jpg` } />
      </DivImg>
      <DivControlers>
        <p data-testid={ `${index}-product-name` }>{name}</p>
        <Price data-testid={ `${index}-product-price` }>
          <span>{`R$ ${price.replace('.', ',')}`}</span>
        </Price>
        <BtnContainer>
          <button
            type="button"
            className="btn"
            data-testid={ `${index}-product-minus` }
            name="minus"
            onClick={ () => hadleChange('minus') }
          >
            <img alt="card" src="/images/arrow-minus.png" />
          </button>
          <span data-testid={ `${index}-product-qtd` }>
            { quantity }
          </span>
          <button
            type="button"
            className="btn"
            data-testid={ `${index}-product-plus` }
            name="plus"
            onClick={ () => hadleChange('plus') }
          >
            <img alt="card" src="/images/arrow-plus.png" />
          </button>
        </BtnContainer>
      </DivControlers>
    </CardContainer>
  );
};

Card.propTypes = {
  index: PropTypes.string.isRequired,
  product: PropTypes.shape({
    id: PropTypes.any,
    quantity: PropTypes.any,
    name: PropTypes.any,
    price: PropTypes.any,
  }).isRequired,
};

export default Card;
