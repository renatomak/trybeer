import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.1rem;
  align-items: center;
  /* pega o total de espaço da tela divide por 4 cards e subtrai as margens */
  width: calc(100% / 4 - 20px);
`;

export const Price = styled.div`
  font-size: 2rem;
`;

export const CardImg = styled.div`
  filter: grayscale(0%);
  height: calc(((100vw - (100vw - 900px)) / 1.7 - 20px) / 2);
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
  width: 70%;
  height: 80%;
}
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  font-size: 2rem;
  
  button {
    outline: none;
    box-shadow: none;
    background: none;
    font-size: 2rem;
  }
  button:focus {
    outline: none;
    box-shadow: none;
  }
  input, span {
    width: 50px;
    text-align: center;
    border: none;
  }
`;
