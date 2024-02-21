import React, { useState } from 'react';
import { Container, Tab, Row, Col, Nav } from 'react-bootstrap';

const Technology = () => {
  const [key, setKey] = useState('DOCKER');

  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Tecnologías conocidas y usadas</h1>
      <Tab.Container id="left-tabs-example" activeKey={key} onSelect={(k) => setKey(k)}>
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              {/* Tecnologías */}
              <Nav.Item><Nav.Link eventKey="DOCKER">DOCKER</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link eventKey="REACT">REACT</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link eventKey="EXPRESS">EXPRESS</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link eventKey=".NET">.NET</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link eventKey="DJANGO">DJANGO</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link eventKey="NODEJS">Node.js</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link eventKey="VUEJS">Vue.js</Nav.Link></Nav.Item>
              {/* Lenguajes */}
              <Nav.Item><Nav.Link eventKey="LENGUAJES">Lenguajes</Nav.Link></Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              {/* Información de Tecnologías */}
              <Tab.Pane eventKey="DOCKER"><p>DOCKER: Plataforma para desarrollar, enviar y ejecutar aplicaciones en contenedores.</p></Tab.Pane>
              <Tab.Pane eventKey="REACT"><p>REACT: Biblioteca de JavaScript para construir interfaces de usuario.</p></Tab.Pane>
              <Tab.Pane eventKey="EXPRESS"><p>EXPRESS: Framework para aplicaciones web en Node.js.</p></Tab.Pane>
              <Tab.Pane eventKey=".NET"><p>.NET: Framework de Microsoft para el desarrollo de aplicaciones.</p></Tab.Pane>
              <Tab.Pane eventKey="DJANGO"><p>DJANGO: Framework de alto nivel para el desarrollo web rápido en Python.</p></Tab.Pane>
              <Tab.Pane eventKey="NODEJS"><p>Node.js: Entorno de ejecución para JavaScript del lado del servidor.</p></Tab.Pane>
              <Tab.Pane eventKey="VUEJS"><p>Vue.js: Framework progresivo para construir interfaces de usuario.</p></Tab.Pane>
              {/* Información de Lenguajes */}
              <Tab.Pane eventKey="LENGUAJES">
                <p>Lenguajes de Programación:</p>
                <ul>
                  <li>C++: Lenguaje de programación de propósito general.</li>
                  <li>C: Lenguaje de programación de propósito general, ideal para el desarrollo de firmware o software de sistemas.</li>
                  <li>C#: Lenguaje de programación desarrollado por Microsoft para una amplia gama de aplicaciones empresariales.</li>
                  <li>Java: Lenguaje de programación orientado a objetos utilizado para aplicaciones móviles, web y de escritorio.</li>
                  <li>JavaScript: Lenguaje de programación interpretado, utilizado principalmente en el lado del cliente para scripts de páginas web.</li>
                  <li>TypeScript: Superset de JavaScript que añade tipos estáticos.</li>
                  <li>Python: Lenguaje de programación de alto nivel y propósito general, conocido por su fácil lectura y eficiencia.</li>
                </ul>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
};

export default Technology;
