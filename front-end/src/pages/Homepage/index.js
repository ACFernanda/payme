import { useState, useEffect, useContext } from "react";

import LoggedHeader from "../../components/LoggedHeader";
import Navigation from "../../components/Navigation";
import Table from "../../components/Table";
import { Container } from "./style";
import UserContext from "../../contexts/UserContext";
import TokenContext from "../../contexts/TokenContext";
import { getBills } from "../../services/api";

export default function Homepage() {
  const { user } = useContext(UserContext);
  const { token } = useContext(TokenContext);
  const today = new Date();

  const [bills, setBills] = useState([]);
  const [month, setMonth] = useState(today.getMonth() + 1);
  const [year, setYear] = useState(today.getFullYear());

  async function getAllBills(token) {
    try {
      const response = await getBills(token, month, year);
      setBills(response.data);
    } catch (error) {
      console.log(error);
      alert("Erro ao carregar contas");
    }
  }

  useEffect(() => {
    getAllBills(token);
  }, [month]);

  return (
    <Container>
      <LoggedHeader />
      <h2>Olá, {user.name}!</h2>

      <Table bills={bills} month={month} />
      <Navigation
        month={month}
        year={year}
        setMonth={setMonth}
        setYear={setYear}
        setBills={setBills}
        getAllBills={getAllBills}
      />
    </Container>
  );
}
