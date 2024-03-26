// App.js
import "./App.css";

import UnderConstruction from "./pages/UnderContruction";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UnderConstruction />} />{" "}
        {/* Página principal en construcción */}
        <Route path="/technology" element={<UnderConstruction />} />{" "}
        {/* Tecnología en construcción */}
        <Route path="/projects" element={<UnderConstruction />} />{" "}
        {/* Proyectos en construcción */}
        <Route path="/about" element={<UnderConstruction />} />{" "}
        {/* Acerca de mí en construcción */}
        <Route path="/contact" element={<UnderConstruction />} />{" "}
        {/* Página de contacto */}
        <Route path="*" element={<UnderConstruction />} />
      </Routes>
    </Router>
  );
}

export default App;
