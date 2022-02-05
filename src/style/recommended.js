import styled from 'styled-components';

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-align: center;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  border: 1px solid violet;
  height: 500px;
  width: 85%;
  margin-bottom: 40px;
  align-items: center;

  .cardFoods {
    display: flex;
    overflow-x: scroll;
    height: 250px;
    align-items: baseline;
    border-top: 1px solid blue;
    width: 55%;
  }
`;

export const ButtonStart = styled.button`
  position: fixed;
  bottom: 0;
  cursor: pointer;
  background-color: #f45407;
  color : white;
  height: 35px;
  width: 116px;
  border-radius: 6px;
  border: none;
`;
