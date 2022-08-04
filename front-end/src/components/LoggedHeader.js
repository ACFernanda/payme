import styled from "styled-components";

export default function LoggedHeader() {
  return (
    <Container>
      <img src={"assets/bill.png"} alt="logo" />
      <h1>PayMe</h1>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  img {
    width: 110px;
  }

  h1 {
    font-family: "Righteous";
    font-weight: 400;
    font-size: 50px;
    text-align: center;
    color: #ffffff;
  }
`;
