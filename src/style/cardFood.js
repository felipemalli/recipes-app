import styled from 'styled-components';

const CardFoods = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 150px;
  width: 150px;
  margin: 5px 10px;
  cursor: pointer;
  align-items: center;
  border-radius: 5px;

  div {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 150px;
    text-align: center;
  }

  img {
    width: 100%;
    height: 90px;
    object-fit: cover;
    border-radius: 5px;
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
