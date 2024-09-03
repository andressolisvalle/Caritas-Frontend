import "./App.css";
import Dashboard from "./components/Template";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Institucion from "./components/institucion";
import Proyecto from "./components/proyecto";
import Beneficiario from "./components/beneficiario";
import Inicio from "./components/dashboard";
function App() {
  return (
    <Router>
      <Dashboard />
      <main className="h-[100vh] w-full">
        <div className="w-full max-w-80 px-7 py-6">
          <Routes>
            <Route exact path="/dashboard" element={<Inicio/>}/>
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
