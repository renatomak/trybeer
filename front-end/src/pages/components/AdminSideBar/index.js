import React from 'react';
import PropTypes from 'prop-types';

const AdminSideBar = () => (
  <div>
    <nav admin-side-bar-container>
      <a
        href="/admin/orders"
        className="side-menu-item"
        data-testid="side-menu-item-orders"
      >
        Pedidos
      </a>
      <a
        href="/admin/profile"
        className="side-menu-item"
        data-testid="side-menu-item-profile"
      >
        Perfil
      </a>
      <a
        href="/login"
        className="side-menu-item exit"
        data-testid="side-menu-item-logout"
      >
        Sair
      </a>
    </nav>
  </div>
);

AdminSideBar.propTypes = {
  title: PropTypes.string,
}.isRequired;

export default AdminSideBar;
