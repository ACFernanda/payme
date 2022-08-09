import { useState, useEffect, useContext } from "react";

import LoggedHeader from "../../components/LoggedHeader";
import UpdateBillContainer from "../../components/UpdateBillContainer";
import { Container } from "./style";
import UserContext from "../../contexts/UserContext";

export default function UpdateBill() {
  const { user } = useContext(UserContext);

  return (
    <Container>
      <LoggedHeader />
      <h2>Editar conta</h2>

      <UpdateBillContainer />
    </Container>
  );
}
