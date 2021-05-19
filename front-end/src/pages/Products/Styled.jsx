import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: sans-serif;
  background-color: var(--white);
`;
export const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  border-radius: 20px;
  box-shadow: 10px 10px 3px gray;
  margin-bottom: 30px;
`;

export const DivImg = styled.div`
  width: 40%;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    max-height: 10rem;
  }
`;
export const DivControlers = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;


  align-items: center;
  border-radius: 20px;

  p {
    padding-top: 10px;
    font-size: 1.3rem;
    font-weight: 700;
    text-align: center;
  }
`;
export const Price = styled.div`
  font-size: 1.8rem;
  background-color: var(--navy-blue);
  color: var(--white);
  font-weight: 700;
  padding: 5px;
`;
export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  font-size: 2rem;

  input, span {
    width: 50px;
    text-align: center;
    border: none;
  }
  button img {
    height: 2rem;
  }
  button {
    padding: 0;
    margin: 0;
  }
`;
export const CartBtn = styled.div`
  width: 60%;
  background-color: var(--dark-orange);
  border-radius: 10px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  outline: none;
  box-shadow: none;
  
  span {
    font-size: 1.8rem;
    color: var(--white);
    font-weight: 700;
    flex-grow: 1;
  }
  p {
    display: none;
  }
  button {
    outline: none;
    box-shadow: none;
    font-size: 2rem;
  }
  button:focus {
    outline: none;
    box-shadow: none;
  }
  input, span {
    width: 40px;
    text-align: center;
    border: none;
  }
  button img {
    height: 2rem;
  }
`;
