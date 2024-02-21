import React from "react";
import { Container, Accordion, OverlayTrigger, Tooltip } from "react-bootstrap";

const Projects = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Proyectos y Trabajos</h2>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Trabajos Actuales</Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>Trabajo en Diseño Gráfico (2021 - Actual)</li>
              <li>Diseño de Páginas Web (2020 - Actual)</li>
              <li>
                <OverlayTrigger
                  placement="right"
                  overlay={
                    <Tooltip>
                      Visita la página de Créditos de Nexfon en joeltest.tech
                    </Tooltip>
                  }
                >
                  <a
                    href="https://joeltest.tech"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Página de Créditos en joeltest.tech
                  </a>
                </OverlayTrigger>
              </li>
              <li>
                <OverlayTrigger
                  placement="right"
                  overlay={
                    <Tooltip>Visita ventas de Nexfon en nexfon.ec</Tooltip>
                  }
                >
                  <a
                    href="https://nexfon.ec"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Página de Créditos en nexfon.ec
                  </a>
                </OverlayTrigger>
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Trabajos en Construcción</Accordion.Header>
          <Accordion.Body>
            <li>
              <OverlayTrigger
                placement="right"
                overlay={
                  <Tooltip>
                    Visita la página de hospital como plantilla en
                    medicina.citaviso.com
                  </Tooltip>
                }
              >
                <a
                  href="https://medicina.joeltest.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Página de hospital en medicina.joeltest.tech{" "}
                </a>
              </OverlayTrigger>
            </li>
            <li>
              <OverlayTrigger
                placement="right"
                overlay={
                  <Tooltip>Visita ventas de Nexfon en nexfon.ec</Tooltip>
                }
              >
                <a
                  href="https://nexfon.ec"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Página de Créditos en nexfon.ec
                </a>
              </OverlayTrigger>
            </li>
            <li>
              <OverlayTrigger
                placement="right"
                overlay={
                  <Tooltip>Visita la página de noticias de Angel TV en noticiasangeltv.com</Tooltip>
                }
              >
                <a
                  href="https://noticiasangeltv.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Página de noticias en noticiasangeltv.com
                </a>
              </OverlayTrigger>
            </li>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Trabajos Terminados</Accordion.Header>
          <Accordion.Body>
            <p>Aquí puedes listar los proyectos que has completado.</p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export default Projects;
