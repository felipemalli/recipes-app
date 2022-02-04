import styled from 'styled-components';

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  border: 1px solid violet;
  height: 400px;
  width: 85%;
  margin-bottom: 40px;

  .cardFoods {
    display: flex;
    overflow-x: scroll;
    height: 250px;
    border-top: 1px solid black;
  }

/*   .cardFoods::-webkit-scrollbar {
    width: 0;
  } */
`;

export const ButtonStart = styled.button`
  position: fixed;
  bottom: 0;
  cursor: pointer;
  background-color: #f45407;
  color : white;
  height: 35px;
  width: 116px;
  border-radius: 7px;
  border: none;
`;
