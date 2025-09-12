import React from 'react';
import {
  Box,
  Typography,
  Container,
  Divider,
  useMediaQuery,
  useTheme,
  IconButton,
  Stack,
  Tooltip,
} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArticleIcon from '@mui/icons-material/Article';


const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#153448',
        color: '#fff',
        py: isMobile ? 3 : 4,
        mt: isMobile ? 3 : 5,
        fontFamily: 'Work Sans, sans-serif',
        textAlign: 'center',
      }}
    >
      <Container maxWidth="lg">
        {/* Title */}
        <Typography
          variant={isMobile ? 'h6' : 'h5'}
          gutterBottom
          sx={{
            fontWeight: 500,
            fontFamily: 'Work Sans, sans-serif',
            fontSize: isMobile ? '1.1rem' : '1.4rem',
          }}
        >
          Thank you for visiting!
        </Typography>

        {/* Social Icons */}
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          sx={{ mb: isMobile ? 1.5 : 2 }}
        >
          <Tooltip title="LinkedIn" arrow>
            <IconButton
              component="a"
              href="https://www.linkedin.com/in/sridharan-p-b7358b269"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: '#0A66C2',
                bgcolor: '#fff',
                transition: 'transform 0.3s ease, background 0.3s ease',
                '&:hover': {
                  bgcolor: '#e1f5fe',
                  transform: 'scale(1.2)',
                },
              }}
            >
              <LinkedInIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="GitHub" arrow>
            <IconButton
              component="a"
              href="https://github.com/Sridharan08"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: '#000',
                bgcolor: '#fff',
                transition: 'transform 0.3s ease, background 0.3s ease',
                '&:hover': {
                  bgcolor: '#f5f5f5',
                  transform: 'scale(1.2)',
                },
              }}
            >
              <GitHubIcon />
            </IconButton>
          </Tooltip>


          <Tooltip title="Resume" arrow>
            <IconButton
              component="a"
              href="/images/Sridharan P.pdf" // Place resume in /public
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: '#d32f2f',
                bgcolor: '#fff',
                transition: 'transform 0.3s ease, background 0.3s ease',
                '&:hover': {
                  bgcolor: '#ffebee',
                  transform: 'scale(1.2)',
                },
              }}
            >
              <ArticleIcon />
            </IconButton>
          </Tooltip>
        </Stack>

        {/* Divider */}
        <Divider
          sx={{
            backgroundColor: '#ffffff33',
            my: isMobile ? 1.5 : 2,
            mx: 'auto',
            width: isMobile ? '80%' : '60%',
          }}
        />

        {/* Copyright */}
        <Typography
          variant="caption"
          display="block"
          sx={{
            fontSize: isMobile ? '0.7rem' : '0.85rem',
            mt: 1,
            opacity: 0.8,
          }}
        >
          © {new Date().getFullYear()} Sridharan Portfolio. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
