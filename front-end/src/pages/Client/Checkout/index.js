import PropTypes from 'prop-types';
import React, { useContext, useState } from 'react';
import { TrybeerContext } from '../../../util';
import { fetchCheckout } from '../../../requests';
import Header from '../../components/Header';
import ListProducts from './ListProducts';

function Checkout(props) {
  const { history } = props;
  const { shopCart, amount, setLocalProducts } = useContext(TrybeerContext);
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [deliveryNumber, setDeliveryNumber] = useState('');
  const totalValue = amount.toFixed(2).replace('.', ',');

  const handleChange = ({ target: { value, name } }) => {
    if (name === 'deliveryAddress') setDeliveryAddress(value);
    if (name === 'deliveryNumber') setDeliveryNumber(value);
  };

  const checkout = async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const { email } = user;

    await fetchCheckout(
      { email, totalPrice: amount, deliveryAddress, deliveryNumber, itens: shopCart },
    );

    const time = 2000;
    const span = document.getElementById('mensage');
    span.innerText = 'Compra realizada com sucesso!';
    console.log(span);
    setTimeout(async () => {
      await setLocalProducts();
      history.push('/products');
    }, time);
  };

  const userLogged = () => {
    const user = localStorage.getItem('user');
    if (!user) {
      return history.push('/login');
    }
  };
  userLogged();

  const checkedBtn = totalValue === '0,00'
  || deliveryAddress === ''
  || deliveryNumber === '';

  return (
    <div>
      <Header title="Finalizar Pedido" />
      { (shopCart.length) ? <ListProducts /> : <div>Não há produtos no carrinho</div>}
      <span data-testid="order-total-value">
        { `Total: R$ ${totalValue}` }
      </span>
      <form>
        <h3>Endereço</h3>
        <label htmlFor="deliveryAddress">
          Rua
          <input
            name="deliveryAddress"
            value={ deliveryAddress }
            type="text"
            data-testid="checkout-street-input"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="deliveryNumber">
          Número da casa
          <input
            name="deliveryNumber"
            type="text"
            value={ deliveryNumber }
            data-testid="checkout-house-number-input"
            onChange={ handleChange }
          />
        </label>
      </form>
      <button
        type="button"
        data-testid="checkout-finish-btn"
        disabled={ checkedBtn }
        onClick={ checkout }
      >
        Finalizar Pedido
      </button>
      <span id="mensage"> </span>
    </div>
  );
}

Checkout.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Checkout;
