import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { Container } from './styled';
import { TrybeerContext } from '../../util';
import Card from './Card';
import SideBar from '../components/Header';

const Products = (props) => {
  const { products, amount } = useContext(TrybeerContext);
  const newProducts = products || [];
  const totalValue = amount.toFixed(2).replace('.', ',');

  const { history } = props;

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
        {newProducts
          .map((item, index) => (<Card
            product={ item }
            key={ item.id }
            index={ index.toString() }
          />))}
      </Container>
      <div>
        <button
          type="button"
          data-testid="checkout-bottom-btn"
          value="Ver carrinho"
          onClick={ redirect }
          disabled={ totalValue === '0,00' }
        >
          Ver Carrinho
        </button>
        <span data-testid="checkout-bottom-btn-value">
          {` R$  ${totalValue}`}
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
