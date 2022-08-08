import styled from "styled-components";

export default function BillInfo() {
  return (
    <BillContainer>
      <p className="due">27</p>
      <span>
        <img src={"assets/loop.png"} alt="loop" />
      </span>
      <p className="bill">Condomínio</p>
      <p className="value">R$ 9.999,99</p>
    </BillContainer>
  );
}

const BillContainer = styled.div`
  width: 500px;
  height: 65px;
  background: #ffffff;
  border-radius: 1px 1px 1px 1px;
  display: flex;
  align-items: center;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  color: #333333;
  margin: 2px 0 2px 0;

    .due {
      width: 92px;
      text-align: center;
    }

    .bill {
      padding-left: 22px;
      width: 250px;
    }

    .value {
      width: 150px;
      text-align: right;
      padding-right: 10px;
    }

    span {
      margin-top: 5px;
      img {
        width: 28px;
      }
    }
  }
`;
