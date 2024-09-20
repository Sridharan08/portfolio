import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import { keyframes } from '@mui/system';
import { styled } from '@mui/material/styles';

// Define a keyframe animation for the card
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

// Styled Card component with animation, consistent size, and hover effect
const AnimatedCard = styled(Card)(({ theme }) => ({
  animation: `${fadeIn} 0.6s ease-in-out`,
  textAlign: 'center',
  padding: theme.spacing(2),
  height: 300, // Fixed height for consistent card size
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  backgroundColor: '#153448', // Card background color
  boxShadow: theme.shadows[5], // Add a subtle shadow for better emphasis
  transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Transition for hover effect
  '&:hover': {
    transform: 'scale(1.05)', // Scale up the card on hover
    boxShadow: theme.shadows[10], // Enhance the shadow on hover
  },
}));

// Define new color for the button
const customButtonColor = '#007bff'; // Change to your preferred color

// Define background color for the container
const containerBackgroundColor = '#ffffff'; // Light gray background

const projects = [
  {
    title: 'Registration Form | MERN Stack',
    description: 'Developed a front end using React.js and implemented CRUD Operation, leveraging the Job Registration Utilized MongoDB for data storage, Express.js for backend APIs, React for frontend interfaces, and Node.js for server-side execution.',
    link: 'https://frontend-form-project.vercel.app/',
  },
  {
    title: 'E-Commerce Design | Figma',
    description: 'Ensured the website is fully responsive across all devices. Designed a modern and clean UI, focusing on usability and aesthetic appeal using Figma.',
    link: 'https://www.figma.com/community/file/1413161329660632898/ecommerce',
  },
  // Add more projects as needed
];

const Projects = () => (
  <Container
    maxWidth="lg"
    sx={{
      textAlign: 'center',
      py: 5,
      fontFamily: 'Work Sans, sans-serif',
      backgroundColor: containerBackgroundColor, // Set background color
    }}
  >
    <Typography variant="h3" gutterBottom sx={{
      mb: 2,
      color: '#153448',
      fontWeight: 'bold',
      fontFamily: 'Work Sans, sans-serif',
    }}>
      Projects
    </Typography>
    <Grid container spacing={4} sx={{ mt: 4, justifyContent: 'center' }}>
      {projects.map((project, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <AnimatedCard>
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h5" gutterBottom sx={{
                mb: 2,
                color: 'white',
                fontWeight: 'bold',
                fontFamily: 'Work Sans, sans-serif',
              }}>
                {project.title}
              </Typography>
              <Typography variant="body2" sx={{
                mb: 2,
                color: 'white',
                fontWeight: 'normal',
                fontFamily: 'Work Sans, sans-serif',
              }}>
                {project.description}
              </Typography>
            </CardContent>
            <Button
              variant="contained"
              sx={{
                mb: 2,
                backgroundColor: customButtonColor,
                fontWeight: 'bolder',
                fontFamily: 'Work Sans, sans-serif',
                '&:hover': { backgroundColor: '#0056b3' }, // Hover effect for the button
              }}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </Button>
          </AnimatedCard>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default Projects;
