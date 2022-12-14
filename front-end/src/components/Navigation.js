import styled from "styled-components";
import { IconContext } from "react-icons";
import { IoMdArrowDropright, IoMdArrowDropleft } from "react-icons/io";

export default function Navigation({
  month,
  year,
  setMonth,
  setYear,
  setBills,
  getAllBills,
}) {
  const months = {
    1: "JANEIRO",
    2: "FEVEREIRO",
    3: "MARÇO",
    4: "ABRIL",
    5: "MAIO",
    6: "JUNHO",
    7: "JULHO",
    8: "AGOSTO",
    9: "SETEMBRO",
    10: "OUTUBRO",
    11: "NOVEMBRO",
    12: "DEZEMBRO",
  };

  return (
    <Container>
      <IconContext.Provider value={{ color: "#D9D9D9", size: "55px" }}>
        <IoMdArrowDropleft
          onClick={() => {
            if (month === 1) {
              setMonth(12);
              setYear(year - 1);
            } else {
              setMonth(month - 1);
            }
          }}
          style={{ cursor: "pointer" }}
        />
        <div>
          <p>
            {months[month]} {year}
          </p>
        </div>
        <IoMdArrowDropright
          onClick={() => {
            if (month === 12) {
              setMonth(1);
              setYear(year + 1);
            } else {
              setMonth(month + 1);
            }
          }}
          style={{ cursor: "pointer" }}
        />
      </IconContext.Provider>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 50px;

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

  @media (max-width: 515px) {
    margin-top: 25px;
  }
`;
