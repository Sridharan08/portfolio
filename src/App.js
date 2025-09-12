import React from 'react';
import { ThemeProvider, Box } from '@mui/material';
import { Toaster } from 'react-hot-toast'; // import Toaster
import theme from './theme';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { motion } from 'framer-motion';

// Reusable Animated Section
const AnimatedSection = ({ children }) => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionVariants}
    >
      {children}
    </motion.div>
  );
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* App Background */}
      <Box sx={{ backgroundColor: "#ECEEDF", minHeight: "100vh" }}>
        
        {/* React Hot Toast */}
        <Toaster position="top-center" reverseOrder={false} />

        {/* Background particles with fade-in */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />

        <Navbar />

        <Box id="home">
          <AnimatedSection>
            <Home />
          </AnimatedSection>
        </Box>

        <Box id="skills">
          <AnimatedSection>
            <Skills />
          </AnimatedSection>
        </Box>

        <Box id="projects">
          <AnimatedSection>
            <Projects />
          </AnimatedSection>
        </Box>

        <Box id="contact">
          <AnimatedSection>
            <Contact />
          </AnimatedSection>
        </Box>

        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
