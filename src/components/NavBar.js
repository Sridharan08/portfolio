import React from 'react';
import { AppBar, Toolbar, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <AppBar position="sticky" sx={{ backgroundColor: '#153448' }}>
    <Container>
      <Toolbar sx={{ justifyContent: 'space-evenly' }}>
        {/* Home Button */}
        <Button
          component={Link}
          to="/"
          sx={{
            color: '#fff',
            fontFamily: 'Work Sans, sans-serif',
            '&:hover': {
              backgroundColor: '#1e3a5f', // Darker shade for hover effect
            },
          }}
        >
          Home
        </Button>

        {/* About Me Button */}
        <Button
          component={Link}
          to="/aboutme"
          sx={{
            color: '#fff',
            fontFamily: 'Work Sans, sans-serif',
            '&:hover': {
              backgroundColor: '#1e3a5f',
            },
          }}
        >
          About Me
        </Button>

        {/* Skills Button */}
        <Button
          component={Link}
          to="/skills"
          sx={{
            color: '#fff',
            fontFamily: 'Work Sans, sans-serif',
            '&:hover': {
              backgroundColor: '#1e3a5f',
            },
          }}
        >
          Skills
        </Button>

        {/* Projects Button */}
        <Button
          component={Link}
          to="/projects"
          sx={{
            color: '#fff',
            fontFamily: 'Work Sans, sans-serif',
            '&:hover': {
              backgroundColor: '#1e3a5f',
            },
          }}
        >
          Projects
        </Button>

        {/* Contact Button */}
        <Button
          component={Link}
          to="/contact"
          sx={{
            color: '#fff',
            fontFamily: 'Work Sans, sans-serif',
            '&:hover': {
              backgroundColor: '#1e3a5f',
            },
          }}
        >
          Contact
        </Button>
      </Toolbar>
    </Container>
  </AppBar>
);

export default Navbar;
