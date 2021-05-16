import styled from 'styled-components';

export const Header = styled.header`
  height: 70px;
  background-color: var(--background-header);
  border-bottom: 1px solid #494949;
  display: flex;
  border-radius: 0 0 10px 10px;
  justify-content: center;
  font-family: winnerSans;

  button {
    border: none;
    outline: none;
    box-shadow: none;
    background: none;
    position: absolute;
    left: 20px;
  }
  button, i {
    color: #000;
    font-size: 40px;
    padding-top: 5px;
    transition: .2s ease;
  }
  button:focus {
    outline: none;
    box-shadow: none;
  }
  button div:hover i {
    color: #fff;
  } 
  h1 {
    font-size: 1.5rem;
    letter-spacing: .3rem;
    text-align: center;
    font-weight: 700;
    color: var(--white);
  }
`;

export const NavContainer = styled.div`
  width: 300px;
  min-height: calc(100vh - 121px);
  background-color: var(--navy-blue);
  position: absolute;
  left: -300px;
  transition: .5s all;
  z-index: 1011;
  border-radius: 0 0 10px 0;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 121px);
  
  #NavTop {
    flex-grow: 2;
    display: flex;
    flex-direction: column;
    
  }
  #NavBottom {
    flex-grow: 1;
    display: flex;
    flex-direction: column;     
  }
  div#NavTop a, div#NavBottom a {
    flex-grow: 0;
    margin: 1.5rem;
  }
  a {
    color: var(--white);
    text-align: center;
    font-family: winnerSans;
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: .3rem;
    background-color: var(--light-orange);
    border-radius: 10px;
    height: 40px;
    text-align: center;
    padding-top: 6px;
  }
  div#NavBottom a.exit {
    color: var(--orange);
    background: none;
    font-size: 1.5rem;
  }
`;
