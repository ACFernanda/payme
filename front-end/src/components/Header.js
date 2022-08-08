import styled from "styled-components";

export default function Header() {
  return (
    <Container>
      <img src={"/assets/bill.png"} alt="logo" />
      <h1>PayMe</h1>
    </Container>
  );
}

const Container = styled.div`
  img {
    width: 200px;
  }

  h1 {
    font-family: "Righteous";
    font-weight: 400;
    font-size: 40px;
    text-align: center;
    color: #ffffff;
    margin-bottom: 16px;
  }
`;
