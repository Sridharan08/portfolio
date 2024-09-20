import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const Home = () => (
  <Box
    sx={{
      height: '100vh',
      fontFamily: 'Work Sans, sans-serif', 
      background: 'white',
      color: '#153448',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '0 2rem',
      animation: 'fadeIn 1s ease-out', // Add fade-in animation to the whole container
      // Responsive styles using breakpoints for mobile, tablet, and desktop
      paddingTop: {
        xs: '20px', // Extra small devices (mobiles)
        sm: '40px', // Small devices (tablets)
        md: '0',    // Medium devices and up (desktops)
      },
    }}
  >
    <Container
      maxWidth="sm"
      sx={{
        animation: 'zoomIn 2s ease-out', // Add zoom-in animation to the container
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: 'bold',
          fontFamily: 'Work Sans, sans-serif',
          mb: 2,
          color: '#153448',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
          opacity: 0, // Start with invisible text
          animation: 'fadeIn 2s ease-out 0.5s forwards', // Delay fade-in for staggered effect
          // Responsive font size
          fontSize: {
            xs: '2rem', // Mobile view
            sm: '2.5rem', // Tablet view
            md: '3rem',  // Desktop view
          },
        }}
      >
        Hi, I'm Sridharan
      </Typography>
      <Typography
        variant="h5"
        sx={{
          fontWeight: 'bold',
          fontFamily: 'Work Sans, sans-serif',
          color: '#153448',
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
          opacity: 0, // Start with invisible text
          animation: 'fadeIn 2s ease-out 1.5s forwards', // Delay fade-in for staggered effect
          // Responsive font size
          fontSize: {
            xs: '1.2rem', // Mobile view
            sm: '1.5rem', // Tablet view
            md: '1.75rem', // Desktop view
          },
        }}
      >
        I'm a web developer specializing in modern web technologies.
      </Typography>
    </Container>
    <style>
      {`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes zoomIn {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}
    </style>
  </Box>
);

export default Home;
