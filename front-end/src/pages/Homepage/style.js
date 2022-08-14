import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-family: "Recursive";
    font-weight: 400;
    margin-top: 20px;
    font-size: 25px;
    color: #ffffff;
  }

  @media (max-width: 515px) {
    width: 100vw;

    h2 {
      margin-top: 5px;
      font-size: 21px;
    }
  }
`;

export { Container };
