import React from 'react';
import { Container } from './loginStyled';

export default () => (
  <Container>
    <form>
      <span>Email</span>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">@</span>
          <input
            type="email"
            name="email"
            value="email"
            className="form-control"
            aria-describedby="basic-addon1"
            placeholder="user@trybe.com"
            data-testid="email-input"
          />
        </div>
      </div>
      <div className="form-group">
        <span>Senha</span>
        <input
          type="password"
          name="password"
          placeholder="password"
          className="form-control"
          data-testid="password-input"
        />
      </div>
      <button
        type="button"
        data-testid="signin-btn"
        className="btn btn-primary btn-lg btn-block"
        value="Entrar"
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
