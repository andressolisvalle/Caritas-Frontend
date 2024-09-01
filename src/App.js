import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Institucion from "./components/institucion";
import Proyecto from "./components/proyecto";
import Beneficiario from "./components/beneficiario";
function App() {
  return (
    <Router>
      <Dashboard />
      <main>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <Routes>
            <Route exact path="/" />
            <Route path="/proyectos" element={<Proyecto />} />
            <Route path="/beneficiarios" element={<Beneficiario />} />
            <Route path="/instituciones" element={<Institucion/>} />
          </Routes>
        </div>
      </main>
    </Router>
  );
}

export default App;
