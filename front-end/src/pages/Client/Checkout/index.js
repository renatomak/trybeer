import React from 'react';

function Checkout() {
  const [buttonDisabled, setbuttonDisabled] = useState(true);
  const [street, setStreet] = useState(true);
  const [houseNumber, setHouseNumber] = useState(true);
  const [total, setTotal] = useState(true);


  const getProfile = async () => {
    const { history } = props;
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) history.push('/login');
  };

  useEffect(() => {
    getProfile();
  }, []);

  const handleTotal = () => {

  }

  const handleStreet = ({ target: { value } }) => {
    setStreet(value);
    validateInformation();
  }

  const handleHouseNumber = ({ target: { value } }) => {

  }

  const validateInformation = () => {
    
  }

  const handleClick = () => {

  }

  return (
    <div>
      <SideBar title="Finalizar Pedido" />
      //Fazer um map aqui pra criar um li pra cada produto do carrinho
      <ul>
        <li>
          <span data-testid="0-product-qtd-input">quantidade do produto</span>
          <span data-testid="0-product-name">nome do produto</span>
          <span data-testid="0-product-total-value">valor total do produto</span>
          <span data-testid="0-product-unit-price">valor unitário do produto</span>
          <button data-testid="0-removal-button">botão de excluir produto do carrinho</button>
        </li>
      </ul>
      <span
        data-testid="order-total-value"
        onChange={ handleTotal }
      >Total: R$0,00</span>
      <form>
        <label htmlFor="checkout-street-input">
          Rua:
          <input
            type="text"
            data-testid="checkout-street-input"
            value={ street }
            onChange={ handleStreet }
          ></input>
        </label>
        <label htmlFor="checkout-house-number-input">
          Número da casa:
          <input
            type="text"
            data-testid="checkout-house-number-input"
            value={ houseNumber }
            onChange={ handleHouseNumber }
          ></input>
        </label>
        <button
          type="button"
          data-testid="checkout-finish-btn"
          disabled={ buttonDisabled }
          onClick={ handleClick }
        >Finalizar pedido
        </button>
      </form>
    </div>
  );
}

export default Checkout;

Profile.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
