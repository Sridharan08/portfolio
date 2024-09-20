import React from 'react';
import { Container, Typography, Link, Box } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

// Contact information items
const contactItems = [
  {
    icon: <EmailIcon sx={{ fontSize: 40, color: 'white' }} />,
    label: 'Email',
    href: 'mailto:sridhar872004@gmail.com',
    text: 'sridhar872004@gmail.com',
    bgColor: '#153448',
  },
  {
    icon: <PhoneIcon sx={{ fontSize: 40, color: 'white' }} />,
    label: 'Phone',
    href: 'tel:+917448326644',
    text: '+91 74483 26644',
    bgColor: '#153448',
  },
  {
    icon: <LinkedInIcon sx={{ fontSize: 40, color: 'white' }} />,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sridharan-p/',
    text: 'linkedin.com/in/sridharan-p',
    bgColor: '#153448',
  },
  {
    icon: <GitHubIcon sx={{ fontSize: 40, color: 'white' }} />,
    label: 'GitHub',
    href: 'https://github.com/Sridharan08',
    text: 'github.com/Sridharan08',
    bgColor: '#153448',
  },
];

// Function to handle click and open links
const handleClick = (url) => {
  window.open(url, '_blank', 'noopener,noreferrer');
};

const Contact = () => (
  <Container maxWidth="md" sx={{ py: 5 }}>
    <Typography
      variant="h3"
      align="center"
      gutterBottom
      sx={{
        mb: 2,
        color: '#153448',
        fontWeight: 'bold',
        fontFamily: 'Work Sans, sans-serif',
      }}
    >
      Contact
    </Typography>

    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      spacing={2}
    >
      {contactItems.map((item, index) => (
        <Box
          key={index}
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            backgroundColor: item.bgColor,
            fontWeight: 'bold',
            fontFamily: 'Work Sans, sans-serif',
            padding: 2,
            borderRadius: 2,
            boxShadow: 3,
            transition: '0.3s ease-in-out',
            width: {
              xs: 250, // Adjust width for smaller screens
              sm: 300, // Larger width for tablets and above
            },
            height: 60,
            marginBottom: 2,
            cursor: 'pointer',
            transform: 'scale(1)',
            '&:hover': {
              backgroundColor: '#005a9c',
              boxShadow: 6,
              transform: 'scale(1.05)', // Hover zoom effect
              '& .MuiTypography-root': {
                color: 'white', // Text color on hover
              },
              '& .MuiLink-root': {
                color: 'white', // Link color on hover
              },
            },
          }}
          onClick={() => handleClick(item.href)}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {item.icon}
            <Box sx={{ ml: 2 }}>
              <Typography variant="h6" sx={{ color: 'white' }}>
                {item.label}
              </Typography>
              <Link href={item.href} underline="none" sx={{ color: 'white' }}>
                {item.text}
              </Link>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  </Container>
);

export default Contact;
