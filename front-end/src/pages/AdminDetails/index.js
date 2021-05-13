import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { TrybeerContext } from '../../util';
import AdminSideBar from '../components/AdminSideBar';
import DetailsItens from './DetailsItens';

const AdminDetails = (props) => {
  const { adminSalesDetails } = useContext(TrybeerContext);

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
      <AdminSideBar
        title={
          `Pedido ${adminSalesDetails.orderNum} - ${adminSalesDetails.orderStatus}`
        }
      />
      { (adminSalesDetails.length) ? <DetailsItens
        adminSalesDetails={ adminSalesDetails }
      /> : <div />}
    </div>
  );
};

AdminDetails.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default AdminDetails;
