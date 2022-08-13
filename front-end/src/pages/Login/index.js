import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import Header from "../../components/Header";
import { signIn } from "../../services/api";
import TokenContext from "../../contexts/TokenContext.js";
import UserContext from "../../contexts/UserContext.js";
import { Container } from "./style";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setToken } = useContext(TokenContext);
  const { setUser } = useContext(UserContext);

  const navigate = useNavigate();

  async function login(event) {
    event.preventDefault();

    const formData = {
      email: email,
      password: password,
    };

    try {
      const response = await signIn(formData);

      setToken(response.data.token);
      setUser(response.data.user);
      localStorage.setItem("token", JSON.stringify(response.data.token));
      localStorage.setItem("user", JSON.stringify(response.data.user));

      navigate("/main");
    } catch (error) {
      console.log(error.response);
      alert(`${error.response.data}`);
    }
  }

  return (
    <Container>
      <Header />

      <form onSubmit={login}>
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
        <button id="submit" type="submit">
          Entrar
        </button>
      </form>

      <Link to="/sign-up">
        <p>Cadastrar</p>
      </Link>
    </Container>
  );
}
