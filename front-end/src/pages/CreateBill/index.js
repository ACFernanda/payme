import { useState, useEffect, useContext } from "react";

import LoggedHeader from "../../components/LoggedHeader";
import NewBillContainer from "../../components/NewBillContainer";
import { Container } from "./style";
import UserContext from "../../contexts/UserContext";

export default function CreateBill() {
  const { user } = useContext(UserContext);

  return (
    <Container>
      <LoggedHeader />
      <h2>Nova conta</h2>

      <NewBillContainer />
    </Container>
  );
}
