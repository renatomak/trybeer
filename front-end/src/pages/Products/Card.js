import PropTypes from 'prop-types';
import React, { useState, useContext, useEffect } from 'react';
/* import { IoIosRemove, IoIosAdd } from 'react-icons/io'; */
import { TrybeerContext } from '../../util';
import { CardContainer, Price, CardImg, BtnContainer } from './styledCard';

const Card = (props) => {
  const {
    totalPriceSales,
    setTotalPriceSales,
    shopCart, setShopCart } = useContext(TrybeerContext);
  const [qtdProduct, setQtdProduct] = useState(0);
  const [operation, setOperation] = useState('');

  const { product, index } = props;
  const { name, price, id } = product;

  useEffect(() => {
    const item = { id, quantity: qtdProduct, name, price };

    const indexItem = shopCart.findIndex((obj) => obj.id === id);
    const indexNotExist = -1;

    if (indexItem === indexNotExist) {
      if (qtdProduct > 0) setShopCart([...shopCart, item]);
    } else {
      const cart = [...shopCart];
      if (operation) cart[indexItem].quantity += 1;
      if (!operation) cart[indexItem].quantity -= 1;

      if (!qtdProduct) {
        const i = cart.findIndex((obj) => obj.quantity === 0);
        cart.splice(i, 1);
      }

      setShopCart(cart);
    }

    console.log(shopCart);
  }, [qtdProduct, operation]);

  const hadleChange = (type) => {
    if (type === 'plus') {
      setQtdProduct(qtdProduct + 1);
      console.log(qtdProduct);
      setTotalPriceSales(parseFloat(totalPriceSales) + parseFloat(price));
      setOperation(1);
    }

    if (type === 'minus' && qtdProduct > 0) {
      setQtdProduct(qtdProduct - 1);
      setTotalPriceSales(parseFloat(totalPriceSales) - parseFloat(price));
      setOperation(0);
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
    id: PropTypes.any,
    image: PropTypes.any,
    name: PropTypes.any,
    price: PropTypes.any,
  }).isRequired,
};

export default Card;
