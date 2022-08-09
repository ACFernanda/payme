import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import LoggedHeader from "../../components/LoggedHeader";
import UpdateBillContainer from "../../components/UpdateBillContainer";
import { Container } from "./style";
import UserContext from "../../contexts/UserContext";

export default function UpdateBill() {
  const { user } = useContext(UserContext);
  const billId = useParams().id;

  return (
    <Container>
      <LoggedHeader />
      <h2>Editar conta</h2>

      <UpdateBillContainer billId={billId} />
    </Container>
  );
}