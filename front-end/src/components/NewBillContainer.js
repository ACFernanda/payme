import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { createBill } from "../services/api";
import TokenContext from "../contexts/TokenContext";

export default function NewBillContainer() {
  const { token } = useContext(TokenContext);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [value, setValue] = useState("");
  const [recurrence, setRecurrence] = useState(false);

  const navigate = useNavigate();

  async function addNewBill(event) {
    event.preventDefault();

    const formData = {
      title: title,
      dueDay: parseInt(date.split("-")[2]),
      dueMonth: parseInt(date.split("-")[1]),
      dueYear: parseInt(date.split("-")[0]),
      value: value,
      recurrence: recurrence,
    };

    try {
      await createBill(formData, token);
      navigate("/main");
    } catch (error) {
      console.log(error);
      alert(`Something went wrong. ${error.message}`);
    }
  }

  return (
    <Container>
      <form onSubmit={addNewBill}>
        <div className="line">
          <label forhtml="title">Conta</label>
          <input
            required
            name="title"
            type="text"
            value={title}
            maxLength="14"
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
          <label forhtml="recurrence">Recorrência mensal</label>
          <input
            className="checkbox"
            type="checkbox"
            name="recurrence"
            value={recurrence}
            onChange={(e) => setRecurrence(!recurrence)}
          />
        </div>

        <button type="submit">Salvar</button>
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
      font-size: 22px;

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
  }

  @media (max-width: 515px) {
    width: 95vw;

    form {
      button {
        width: 95vw;
      }
    }
  }
`;
