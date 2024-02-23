import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AboutMe from "../../pages/cv/AboutMe";
import Contact from "../../pages/cv/Contact";
import Projects from "../../pages/cv/Projects";
import Technology from "../../pages/cv/Technology";

const Home = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={8} className="text-center">
          <h1>Bienvenido a Mi Portafolio</h1>
          <p>
            Como estudiante de Ingeniería de Software, estoy dedicado al
            desarrollo integral de productos de software, combinando
            conocimiento teórico y habilidades prácticas.
          </p>
        </Col>
      </Row>
      <AboutMe></AboutMe>
      <Projects></Projects>
      <Technology></Technology>
      <Contact></Contact>
    </Container>
  );
};

export default Home;
