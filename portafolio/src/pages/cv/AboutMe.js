import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AboutMe = () => {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <h1 className="text-center mb-4">Sobre Mí</h1>
          <p>Como estudiante de Ingeniería de Software, he desarrollado una sólida base en el proceso integral de desarrollo de productos de software. Mi educación me ha proporcionado una comprensión profunda de las tecnologías actuales y una perspectiva única sobre el desarrollo de software desde sus fundamentos. Esta también me ha equipado con habilidades técnicas esenciales y una capacidad analítica aguda, preparándome para contribuir eficazmente en roles que requieren tanto conocimiento teórico como práctico en el campo de la Ingeniería de Software.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMe;
