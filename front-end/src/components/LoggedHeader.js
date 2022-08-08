import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function LoggedHeader() {
  const navigate = useNavigate();

  return (
    <Container onClick={() => navigate("/main")}>
      <img src={"/assets/bill.png"} alt="logo" />
      <h1>PayMe</h1>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;

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
