import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Button, Container, Input, Form } from '../Styled';
import { TrybeerContext } from '../../util';
import Logo from '../components/Logo';

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [buttonDisabled, setbuttonDisabled] = useState(true);
  const { setLocalUser, setLocalProducts } = useContext(TrybeerContext);

  const validatesEmail = () => {
    const emailRegex = /\S+@\S+\.\S+/;
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
    const user = await setLocalUser(email, password);
    await setLocalProducts();

    if (user.role === 'administrator') history.push('/admin/orders');
    if (user.role === 'client') history.push('/products');
  };

  const register = () => {
    const { history } = props;
    history.push('/register');
  };

  return (
    <Container>
      <Logo width="50%" height="60%" />
      <Form>
        <span>Email</span>
        <Input
          type="text"
          name="email"
          value={ email }
          placeholder="user@trybe.com"
          data-testid="email-input"
          onChange={ (e) => handleChangeEmail(e) }
        />
        <span>Senha</span>
        <Input
          type="password"
          name="password"
          value={ password }
          placeholder="password"
          data-testid="password-input"
          onChange={ (e) => handleChangePassword(e) }
        />
        <Button
          type="button"
          data-testid="signin-btn"
          className="btn btn-lg btn-block"
          value="Entrar"
          disabled={ buttonDisabled }
          onClick={ logged }
        >
          Entrar
        </Button>
        <button
          type="button"
          className="register"
          data-testid="no-account-btn"
          onClick={ register }
        >
          Ainda não tenho conta
        </button>
      </Form>
    </Container>
  );
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Login;
