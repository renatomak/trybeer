import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  background-color: var(--dark-green);
  margin-top: 1.5rem;
  font-family: winnerSans;
  font-weight: 700;
  border-radius: 10px;
  height: var(--height);
`;
export const Input = styled.input`
  background-color: var(--dark-orange);
  height: var(--height);
  width: 100%;
  border-radius: 10px;
  border: none;
  text-align: center;
  font-size: 1.3rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  max-width: 300px;

  span {
    background-color: white;
    border-radius: 5px 5px 0 0;
    width: 40%;
    text-align: center;
    font-size: 1rem;
    margin-top: 1.5rem;
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
`;

export const Checkbox = styled.div`
  background-color: var(--white);
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
    width: 80%;
    height: 100%;
    margin: 0;
    padding-top: 15px;
    border-radius: 10px;
  }
`;
