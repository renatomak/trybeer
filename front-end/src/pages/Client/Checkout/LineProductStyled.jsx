import styled from 'styled-components';

export const Li = styled.li`
  background-color: var(--dark-orange);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
  border-radius: 10px;
`;
export const Quantity = styled.div`
  background-color: var(--navy-blue);
  color: var(--white);
  width: 15%;
  height: 12vh;
  padding-top: 40%;
  text-align: center;
  border-radius: 10px 0 0 10px;
`;
export const NamePricesContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const Name = styled.div`
  width: 40%;
  font-size: 1rem;
`;
export const Prices = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Price = styled.div`
  background-color: var(--white);
  margin: 3px;
  text-align: center;
  padding: 5px;
  font-size: 1rem;
  font-weight: 700;
  color: var(--navy-blue);
  span {
    font-size: .8rem;
  }
`;
