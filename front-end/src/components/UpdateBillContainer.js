import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import TokenContext from "../contexts/TokenContext";
import UserContext from "../contexts/UserContext";
import { getBill, createTransaction } from "../services/api";

export default function UpdateBillContainer({ billId }) {
  const { token } = useContext(TokenContext);
  const { user } = useContext(UserContext);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [value, setValue] = useState("");
  const [paid, setPaid] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    (() => {
      const billResponse = getBill(token, billId);
      billResponse.then((res) => {
        console.log(res.data);
        setTitle(res.data.title);
        {
          res.data.dueMonth < 10
            ? setDate(
                `${res.data.dueYear}-0${res.data.dueMonth}-${res.data.dueDay}`
              )
            : setDate(
                `${res.data.dueYear}-${res.data.dueMonth}-${res.data.dueDay}`
              );
        }
        setValue(res.data.value);
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
          <label for="title">Conta</label>
          <input
            disabled
            name="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="line">
          <label for="date">Vencimento</label>
          <input
            required
            name="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="line">
          <label for="value">Valor</label>
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
          <label for="paid">Conta paga</label>
          <input
            className="checkbox"
            type="checkbox"
            name="paid"
            value={paid}
            onChange={(e) => setPaid(!paid)}
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
      font-size: 22px;
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
