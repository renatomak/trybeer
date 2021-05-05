import React, { useState, useEffect } from 'react';
import './styles.css';

const SideBar = () => {
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
    <div>
      <header>
        <h1 data-testid="top-title">TryBeer</h1>
        <button
          type="button"
          className="btn containerHamburguer"
          data-testid="top-hamburguer"
          onClick={ handleClick }
        >
          <div className="top-hamburguer">
            <i className="material-icons">dehaze</i>
          </div>
        </button>
      </header>
      <nav className={ classIsActive } style={ { display: `${visible}` } }>
        <a
          href="/products"
          className="side-menu-item"
          data-testid="side-menu-item-products"
        >
          Produtos
        </a>
        <a
          href="/orders"
          className="side-menu-item"
          data-testid="side-menu-item-my-orders"
        >
          Meus Pedidos
        </a>
        <a
          href="/profile"
          className="side-menu-item"
          data-testid="side-menu-item-my-profile"
        >
          Meu Perfil
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
};

export default SideBar;
