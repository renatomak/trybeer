import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 30px;
  display: flex;
  max-width: 280px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  background-color: var(--dark-green);
  font-family: winnerSans;
  font-weight: 700;
  width: 60%;
`;
export const Input = styled.input`
  background-color: var(--dark-orange);
  border: none;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  button, input {
    height: 45px;
    font-size: 1rem;
    border-radius: 8px;
  }
  button, span {
    margin-top: 1.5rem;
  }
  span {
    background-color: white;
    border-radius: 5px 5px 0 0;
    width: 40%;
    text-align: center;
    font-size: 1rem;
    font-weight: 700;
    font-family: winnerSans;
  }
  input:focus {
    background-color: var(--focus);
    border: none;
  }
  /* Cor de fundo do autocomplete */
  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px var(--focus) inset;
    -webkit-text-fill-color: black !important;
  }
  button:active {
    background-color: var(--dark-green);
  }
  .register {
    outline: none;
    box-shadow: none;
    border: none;
    background: none;
    color: var(--white);
  }
`;

export const Checkbox = styled.div`
  
  height: var(--height);
  width: 100%;
  border-radius: 10px;
  margin-top: 1.5rem;
  display: flex;
  
  input[type="checkbox"] {
    width: 20%;
    height: 100%;
    cursor: pointer;
  }

  span {
    height: 100%;
    margin: 0;
    padding-top: 5px;
    border-radius: 10px;
    background-color: var(--light-orange);
  }
`;
