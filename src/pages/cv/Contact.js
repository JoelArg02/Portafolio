import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Contact = () => {
  const whatsappLink = "https://wa.me/593998500498";

  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Contacto</h1>
      <Row>
        <Col md={6}>
          <h3>Información de Contacto</h3>
          <p><strong>Twitter:</strong> @joelarguello</p>
          <p><strong>Email:</strong> joel.darguello@gmail.com</p>
          <p><strong>Dirección:</strong> El Arenal y Panamericana Norte, E35 Conjunto Casales Buenaventura</p>
          <p><strong>WhatsApp:</strong> <a href={whatsappLink} target="_blank" rel="noopener noreferrer">0998500498</a></p>
        </Col>
        <Col md={6}>
          <h3>Envíame un mensaje</h3>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" placeholder="Tu nombre" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Tu email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicMessage">
              <Form.Label>Mensaje</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Tu mensaje" />
            </Form.Group>

            <Button variant="primary" type="submit">Enviar</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
