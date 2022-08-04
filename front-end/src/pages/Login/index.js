import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Header from "../../components/Header";
import { signIn } from "../../services/api";
import { Container } from "./style";

export default function LoginPage({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function login(event) {
    event.preventDefault();

    const formData = {
      email: email,
      password: password,
    };

    try {
      await signIn(formData);
      navigate("/main");
    } catch {
      alert("Erro! :( Tente novamente.");
    }
  }

  return (
    <Container>
      <Header />

      <form onSubmit={login}>
        <input
          required
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          required
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Entrar</button>
      </form>

      <Link to="/sign-up">
        <p>Cadastrar</p>
      </Link>
    </Container>
  );
}
