import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container } from './loginStyled';
import { fetchLogin } from '../../requests';

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [buttonDisabled, setbuttonDisabled] = useState(true);

  const validatesEmail = () => {
    const emailRegex = /[\w.-]+@[\w-]+\.[\w-.]+/gi;
    const validEmail = emailRegex.test(email);
    const sizePassword = 5;
    const validPassword = password.length >= sizePassword;

    if (validEmail && validPassword) {
      return setbuttonDisabled(false);
    }

    setbuttonDisabled(true);
  };

  const handleChangeEmail = ({ target: { value } }) => {
    setEmail(value);
    validatesEmail();
  };

  const handleChangePassword = ({ target: { value } }) => {
    setPassword(value);
    validatesEmail();
  };

  const logged = async () => {
    const { history } = props;
    const user = await fetchLogin(email, password);

    localStorage.setItem('user', JSON.stringify(user));
    if (user.role === 'administrator') history.push('/admin/orders');
    if (user.role === 'client') history.push('/products');
  };

  const register = () => {
    const { history } = props;
    history.push('/register');
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
          disabled={ buttonDisabled }
          onClick={ logged }
        >
          Entrar
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary btn-lg btn-block"
          data-testid="no-account-btn"
          onClick={ register }
        >
          Ainda não tenho conta
        </button>
      </form>
    </Container>
  );
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Login;
