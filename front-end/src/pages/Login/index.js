import React, { useState } from 'react';
import { Container } from './loginStyled';

export default () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeEmail = ({ target: { value } }) => {
    setEmail(value);
  };

  const handleChangePassword = ({ target: { value } }) => {
    setPassword(value);
  };

  const validatesEmail = () => {
    const emailRegex = /[\w.-]+@[\w-]+\.[\w-.]+/gi;
    return emailRegex.test(email);
  };

  return (
    <Container>
      <form>
        <span>Email</span>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">@</span>
            <input
              type="email"
              name="email"
              value={ email }
              placeholder="user@trybe.com"
              data-testid="email-input"
              onChange={ (e) => handleChangeEmail(e) }
            />
          </div>
        </div>
        <div className="form-group">
          <span>Senha</span>
          <input
            type="password"
            name="password"
            value={ password }
            placeholder="password"
            className="form-control"
            data-testid="password-input"
            onChange={ (e) => handleChangePassword(e) }
          />
        </div>
        <button
          type="button"
          data-testid="signin-btn"
          className="btn btn-primary btn-lg btn-block"
          value="Entrar"
          disabled={ !validatesEmail }
        >
          Entrar
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary btn-lg btn-block"
          data-testid="no-account-btn"
        >
          Ainda nao tenho conta
        </button>
      </form>
    </Container>
  );
};
