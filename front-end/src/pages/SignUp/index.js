import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Header from "../../components/Header";
import { signUp } from "../../services/api";
import { Container } from "./style";

export default function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  async function register(event) {
    event.preventDefault();

    const formData = {
      name: name,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };

    try {
      await signUp(formData);
      navigate("/");
    } catch (error) {
      alert(`Something went wrong. ${error.message}`);
    }
  }

  return (
    <Container>
      <Header />

      <form onSubmit={register}>
        <input
          required
          id="name"
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          required
          id="email"
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          required
          id="password"
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          required
          id="confirm-password"
          type="password"
          placeholder="Confirme a senha"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </form>

      <Link to="/">
        <p>Já tenho uma conta</p>
      </Link>
    </Container>
  );
}
