import styled from 'styled-components';

const ContainerFooter = styled.footer`
    background: #ff5003;
    bottom: 0;
    display: flex;
    flex-flow: column wrap;
    height: 12%;
    left: 0;
    position: fixed;
    width: 100%;

    .links-footer {
      align-items: center;
      flex-wrap: wrap;
      display: flex;
      height: 50%;
      justify-content: space-evenly;
      width: 100%;
    }

    .links-footer img {
      background-color: white;
      border-radius: 5px;
    }

    .copyright {
      color: white;
      display: flex;
      justify-content: center;
      width: 100%;
    }
`;

export default ContainerFooter;
