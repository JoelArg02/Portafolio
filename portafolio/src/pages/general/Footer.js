import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <Container fluid className="bg-dark text-white mt-5">
      <Row>
        <Col className="text-center py-3">
          © 2024 Joel Arguello. Todos los derechos reservados. <br />
          Sitio desarrollado con <strong>React</strong> y <strong>React Bootstrap</strong>.
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
