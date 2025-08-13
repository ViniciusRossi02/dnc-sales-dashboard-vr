import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // import para dar certo as rotas do site

// rotas do site sendo router o pai, routes o "irmao mais velho" e route os links em si
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<>LOGIN</>} />
        <Route path="/cadastro" element={<>CADASTRO</>} />
        <Route path="/home" element={<>HOME</>} />
        <Route path="/leads" element={<>LEADS</>} />
        <Route path="/perfil" element={<>PERFIL</>} />
      </Routes>
    </Router>
  );
}

export default App;
