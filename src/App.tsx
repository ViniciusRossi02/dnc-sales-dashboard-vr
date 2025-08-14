import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // import para dar certo as rotas do site
import { Home, Leads, Login, Profile, Registration } from "./pages";

// rotas do site sendo router o pai, routes o "irmao mais velho" e route os links em si
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Registration />} />
        <Route path="/home" element={<Home />} />
        <Route path="/leads" element={<Leads />} />
        <Route path="/perfil" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
