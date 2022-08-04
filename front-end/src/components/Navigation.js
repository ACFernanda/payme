import { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { IoMdArrowDropright, IoMdArrowDropleft } from "react-icons/io";

export default function Navigation() {
  const months = {
    0: "JANEIRO",
    1: "FEVEREIRO",
    2: "MARÇO",
    3: "ABRIL",
    4: "MAIO",
    5: "JUNHO",
    6: "JULHO",
    7: "AGOSTO",
    8: "SETEMBRO",
    9: "OUTUBRO",
    10: "NOVEMBRO",
    11: "DEZEMBRO",
  };
  const today = new Date();

  const [month, setMonth] = useState(today.getMonth());
  const [year, setYear] = useState(today.getFullYear());

  return (
    <Container>
      <IconContext.Provider value={{ color: "#D9D9D9", size: "55px" }}>
        <IoMdArrowDropleft
          onClick={() => {
            if (month === 0) {
              setMonth(11);
              setYear(year - 1);
            } else {
              setMonth(month - 1);
            }
          }}
        />
        <div>
          <p>
            {months[month]} {year}
          </p>
        </div>
        <IoMdArrowDropright
          onClick={() => {
            if (month === 11) {
              setMonth(0);
              setYear(year + 1);
            } else {
              setMonth(month + 1);
            }
          }}
        />
      </IconContext.Provider>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;

  div {
    background-color: #fd227c;
    border: 1px solid #fd227c;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    width: 200px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;

    p {
      font-family: "Recursive";
      font-weight: 600;
      font-size: 22px;
      text-align: center;
      color: #ffffff;
    }
  }
`;
