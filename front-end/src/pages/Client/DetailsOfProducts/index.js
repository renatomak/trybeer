import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { TrybeerContext } from '../../../util';
import SideBar from '../../components/SideBar';
import DetailsItens from './DetailsItens';
import './Style.css';

const Details = (props) => {
  const { salesDetails } = useContext(TrybeerContext);

  const userLogged = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const { history } = props;

    if (!user) {
      return history.push('/login');
    }
  };

  useEffect(() => {
    userLogged();
  }, []);

  return (
    <div>
      <SideBar title="Detalhes de Pedido" />
      { (salesDetails.length) && <DetailsItens salesDetails={ salesDetails } /> }
    </div>
  );
};

Details.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Details;
