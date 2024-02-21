import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const NotFound = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
  };

  return (
    <Container
      fluid
      className="min-vh-100 d-flex flex-column justify-content-center align-items-center"
    >
      <Row>
        <Col className="text-center">
          <h1>404</h1>
          <h2>Página No Encontrada</h2>
          <p>
            Lo sentimos, la página que estás buscando no existe o fue movida.
          </p>
          <Button variant="primary" onClick={handleBack}>
            Volver
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
