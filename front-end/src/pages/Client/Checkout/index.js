import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { fetchCheckout } from '../../../requests';
import SideBar from '../../components/SideBar';

function Checkout(props) {
  const [email, setEmail] = useState('');
  const [buttonDisabled, setbuttonDisabled] = useState(true);
  const [deliveryAddress, setdeliveryAddress] = useState('');
  const [deliveryNumber, setdeliveryNumber] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);
  const [itens, setItens] = useState([]);
  const [message, setMessage] = useState('');

  const cart = localStorage.getItem('cart');

  const getTotalPrice = () => {
    let price = 0;
    cart.forEach((item) => {
      price = price + (item.quantity * item.price);
    });
    setTotalPrice(price);
  }

  useEffect(() => {
    getTotalPrice();
  }, []);

  const getProfile = async () => {
    const { history } = props;
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) history.push('/login');
    else {
      setEmail(user.email);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  const validateInformation = () => {
    if (deliveryAddress && deliveryNumber && totalPrice >= 0) setbuttonDisabled(false);
    else setbuttonDisabled(true);
  };

  const handleTotal = ({ target: { value } }) => {
    setTotalPrice(value);
    validateInformation();
  };

  const handleStreet = ({ target: { value } }) => {
    setdeliveryAddress(value);
    validateInformation();
  };

  const handleHouseNumber = ({ target: { value } }) => {
    setdeliveryNumber(value);
    validateInformation();
  };

  const deleteMessage = () => {
    setMessage('');
  };

  const handleCheckout = async () => {
    const requestReturn = await fetchCheckout(
      { email, totalPrice, deliveryAddress, deliveryNumber, itens },
    );
    const timeout = 2000;
    if (requestReturn.message === 'Compra realizada com sucesso!') {
      setMessage('Compra realizada com sucesso!');
      setTimeout(deleteMessage, timeout);
      // esvaziar carrinho
    } else setMessage(requestReturn.message);
  };

  const handleDelete = () => {

  }

  return (
    <div>
      <SideBar title="Finalizar Pedido" />
      <ul>
        {cart.map((item, index) => {
          return (
            <li>
              <span data-testid={ `${index}-product-qtd-input` }>{item.quantity}</span>
              <span data-testid={ `${index}-product-name` }>{item.name}</span>
              <span data-testid={ `${index}-product-total-value` }>{(item.price * item.quantity)}</span>
              <span data-testid={ `${index}-product-unit-price` }>{item.price}</span>
              <button
                type="button"
                data-testid={ `${index}-removal-button` }
                onClick={ handleDelete }
              >
                X
              </button>
            </li>
          )
        })}
      </ul>
      <span
        data-testid="order-total-value"
        value={ totalPrice }
        onChange={ handleTotal }
      >
        Total: R$
        { totalPrice }
      </span>
      <form>
        <label htmlFor="checkout-street-input">
          Rua:
          <input
            type="text"
            data-testid="checkout-street-input"
            value={ deliveryAddress }
            onChange={ handleStreet }
          />
        </label>
        <label htmlFor="checkout-house-number-input">
          Número da casa:
          <input
            type="text"
            data-testid="checkout-house-number-input"
            value={ deliveryNumber }
            onChange={ handleHouseNumber }
          />
        </label>
        <button
          type="button"
          data-testid="checkout-finish-btn"
          disabled={ buttonDisabled }
          onClick={ handleCheckout }
        >
          Finalizar pedido
        </button>
      </form>
      <span>{ message }</span>
    </div>
  );
}

export default Checkout;

Checkout.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
