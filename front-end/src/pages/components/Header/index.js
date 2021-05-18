import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Header, NavContainer, Nav } from './Styled';

const SideBar = ({ title }) => {
  const SIDE_MENU = 'side-menu-container';

  const [isActive, setIsActive] = useState(false);
  const [classIsActive, setClassIsActive] = useState(SIDE_MENU);
  const [visible, setVisible] = useState('none');

  const handleClassIsActive = () => {
    const className = isActive ? `${SIDE_MENU} exibe_menu` : SIDE_MENU;
    setClassIsActive(className);
  };

  useEffect(() => {
    handleClassIsActive();
  }, [handleClassIsActive, isActive, visible]);

  const handleClick = () => {
    setIsActive(!isActive);
    const exibir = visible === 'none' ? '' : 'none';
    setVisible(exibir);
  };
  return (
    <>
      <Header>
        <h1 data-testid="top-title">{title}</h1>
        <img alt="logo" src="/images/buyBeer.png" width="130" />
        <button
          type="button"
          data-testid="top-hamburguer"
          onClick={ handleClick }
        >
          <div>
            <i className="material-icons">dehaze</i>
          </div>
        </button>
      </Header>
      <NavContainer className={ classIsActive } style={ { display: `${visible}` } }>
        <Nav>
          <div id="NavTop">
            <a
              href="/products"
              data-testid="side-menu-item-products"
            >
              Produtos
            </a>
            <a
              href="/orders"
              data-testid="side-menu-item-my-orders"
            >
              Meus Pedidos
            </a>
            <a
              href="/profile"
              data-testid="side-menu-item-my-profile"
            >
              Meu Perfil
            </a>
          </div>
          <div id="NavBottom">
            <a
              href="/login"
              className="exit"
              data-testid="side-menu-item-logout"
            >
              Sair
            </a>
          </div>
        </Nav>
      </NavContainer>
    </>
  );
};

SideBar.propTypes = {
  title: PropTypes.string,
}.isRequired;

export default SideBar;
