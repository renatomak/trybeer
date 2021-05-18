import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 5px;
  font-family: sans-serif;
  background-color: var(--white);
`;

export const CardContainer = styled.div`
  display: flex;
  border-radius: 20px;
  margin: 30px;
  box-shadow: 10px 10px 3px gray;
`;

export const DivImg = styled.div`
  width: 40%;
  max-width: 300px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    max-width: 100px;
    max-height: 150px;
  }
`;
export const DivControlers = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  border-radius: 20px;

  p {
    font-size: 1.5rem;
    font-weight: 700;
    text-align: center;
  }
`;
export const Price = styled.div`
  font-size: 2rem;
  background-color: var(--navy-blue);
  color: var(--white);
  font-weight: 700;
  font-size: 2rem;
  padding: 5px;
`;
export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  font-size: 2rem;
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
    font-size: 2rem;
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
export const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
`;
