import { Container, Typography, Grid, Box, Chip, Button } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import BackgroundParticles from "./BackgroundParticles";

const technicalSkills = [
  "Python (Intermediate, Data Analysis)",
  "HTML & CSS",
  "React (Hooks, Routing)",
  "Wireframing",
  "Prototyping",
];

const nonTechnicalSkills = ["Decision Making", "Leadership", "Team Management","Adaptability ","Collaboration"];

const Skills = () => {
  const baseColor = "#547792"; // Theme color
  const hoverColor = "#A62C2C";

  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    controls.start(inView ? "visible" : "hidden");
  }, [controls, inView]);

  const containerVariant = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const renderChips = (skillsArray) =>
    skillsArray.map((skill, idx) => (
      <motion.div key={idx} variants={itemVariant} style={{ margin: "5px" }}>
        <Chip
          label={skill}
          sx={{
            fontWeight: "bold",
            fontFamily: "Work Sans, sans-serif",
            backgroundColor: hoverColor,
            color: "#fff",
            fontSize: { xs: "0.8rem", sm: "1rem" },
            padding: "10px 12px",
            "&:hover": {
              backgroundColor: '#1B3C53',
              transform: "scale(1.05)",
            },
          }}
        />
      </motion.div>
    ));

  return (
    <Box
      id="skills"
      sx={{
        position: "relative",
        py: 12,
        backgroundColor: "#ECEEDF",
        overflow: "hidden",
      }}
    >
      <BackgroundParticles count={50} color="#000000" />
      <Container
        ref={ref}
        sx={{ position: "relative", zIndex: 1, textAlign: "center" }}
      >
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariant}
        >
          <Typography
            variant="h3"
            sx={{
              mb: 6,
              fontWeight: "bold",
              color: '#1B3C53',
              fontFamily: "Work Sans, sans-serif",
              borderBottom: '3px solid #1B3C53',
              display: "inline-block", 
              pb: 1, 
            }}
          >
            Skills
          </Typography>

          <Grid container spacing={6} justifyContent="center">
            {/* Technical Skills */}
            <Grid item xs={12} md={6}>
              <Typography
                variant="h4"
                sx={{
                  mb: 3,
                  color: baseColor,
                  fontWeight: "bold",
                  fontFamily: "Work Sans, sans-serif",
                }}
              >
                Technical Skills
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                {renderChips(technicalSkills)}
              </Box>
            </Grid>

            {/* Non-Technical Skills */}
            <Grid item xs={12} md={6}>
              <Typography
                variant="h4"
                sx={{
                  mb: 3,
                  color: baseColor,
                  fontWeight: "bold",
                  fontFamily: "Work Sans, sans-serif",
                }}
              >
                Non-Technical Skills
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                {renderChips(nonTechnicalSkills)}
              </Box>
            </Grid>
          </Grid>

          {/* Resume Button */}
          <Button
            variant="contained"
            sx={{
              mt: 6,
              fontFamily: "Work Sans, sans-serif",
              textTransform: "none",
              px: 5,
              py: 1.8,
              fontSize: "1.3rem",
              fontWeight: "bold",
              backgroundColor: '#1B3C53',
              color: "#fff",
              transition: "all 0.3s ease-in-out",
              "&:hover": { backgroundColor: hoverColor, transform: "scale(1.05)", boxShadow: 6 },
            }}
            href="/images/Sridharan P.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume
          </Button>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Skills;
