import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { fetchRegister } from '../../requests';

function Register(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkbox, setCheckbox] = useState(false);
  const [buttonDisabled, setbuttonDisabled] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const validateData = () => {
    const nameRegex = /^[a-zA-Z\s]*$/;
    const minNameLength = 12;
    const validName = name.length >= minNameLength && nameRegex.test(name);
    const emailRegex = /\S+@\S+\.\S+/;
    const validEmail = emailRegex.test(email);
    const sizePassword = 5;
    const validPassword = password.length >= sizePassword;

    if (validName && validEmail && validPassword) {
      return setbuttonDisabled(false);
    }
    setbuttonDisabled(true);
  };

  const handleChangeName = ({ target: { value } }) => {
    setName(value);
    validateData();
  };

  const handleChangeEmail = ({ target: { value } }) => {
    setEmail(value);
    validateData();
  };

  const handleChangePassword = ({ target: { value } }) => {
    setPassword(value);
    validateData();
  };

  const handleChangeCheckbox = () => {
    setCheckbox(!checkbox);
  };

  const handleClick = async () => {
    const { history } = props;
    let role = '';
    if (checkbox) role = 'administrator';
    else role = 'client';
    const user = await fetchRegister(name, email, password, role);
    if (user.message) {
      setErrorMessage(user.message);
      return;
    }
    localStorage.setItem('user', JSON.stringify(user));
    if (user.role === 'administrator') history.push('/admin/orders');
    if (user.role === 'client') history.push('/products');
  };

  return (
    <form>
      <label htmlFor="signup-name">
        <input
          data-testid="signup-name"
          type="text"
          name="name"
          value={ name }
          placeholder="nome"
          onChange={ (e) => handleChangeName(e) }
        />
        Nome
      </label>
      <label htmlFor="signup-email">
        <input
          data-testid="signup-email"
          type="email"
          name="email"
          value={ email }
          placeholder="user@trybe.com"
          onChange={ (e) => handleChangeEmail(e) }
        />
        Email
      </label>
      <span>{ errorMessage }</span>
      <label htmlFor="signup-password">
        <input
          data-testid="signup-password"
          type="password"
          name="password"
          value={ password }
          placeholder="senha"
          onChange={ (e) => handleChangePassword(e) }
        />
        Senha
      </label>
      <label htmlFor="signup-seller">
        <input
          data-testid="signup-seller"
          type="checkbox"
          name="checkbox"
          value="quero vender"
          onChange={ handleChangeCheckbox }
        />
        Quero vender
      </label>
      <button
        type="button"
        data-testid="signup-btn"
        disabled={ buttonDisabled }
        onClick={ handleClick }
      >
        Cadastrar
      </button>
    </form>
  );
}

export default Register;

Register.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
