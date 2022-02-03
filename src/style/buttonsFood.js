import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 10px;
  width: 100%;
  border: 1px solid red;

  .buttons {
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin: 0 1rem;
    padding: 8px 20px;
    text-align: center;
  }
`;

export default Nav;
