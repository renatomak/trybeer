import PropTypes from 'prop-types';
import React, { useState, useContext } from 'react';
/* import { IoIosRemove, IoIosAdd } from 'react-icons/io'; */
import { TrybeerContext } from '../../util';
import { CardContainer, Price, CardImg, BtnContainer } from './styledCard';

const Card = (props) => {
  const { totalPriceSales, setTotalPriceSales } = useContext(TrybeerContext);
  const [qtdProduct, setQtdProduct] = useState(0);

  const { product, index } = props;
  const { name, price } = product;

  const hadleChange = (type) => {
    if (type === 'plus') {
      setQtdProduct(qtdProduct + 1);
      setTotalPriceSales(parseFloat(totalPriceSales) + parseFloat(price));
    }
    if (type === 'minus' && qtdProduct > 0) {
      setQtdProduct(qtdProduct - 1);
      setTotalPriceSales(parseFloat(totalPriceSales) - parseFloat(price));
    }
  };

  return (
    <CardContainer>
      <Price data-testid={ `${index}-product-price` }>
        <span>{`R$ ${price.replace('.', ',')}`}</span>
      </Price>
      <CardImg data-testid={ `${index}-product-img` }>
        <img alt="card" src={ `/images/${name}.jpg` } />
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
          -
          {/* <IoIosRemove /> */}
        </button>
        <span data-testid={ `${index}-product-qtd` }>
          { qtdProduct }
        </span>
        <button
          type="button"
          className="btn"
          data-testid={ `${index}-product-plus` }
          name="plus"
          onClick={ () => hadleChange('plus') }
        >
          +
          {/* <IoIosAdd /> */}
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
