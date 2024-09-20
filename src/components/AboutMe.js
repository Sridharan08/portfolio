import React from 'react';
import { Container, Typography, Avatar, Box } from '@mui/material';
import { keyframes } from '@emotion/react';

// Define animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const zoomIn = keyframes`
  from {
    transform: scale(0.9);
  }
  to {
    transform: scale(1);
  }
`;

const AboutMe = () => (
  <Container
    maxWidth="md"
    sx={{
      display: 'flex',
      flexDirection: {
        xs: 'column', // Column layout for mobile
        sm: 'row', // Row layout for tablets and larger
      },
      alignItems: 'center',
      textAlign: 'left',
      py: 5,
      animation: `${fadeIn} 1s ease-in-out`,
      fontFamily: 'Work Sans, sans-serif',
      color: '#153448', // Dark text color
      marginTop: '0', // Aligns with Navbar format
    }}
  >
    {/* Left side: Avatar */}
    <Avatar
      src='/images/sridhar.jpg'
      alt="Sridharan"
      sx={{
        width: {
          xs: 200, // Smaller size for mobile
          sm: 250, // Larger size for tablet and up
          md: 300, // Full size for desktops
        },
        height: {
          xs: 200,
          sm: 250,
          md: 300,
        },
        mr: {
          xs: 0, // No margin for mobile
          sm: 5, // Add margin for tablets and larger
        },
        mb: {
          xs: 3, // Margin bottom for mobile to create space
          sm: 0, // No margin for larger screens
        },
        animation: `${zoomIn} 1s ease-in-out`,
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
          transform: 'scale(1.05)', // Zoom effect on hover
        },
      }}
    />
    
    {/* Right side: Text Content */}
    <Box>
      <Typography
        variant="h3"
        sx={{
          color: '#153448', // Heading color
          fontFamily: 'Work Sans, sans-serif',
          fontWeight: 'bold',
          transition: 'color 0.3s ease-in-out',
          '&:hover': {
            color: '#3f51b5', // Change color on hover
          },
          fontSize: {
            xs: '2rem', // Smaller font for mobile
            sm: '2.5rem', // Medium size for tablets
            md: '3rem', // Full size for desktops
          },
        }}
      >
        About Me
      </Typography>
      <Typography
        variant="body1"
        sx={{
          mt: 2,
          lineHeight: 1.6,
          color: '#153448',
          fontFamily: 'Work Sans, sans-serif',
          fontSize: {
            xs: '1rem', // Smaller font for mobile
            sm: '1.2rem', // Medium font for tablets
            md: '1.3rem', // Full size for desktops
          },
          transition: 'color 0.3s ease-in-out',
          '&:hover': {
            color: '#3f51b5', // Change color on hover
          },
        }}
      >
        I'm a final-year student with a strong foundation in web development and a passion for technology. Skilled in Figma, Wix Studio, and frameworks like React.js, I also have hands-on experience with the MERN stack. I thrive on solving real-world problems and am eager to expand my knowledge and skills. As I approach graduation, I'm actively seeking job or internship opportunities where I can leverage my technical abilities and collaborative mindset. If you’re looking for a motivated and adaptable team member, I’d love to connect and explore potential opportunities.
      </Typography>
    </Box>
  </Container>
);

export default AboutMe;
