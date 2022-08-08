import styled from "styled-components";

import BillInfo from "./BillInfo";

export default function Table() {
  return (
    <Container>
      <header>
        <span className="due">Vcto</span>
        <span className="bill">Conta</span>
        <span className="value">Valor</span>
      </header>
      <BillInfo />
      <div className="add-bill">
        <span className="add">Adicionar conta</span>
      </div>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 40px;

  header {
    background: #d9d9d9;
    border-radius: 10px 10px 1px 1px;
    width: 500px;
    height: 60px;
    display: flex;
    align-items: center;
    font-family: "Recursive";
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    color: #333333;
    margin-bottom: 4px;

    .due {
      margin: 0 60px 0 20px;
    }

    .bill {
      margin: 0 50px 0 5px;
    }

    .value {
      margin: 0 10px 0 150px;
    }
  }

  .add-bill {
    background: #d9d9d9;
    border-radius: 1px 1px 10px 10px;
    width: 500px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Recursive";
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    color: #333333;
    margin: 4px 0 30px 0;
`;
