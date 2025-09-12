import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Container,
  Typography,
  Box,
  useMediaQuery,
  useTheme,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as ScrollLink } from "react-scroll";

const navLinks = [
  { label: "Home", to: "home" },
  { label: "Skills", to: "skills" },
  { label: "Projects", to: "projects" },
  { label: "Contact", to: "contact" },
];

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [openDrawer, setOpenDrawer] = useState(false);
  const [elevate, setElevate] = useState(false);

  const handleDrawerToggle = () => {
    setOpenDrawer(!openDrawer);
  };

  // Shrink / elevate navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setElevate(true);
      } else {
        setElevate(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "#153448",
          transition: "all 0.3s ease",
          py: elevate ? 0.5 : 1, // shrink height on scroll
          boxShadow: elevate ? 3 : "none",
        }}
      >
        <Container>
          <Toolbar sx={{ justifyContent: "space-between" }}>
            {/* Brand Title */}
            <Typography
              component={ScrollLink}
              to="home"
              smooth={true}
              duration={600}
              offset={-70}
              sx={{
                textDecoration: "none",
                fontFamily: "Work Sans, sans-serif",
                fontWeight: "bold",
                fontSize: isMobile ? "1.2rem" : "1.5rem",
                color: "#fff",
                letterSpacing: "0.05rem",
                cursor: "pointer",
                "&:hover": {
                  color: "#cfd8dc",
                },
              }}
            >
              Portfolio
            </Typography>

            {/* Navigation Links or Hamburger */}
            {isMobile ? (
              <IconButton
                edge="end"
                color="inherit"
                onClick={handleDrawerToggle}
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <Box sx={{ display: "flex", gap: 2 }}>
                {navLinks.map((nav) => (
                  <Button
                    key={nav.label}
                    component={ScrollLink}
                    to={nav.to}
                    smooth={true}
                    duration={600}
                    offset={-70}
                    spy={true}
                    activeClass="active"
                    sx={navButtonStyle}
                  >
                    {nav.label}
                  </Button>
                ))}
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Drawer for mobile navigation */}
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={handleDrawerToggle}
        sx={{ display: { sm: "block", md: "none" } }}
      >
        <Box
          sx={{
            width: 200,
            backgroundColor: "#153448",
            height: "100%",
            color: "#fff",
            fontFamily: "Work Sans, sans-serif",
          }}
        >
          <List>
            {navLinks.map((nav) => (
              <ListItem key={nav.label} disablePadding>
                <ListItemButton
                  component={ScrollLink}
                  to={nav.to}
                  smooth={true}
                  duration={600}
                  offset={-70}
                  onClick={handleDrawerToggle}
                  sx={{
                    "&:hover": {
                      backgroundColor: "#1e3a5f",
                    },
                  }}
                >
                  <ListItemText
                    primary={nav.label}
                    primaryTypographyProps={{ fontSize: "1rem", pl: 1 }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

const navButtonStyle = {
  color: "#fff",
  fontFamily: "Work Sans, sans-serif",
  fontSize: "0.9rem",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "#1e3a5f",
  },
};

export default Navbar;
