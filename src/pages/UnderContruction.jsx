// UnderConstruction.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faWhatsapp, faReact } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faHome, faToolbox } from '@fortawesome/free-solid-svg-icons';
import './UnderConstruction.css'; // Asegúrate de crear y mejorar este archivo CSS.

const whatsappLink = "https://wa.me/593998500498";

const UnderConstruction = () => {
  return (
    <Container className="my-5 under-construction">
      <Row className="justify-content-center">
        <Col md={8} className="text-center">
          <FontAwesomeIcon icon={faToolbox} size="6x" className="construction-icon" />
          <h1 className="mt-4">Estamos trabajando en ello...</h1>
          <p className="mb-4">Nuestro sitio está actualmente en construcción. Estamos trabajando para crear una experiencia increíble para ti. ¡Vuelve pronto!</p>
          
          <h2>Información de Contacto</h2>
          <p className="contact-detail"><FontAwesomeIcon icon={faTwitter} /> @joelarguello</p>
          <p className="contact-detail"><FontAwesomeIcon icon={faEnvelope} /> joel.darguello@gmail.com</p>
          <p className="contact-detail"><FontAwesomeIcon icon={faHome} /> El Arenal y Panamericana Norte, E35 Conjunto Casales Buenaventura</p>
          <p className="contact-detail"><FontAwesomeIcon icon={faWhatsapp} /><a href={whatsappLink} target="_blank" rel="noopener noreferrer"> 0998500498</a></p>
        </Col>
      </Row>
    </Container>
  );
}

export default UnderConstruction;
