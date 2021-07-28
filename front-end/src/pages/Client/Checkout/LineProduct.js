import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { TrybeerContext } from '../../../util';
import { Li, Quantity, Name, Prices, Price, NamePricesContainer } from './LineProductStyled';

function LineProduct(props) {
  const { shopCart, setShopCart, setLocalProducts } = useContext(TrybeerContext);
  const { index, item } = props;
  const { quantity, name, price, id } = item;

  const totalPrice = (price * quantity).toFixed(2).replace('.', ',');
  const stringPrice = Number(price).toFixed(2).replace('.', ',');

  const removeItem = ({ value }) => {
    const newShopCart = [...shopCart];

    newShopCart.splice(value, 1);

    setShopCart(newShopCart);

    if (!(newShopCart.length)) setLocalProducts();
  };

  return (
    <Li key={ id }>
      <Quantity data-testid={ `${index}-product-qtd-input` }>{quantity}</Quantity>
      <NamePricesContainer>
        <Name data-testid={ `${index}-product-name` }>{name}</Name>
        <Prices>
          <Price
            data-testid={ `${index}-product-total-value` }
          >
            {`R$ ${totalPrice}`}
          </Price>
          <Price
            className="unit"
            data-testid={ `${index}-product-unit-price` }
          >
            <span>{`(R$ ${stringPrice} un)`}</span>
          </Price>
        </Prices>
      </NamePricesContainer>
      <button
        type="button"
        value={ index }
        onClick={ ({ target }) => removeItem(target) }
        data-testid={ `${index}-removal-button` }
      >
        X
      </button>
    </Li>
  );
}

LineProduct.propTypes = {
  index: PropTypes.number.isRequired,
  item: PropTypes.shape({
    id: PropTypes.any,
    name: PropTypes.any,
    price: PropTypes.any,
    quantity: PropTypes.any,
  }).isRequired,
};

export default LineProduct;
