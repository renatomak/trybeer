import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { IoIosRemove, IoIosAdd } from 'react-icons/io';
import { CardContainer, Price, CardImg, BtnContainer } from './styledCard';

const Card = (props) => {
  const { product, index } = props;
  const { name, price, image } = product;
  const [total, setTotal] = useState(1);

  const hadleChange = (type) => {
    if (type === 'plus') setTotal(total + 1);
    if (type === 'minus') setTotal(total - 1);
    console.log(total);
  };

  return (
    <CardContainer>
      <Price data-testid="0-product-price">
        <span>{`R$ ${price}`}</span>
      </Price>
      <CardImg data-testid={ `${index}-product-img` }>
        <img alt="card" src={ image } />
        <figcaption data-testid={ `${index}-product-name` }>{name}</figcaption>
      </CardImg>
      <BtnContainer>
        <button
          type="button"
          className="btn"
          data-testid={ `${index}-product-minus` }
          name="minus"
          onClick={ () => hadleChange('minus') }
        >
          <IoIosRemove />
        </button>
        <input type="text" value={ total } data-testid={ `${index}-product-qtd` } />
        <button
          type="button"
          className="btn"
          data-testid={ `${index}-product-plus` }
          name="plus"
          onClick={ () => hadleChange('plus') }
        >
          <IoIosAdd />
        </button>
      </BtnContainer>
    </CardContainer>
  );
};

Card.propTypes = {
  index: PropTypes.string.isRequired,
  product: PropTypes.shape({
    image: PropTypes.any,
    name: PropTypes.any,
    price: PropTypes.any,
  }).isRequired,
};

export default Card;
