import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import TokenContext from "../contexts/TokenContext";
import UserContext from "../contexts/UserContext";
import { getBill, createTransaction } from "../services/api";

export default function UpdateBillContainer({ billId, month, year, paid }) {
  const { token } = useContext(TokenContext);
  const { user } = useContext(UserContext);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [value, setValue] = useState("");
  const [payment, setPayment] = useState(JSON.parse(paid));
  const [recurrence, setRecurrence] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    (() => {
      const billResponse = getBill(token, billId);
      billResponse.then((res) => {
        setTitle(res.data.title);
        setValue(res.data.value);
        setRecurrence(res.data.recurrence);
        if (month == 2) {
          if (res.data.dueDay > 28) {
            setDate(`${year}-0${month}-28`);
            return;
          } else {
            setDate(`${year}-0${month}-${res.data.dueDay}`);
            return;
          }
        }
        if (month == 4 || month == 6 || month == 9 || month == 11) {
          if (month < 10) {
            if (res.data.dueDay > 30) {
              setDate(`${year}-0${month}-30`);
              return;
            } else {
              setDate(`${year}-0${month}-${res.data.dueDay}`);
              return;
            }
          }
          if (month >= 10) {
            if (res.data.dueDay > 30) {
              setDate(`${year}-${month}-30`);
              return;
            } else {
              setDate(`${year}-${month}-${res.data.dueDay}`);
              return;
            }
          }
        }
        if (
          month == 1 ||
          month == 3 ||
          month == 5 ||
          month == 7 ||
          month == 8 ||
          month == 10 ||
          month == 12
        ) {
          if (month < 10) {
            setDate(`${year}-0${month}-${res.data.dueDay}`);
            return;
          } else {
            setDate(`${year}-${month}-${res.data.dueDay}`);
            return;
          }
        }
      });
    })();
  }, []);

  async function addNewTransaction(event) {
    event.preventDefault();

    const formData = {
      dueDay: parseInt(date.split("-")[2]),
      dueMonth: parseInt(date.split("-")[1]),
      dueYear: parseInt(date.split("-")[0]),
      value: value,
      paid: paid,
    };

    try {
      await createTransaction(formData, billId, token);
      console.log(formData);
      navigate("/main");
    } catch (error) {
      console.log(error);
      alert(`Something went wrong. ${error.message}`);
    }
  }

  return (
    <Container>
      <form onSubmit={addNewTransaction}>
        <div className="line">
          <label forhtml="title">Conta</label>
          <input
            disabled
            name="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="line">
          <label forhtml="date">
            Vencimento <br />
            <span>mês/dia/ano</span>
          </label>
          <input
            required
            disabled
            name="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="line">
          <label forhtml="value">Valor</label>
          <input
            required
            disabled={!recurrence}
            name="value"
            type="number"
            min="0.01"
            max="9999.99"
            step="0.01"
            placeholder=""
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>

        <div className="line">
          <label forhtml="paid">Conta paga</label>
          <input
            className="checkbox"
            type="checkbox"
            name="paid"
            checked={payment}
            onChange={(e) => setPayment(!payment)}
          />
        </div>

        <button type="submit">Salvar</button>
        <p onClick={() => alert("Cliquei")}>DELETAR CONTA</p>
      </form>
    </Container>
  );
}

const Container = styled.div`
  width: 500px;
  height: 400px;
  background: #d9d9d9;
  border-radius: 10px 10px 0px 0px;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 600;
  color: #333333;
  display: flex;
  justify-content: center;
  margin-top: 30px;
  position: relative;

  form {
    width: 90%;
    padding: 10px;
    margin-bottom: 60px;

    input {
      width: 160px;
      height: 25px;
      font-size: 16px;
    }

    .checkbox {
      width: 100px;
      height: 15px;
    }

    label {
      font-size: 23px;

      span {
        font-size: 12px;
      }
    }

    .line {
      margin: 30px 0;
      display: flex;
      justify-content: space-between;
    }

    button {
      width: 500px;
      height: 65px;
      background: #fd227c;
      border: none;
      border-radius: 0px 0px 10px 10px;
      font-family: "Recursive";
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      color: #ffffff;
      cursor: pointer;

      position: absolute;
      top: 405px;
      left: 0;
    }

    p {
      font-family: "Recursive";
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      text-decoration-line: underline;
      color: #000000;
      text-align: center;
      margin-top: 80px;
      cursor: pointer;
    }
  }
`;
