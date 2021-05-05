import React, { useState } from 'react';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkbox, setCheckbox] = useState(false);
  const [buttonDisabled, setbuttonDisabled] = useState(true);

  const validateData = () => {
    const validName = name.length >= 12;
    const emailRegex = /[\w.-]+@[\w-]+\.[\w-.]+/gi;
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

  const handleClick = () => {

  }

  return (
    <form>
      <label htmlFor="signup-name">nome</label>
      <input
        data-testid="signup-name"
        type="text"
        name="name"
        value={ name }
        placeholder="nome"
        onChange={ (e) => handleChangeName(e) }
      ></input>
      <label htmlFor="signup-email">email</label>
      <input
        data-testid="signup-email"
        type="email"
        name="email"
        value={ email }
        placeholder="user@trybe.com"
        onChange={ (e) => handleChangeEmail(e) }
      ></input>
      <label htmlFor="signup-password">senha</label>
      <input
        data-testid="signup-password"
        type="password"
        name="password"
        value={ password }
        placeholder="senha"
        onChange={ (e) => handleChangePassword(e) }
      ></input>
      <label htmlFor="signup-seller">quero vender</label>
      <input
        data-testid="signup-seller"
        type="checkbox"
        name="checkbox"
        value="quero vender"
        onChange={ handleChangeCheckbox }
      ></input>
      <button
        type="button"
        data-testid="signup-btn"
        disabled={ buttonDisabled }
        onClick={ handleClick }
      >Cadastrar</button>
    </form>
  )
};

export default Register;
