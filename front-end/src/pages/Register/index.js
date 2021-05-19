import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { TrybeerContext } from '../../util';
import { fetchRegister, fetchGetProducts } from '../../requests';
import { Button, Container, Input, Form, Checkbox } from '../Styled';
import Logo from '../components/Logo';

function Register(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkbox, setCheckbox] = useState(false);
  const [buttonDisabled, setbuttonDisabled] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const { setProducts } = useContext(TrybeerContext);

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
    const LocalProducts = await fetchGetProducts().then((itens) => (
      itens.map((item) => {
        const newItem = { ...item, quantity: 0 };
        return newItem;
      })
    ));
    setProducts(LocalProducts);

    localStorage.setItem('products', JSON.stringify(LocalProducts));
    localStorage.setItem('user', JSON.stringify(user));
    if (user.role === 'administrator') history.push('/admin/orders');
    if (user.role === 'client') history.push('/products');
  };

  return (
    <Container>
      <Logo width="50%" height="60%" />
      <Form>
        <span>Nome</span>
        <Input
          data-testid="signup-name"
          type="text"
          name="name"
          value={ name }
          placeholder="nome"
          onChange={ (e) => handleChangeName(e) }
        />
        <span>Email</span>
        <Input
          data-testid="signup-email"
          type="email"
          name="email"
          value={ email }
          placeholder="user@trybe.com"
          onChange={ (e) => handleChangeEmail(e) }
        />
        <span>Senha</span>
        <Input
          data-testid="signup-password"
          type="password"
          name="password"
          value={ password }
          placeholder="senha"
          onChange={ (e) => handleChangePassword(e) }
        />
        <Checkbox>
          <input
            data-testid="signup-seller"
            type="checkbox"
            name="checkbox"
            value="quero vender"
            onChange={ handleChangeCheckbox }
          />
          <span>Quero vender</span>
        </Checkbox>

        <span>{ errorMessage }</span>
        <Button
          type="button"
          data-testid="signup-btn"
          className="btn btn-lg btn-block"
          disabled={ buttonDisabled }
          onClick={ handleClick }
        >
          Cadastrar
        </Button>
      </Form>
    </Container>
  );
}

export default Register;

Register.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
