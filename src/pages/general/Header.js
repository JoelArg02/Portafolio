import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
          mt: "3px",
        }}
      >
        <AppBar
          position="Absolute"
          sx={{
            maxWidth: "80%",
            borderRadius: "8px",
            background: "black",
            marginTop: "3px",
          }}
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
              >
                <Link
                  to="/"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Mi Portafolio
                </Link>
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
              </Box>

              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                <Button
                  sx={{ my: 2, color: "white", display: "block" }}
                  href="/about"
                >
                  Sobre Mí
                </Button>
                <Button
                  sx={{ my: 2, color: "white", display: "block" }}
                  href="/projects"
                >
                  Trabajos
                </Button>
                <Button
                  sx={{ my: 2, color: "white", display: "block" }}
                  href="/contact"
                >
                  Contacto
                </Button>
                <Button
                  sx={{ my: 2, color: "white", display: "block" }}
                  href="/technology"
                >
                  Tecnologías
                </Button>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
      {/* Reemplaza el Offset por un Box con un alto específico para evitar que el contenido se oculte detrás del AppBar */}
      <Box sx={{ height: 64 }} />{" "}
      {/* Ajusta este valor según la altura de tu AppBar */}
    </>
  );
};

export default Header;
