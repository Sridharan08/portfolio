import React from 'react';
import {
  Box,
  Typography,
  Avatar,
  Container,
  Button,
  Stack,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box
      sx={{
        backgroundColor: '#ECEEDF',
        minHeight: '75vh',
        position: 'relative',
        width: '100%',
        overflowX: 'hidden',
        py: isMobile ? 2 : 4,
        px: 0,
        marginTop: 2,
      }}
    >
      <Container maxWidth="lg" disableGutters sx={{ width: '100%' }}>
        <Box
          display="flex"
          flexDirection={{ xs: 'column', md: 'row' }}
          alignItems="center"
          justifyContent="space-between"
          sx={{
            fontFamily: 'Work Sans, sans-serif',
            color: 'black',
            width: '100%',
            gap: { xs: 3 , md: 0 },
            marginTop: isMobile ? '20px' : '40px',
          }}
        >
          {/* Left Side: Text Section */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={{ flex: 1 }}
          >
            <Typography
              variant="h3"
              sx={{
                fontFamily: 'Work Sans, sans-serif',
                mb: 0.7,
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                color: 'black',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 1,
              }}
            >
              Hi, I'm{' '}
              <Box
                component="span"
                sx={{
                  color: '#547792',
                  fontWeight: 'bold',
                  fontStyle: 'italic',
                }}
              >
                Sridharan P
              </Box>
            </Typography>

            <TypeAnimation
              sequence={['Web Developer', 2000, 'React & Python Enthusiast', 2000]}
              wrapper="span"
              speed={50}
              style={{
                fontSize: isMobile ? '1.4rem' : '1.8rem',
                display: 'inline-block',
                color: '#A62C2C',
                borderBottom: '2px solid #A62C2C',
                borderRadius: '4px',
                fontFamily: 'Work Sans, sans-serif',
                fontWeight: 600,
                marginBottom: '0.8rem',
              }}
              repeat={Infinity}
            />

            <Typography
              sx={{
                fontSize: '1.2rem',
                mt: 1.5,
                mb: 1.5,
                fontFamily: 'Work Sans, sans-serif',
                width: { xs: '100%', sm: '115%' },
              }}
            >
              I'm a recent graduate with a strong foundation in{' '}
              <strong>web development</strong> and a deep interest in creating
              user-friendly digital solutions.
            </Typography>

            <Typography
              sx={{
                fontSize: '1.2rem',
                mb: 1.5,
                width: { xs: '100%', sm: '115%' },
              }}
            >
              Skilled in <strong>Figma</strong>, <strong>React.js</strong>,{' '}
              <strong>HTML/CSS</strong>, and <strong>Python</strong> for
              scripting and data analysis. I enjoy solving real-world problems
              with clean, maintainable code and thoughtful UI/UX design.
            </Typography>

            <Typography
              sx={{
                fontSize: '1.2rem',
                mb: 2,
                width: { xs: '100%', sm: '115%' },
              }}
            >
              Currently looking for <strong>entry-level developer roles</strong>{' '}
              to grow and collaborate with experienced mentors.
            </Typography>

            {/* Action Buttons */}
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2.5}
              sx={{ alignItems: { xs: 'stretch', sm: 'start' } }}
            >
              <Button
                variant="contained"
                onClick={() => scrollToSection('contact')}
                sx={{
                  backgroundColor: '#DDDDDD',
                  fontFamily: 'Work Sans, sans-serif',
                  fontWeight: 'bold',
                  color: 'black',
                  textTransform: 'none',
                  px: 4,
                  py: 1.2,
                  fontSize: '1rem',
                  '&:hover': { backgroundColor: '#153448', color: '#fff' },
                }}
              >
                Hire Me
              </Button>

              <Button
                variant="contained"
                onClick={() => scrollToSection('projects')}
                sx={{
                  backgroundColor: '#DDDDDD',
                  fontFamily: 'Work Sans, sans-serif',
                  fontWeight: 'bold',
                  color: 'black',
                  textTransform: 'none',
                  px: 4,
                  py: 1.2,
                  fontSize: '1rem',
                  '&:hover': { backgroundColor: '#153448', color: '#fff' },
                }}
              >
                My Work
              </Button>
            </Stack>
          </motion.div>

          {/* Right Side: Avatar with Floating Doodles */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              marginTop: isMobile ? '1.5rem' : 0,
              position: 'relative',
            }}
          >
            {/* Floating Doodles */}
            <motion.div
              className="doodle"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              style={{
                position: 'absolute',
                top: '15%',
                left: '10%',
                zIndex: 2,
              }}
            >
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="#547792" strokeWidth="2" />
              </svg>
            </motion.div>

            <motion.div
              className="doodle"
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              style={{
                position: 'absolute',
                bottom: '20%',
                right: '15%',
                zIndex: 2,
              }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <polygon
                  points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9"
                  stroke="#A62C2C"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </motion.div>

            <motion.div
              className="doodle"
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
              style={{
                position: 'absolute',
                bottom: '10%',
                left: '20%',
                zIndex: 2,
              }}
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2 L15 8 L22 9 L17 14 L18 21 L12 18 L6 21 L7 14 L2 9 L9 8 Z"
                  stroke="#14be55ff"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </motion.div>

            {/* Avatar with Hover Effect */}
            <motion.div>
              <Avatar
                src="/images/Sridhar.JPG"
                alt="Sridharan"
                variant="rounded"
                sx={{
                  width: { xs: 250, sm: 300, md: 350 },
                  height: { xs: 280, sm: 320, md: 350 },
                  borderRadius: '14px',
                  boxShadow: 5,
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: 8,
                  },
                }}
              />
            </motion.div>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
