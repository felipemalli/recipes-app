import styled from 'styled-components';

const CardFoods = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100px;
  width: 150px;
  border: 1px solid red;
  margin: 5px 10px;
  cursor: pointer;
  align-items: center;
  border-radius: 5px;

  div {
    display: flex;
    flex-direction: column;
    border: 3px solid blue;
    width: 100%;
    height: 100px;
    text-align: center;
  }

  img {
    width: 100%;
    height: 50px;
  }

  h3 {
    border: 1px solid green;
    width: 100%;
  }

  span {
    border: 1px solid black;
    width: 100%;
  }
`;

export default CardFoods;
