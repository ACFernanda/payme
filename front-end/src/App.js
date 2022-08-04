import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import GlobalStyle from "./styles/GlobalStyle";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/SignUp";
import Homepage from "./pages/Homepage";
// import CreateBill from "./pages/CreateBill";
// import UpdateBill from "./pages/UpdateBill";

import UserContext from "./contexts/UserContext.js";
import TokenContext from "./contexts/TokenContext.js";

const App = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [token, setToken] = useState(JSON.parse(localStorage.getItem("token")));

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      <UserContext.Provider value={{ user, setUser }}>
        <Router>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/sign-up" element={<RegisterPage />} />
            <Route path="/main" element={<Homepage />} />
            {/* <Route path="/bills/new" element={<CreateBill />} />
            <Route path="/bills/:id" element={<UpdateBill />} /> */}
          </Routes>
          <GlobalStyle />
        </Router>
      </UserContext.Provider>
    </TokenContext.Provider>
  );
};

export default App;
