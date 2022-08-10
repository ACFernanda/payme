import styled from "styled-components";
import { Link } from "react-router-dom";

export default function BillInfo({ bill, month, year }) {
  const today = new Date();
  let formattedDueDay = bill.dueDay;
  if (month == 2) {
    if (bill.dueDay > 28) {
      formattedDueDay = 28;
    }
  }
  if (month == 4 || month == 6 || month == 9 || month == 11) {
    if (bill.dueDay > 30) {
      formattedDueDay = 30;
    }
  }

  return (
    <Link to={`/bills/${bill.id}/${month}/${year}/${bill.paid}`}>
      <BillContainer
        checkPaid={bill.paid}
        checkDue={
          (today.getFullYear() >= year && today.getMonth() + 1 > month) ||
          (today.getMonth() + 1 === month && today.getDate() > formattedDueDay)
        }
      >
        <p className="due">{formattedDueDay}</p>
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
  background: ${(props) =>
    props.checkPaid ? "#A5FFB4" : props.checkDue ? "#FF9FC6" : "#ffffff"};
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
