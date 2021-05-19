import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { fetchCheckout } from '../../../requests';
import SideBar from '../../components/Header';
import { TrybeerContext } from '../../../util';

function Checkout(props) {
  const [email, setEmail] = useState('');
  const [deliveryAddress, setdeliveryAddress] = useState('');
  const [deliveryNumber, setdeliveryNumber] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);
  const [itens, setItens] = useState([]);
  const [message, setMessage] = useState('');
  const { setLocalProducts } = useContext(TrybeerContext);

  const getTotalPrice = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    let price = 0;
    console.log(cart);
    cart.forEach((item) => {
      price += (item.quantity * item.price);
    });
    setTotalPrice(price);
    setItens(cart);
  };

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

  const buttonDisabled = deliveryAddress === ''
    || deliveryNumber === '' || totalPrice === 0;

  const handleStreet = ({ target: { value } }) => {
    setdeliveryAddress(value);
  };

  const handleHouseNumber = ({ target: { value } }) => {
    setdeliveryNumber(value);
  };

  const deleteMessage = () => {
    const { history } = props;
    setMessage('');
    localStorage.setItem('cart', '');
    history.push('/products');
  };

  const handleCheckout = async () => {
    const requestReturn = await fetchCheckout(
      { email, totalPrice, deliveryAddress, deliveryNumber, itens },
    );

    const timeout = 2000;
    if (requestReturn.message === 'Compra realizada com sucesso!') {
      await setLocalProducts();
      setMessage('Compra realizada com sucesso!');
      setTimeout(deleteMessage, timeout);
    } else setMessage(requestReturn.message);
  };

  const handleDelete = (item) => {
    const newItens = itens.filter((product) => product.id !== item.id);
    localStorage.setItem('cart', JSON.stringify(newItens));
    getTotalPrice();
  };

  return (
    <div>
      <SideBar title="Finalizar Pedido" />
      {(itens.length === 0)
        ? (<span>Não há produtos no carrinho</span>)
        : itens.map((item, index) => (
          <p key={ index }>
            <span data-testid={ `${index}-product-qtd-input` }>{item.quantity}</span>
            <br />
            <span data-testid={ `${index}-product-name` }>{item.name}</span>
            <br />
            <span data-testid={ `${index}-product-total-value` }>
              {`R$ ${(item.price * item.quantity).toFixed(2).replace('.', ',')}`}
            </span>
            <br />
            <span data-testid={ `${index}-product-unit-price` }>
              {`(R$ ${Number(item.price).toFixed(2).replace('.', ',')} un)`}
            </span>
            <br />
            <button
              type="button"
              value={ item }
              data-testid={ `${index}-removal-button` }
              onClick={ () => handleDelete(item) }
            >
              X
            </button>
          </p>
        ))}
      <span
        data-testid="order-total-value"
      >
        {`Total: R$ ${totalPrice.toFixed(2).replace('.', ',')}`}
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
          onClick={ () => handleCheckout() }
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
