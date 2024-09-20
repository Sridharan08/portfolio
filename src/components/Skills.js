import React from 'react';
import { Container, Typography, Chip, Button, Box, Grid } from '@mui/material';

const Skills = () => (
  <Container 
    maxWidth="lg" 
    sx={{ 
      textAlign: 'center', 
      py: { xs: 4, sm: 5 }, // Responsive padding
      backgroundColor: '#D2E0FB', // Background color for the section
      borderRadius: 2, // Rounded corners
      marginTop: '60px',
      boxShadow: 1 // Subtle shadow for better visual separation
    }}
  >
    {/* Section Title */}
    <Typography 
      variant="h2" 
      sx={{ 
        color: '#153448', // Dark color for headings
        fontWeight: 'bold',
        fontFamily: 'Work Sans, sans-serif',
        transition: 'border-color 0.3s ease', // Smooth transition for border color
        '&:hover': {
          borderColor: '#153448', // Change border color on hover
          borderRadius: '8px', // Rounded corners for the border
          padding: '5px', // Padding to create space around the text and the border
        }
      }}
    >
      Skills
    </Typography>

    {/* Skills Grid Layout */}
    <Grid container spacing={4} sx={{ mt: 4 }}>
      {/* Technical Skills Section */}
      <Grid item xs={12} md={6}>
        <Typography 
          variant="h4" 
          sx={{ 
            mb: 2, 
            color: '#153448', 
            fontWeight: 'bold', 
            fontFamily: 'Work Sans, sans-serif',
            transition: 'border-color 0.3s ease',
            '&:hover': {
              borderColor: '#153448', // Change border color on hover
              borderRadius: '8px',
              padding: '5px',
            }
          }}
        >
          Technical Skills
        </Typography>
        <Box>
          {['Java', 'Python', 'JavaScript', 'React', 'Node.js'].map((skill) => (
            <Chip
              key={skill}
              label={skill}
              color="primary"
              sx={{ m: 0.5, fontFamily: 'Work Sans, sans-serif', fontSize: '1.2rem' }}
            />
          ))}
        </Box>
      </Grid>

      {/* Non-Technical Skills Section */}
      <Grid item xs={12} md={6}>
        <Typography 
          variant="h4" 
          sx={{ 
            mb: 2, 
            color: '#153448', 
            fontWeight: 'bold', 
            fontFamily: 'Work Sans, sans-serif',
            transition: 'border-color 0.3s ease',
            '&:hover': {
              borderColor: '#153448', // Change border color on hover
              borderRadius: '8px',
              padding: '5px',
            }
          }}
        >
          Non-Technical Skills
        </Typography>
        <Box>
          {['Communication', 'Teamwork', 'Leadership', 'Problem-Solving'].map((skill) => (
            <Chip
              key={skill}
              label={skill}
              color="secondary"
              sx={{ m: 0.5, fontFamily: 'Work Sans, sans-serif', fontSize: '1.2rem' }}
            />
          ))}
        </Box>
      </Grid>
    </Grid>

    {/* View Resume Button */}
    <Button
      variant="contained"
      color="error"
      sx={{ 
        mt: 4, 
        fontFamily: 'Work Sans, sans-serif', 
        textTransform: 'none', 
        px: { xs: 2, sm: 4 }, // Responsive padding
        py: { xs: 1, sm: 1.5 },
        fontSize: { xs: '1.2rem', sm: '1.4rem' }, // Responsive font size
        fontWeight: 'bold',
        '&:hover': {
          backgroundColor: '#153448', // Change background on hover
          color: '#fff' // White text on hover
        }
      }}
      href="/images/Sridharan-P-CV.pdf" // Correct href attribute for linking the file
      target="_blank" // Opens the resume in a new tab
      rel="noopener noreferrer"
    >
      View Resume
    </Button>
  </Container>
);

export default Skills;
