import { useState, useEffect, useContext } from "react";

import LoggedHeader from "../../components/LoggedHeader";
import Navigation from "../../components/Navigation";
import { Container } from "./style";
import UserContext from "../../contexts/UserContext";

export default function Homepage() {
  const { user } = useContext(UserContext);

  return (
    <Container>
      <LoggedHeader />
      <h2>Olá, {user.name}!</h2>

      {/* <Table /> */}
      <Navigation />
    </Container>
  );
}
