import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8} className="text-center">
          <h1>Bienvenido a Mi Portafolio</h1>
          <p>Como estudiante de Ingeniería de Software, estoy dedicado al desarrollo integral de productos de software, combinando conocimiento teórico y habilidades prácticas.</p>
        </Col>
      </Row>
      <Row>
        <Col md={4} className="text-center">
          <h2>Habilidades</h2>
          {/* Lista o íconos de habilidades */}
        </Col>
        <Col md={4} className="text-center">
          <h2>Proyectos</h2>
          {/* Resumen o enlaces a proyectos */}
        </Col>
        <Col md={4} className="text-center">
          <h2>Contacto</h2>
          <p>joel.darguello@gmail.com</p>
          {/* Enlace a WhatsApp */}
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
