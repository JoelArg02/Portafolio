import "./App.css";
import Header from "./pages/general/Header"; 
import Footer from "./pages/general/Footer"; 
import Home from "./pages/home/Home";
import NotFound from "./pages/general/NotFound";
import Technology from "./pages/cv/Technology";
import Projects from "./pages/cv/Projects";
import AboutMe from "./pages/cv/AboutMe";
import Contact from "./pages/cv/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer /> 
    </Router>
  );
}

export default App;
