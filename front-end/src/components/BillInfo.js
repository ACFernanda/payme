import styled from "styled-components";
import { Link } from "react-router-dom";

export default function BillInfo({ bill, month }) {
  return (
    <Link to={`/bills/${bill.id}/${month}`}>
      <BillContainer>
        <p className="due">{bill.dueDay}</p>
        {bill.recurrence === true ? (
          <span>
            <img src={"/assets/loop.png"} alt="loop" />
          </span>
        ) : (
          <span></span>
        )}
        <p className="bill">{bill.title}</p>
        <p className="value">R$ {bill.value}</p>
      </BillContainer>
    </Link>
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
  cursor: pointer;
  position: relative;

    .due {
      width: 92px;
      text-align: center;
    }

    .bill {
      padding-left: 45px;
      width: 250px;
    }

    .value {
      width: 150px;
      text-align: right;
      padding-right: 10px;
    }

    span {
      position: absolute;
      left: 84px;
      margin-top: 5px;
      img {
        width: 28px;
      }
    }
  }
`;
