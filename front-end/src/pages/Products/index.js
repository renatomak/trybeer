import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { Container } from './styled';
import { TrybeerContext } from '../../util';
import Card from './Card';
import SideBar from '../components/SideBar';

const Products = (props) => {
  const { salesProducts, totalPriceSales } = useContext(TrybeerContext);
  const { history } = props;
  const totalPrice = String(totalPriceSales.toFixed(2)).replace('.', ',');

  const redirect = () => {
    history.push('/checkout');
  };

  const userLogged = () => {
    const user = localStorage.getItem('user');
    if (!user) {
      return history.push('/login');
    }
  };
  userLogged();

  return (
    <div>
      <SideBar title="TryBeer" />
      <Container>
        {salesProducts
          .map((product, index) => (<Card
            product={ product }
            key={ index }
            index={ index }
          />))}
      </Container>
      <div>
        <button
          type="button"
          data-testid="checkout-bottom-btn"
          value="Ver carrinho"
          onClick={ redirect }
          disabled={ totalPrice === '0,00' }
        >
          Ver Carrinho
        </button>
        <span data-testid="checkout-bottom-btn-value">
          {` R$  ${String(totalPriceSales.toFixed(2)).replace('.', ',')} `}
        </span>
      </div>
    </div>
  );
};

Products.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Products;
