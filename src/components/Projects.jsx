import { useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Button,
  useMediaQuery,
  useTheme,
  Modal,
  Box,
  IconButton,
  Fade,
  Card,
  CardContent,
  Chip,
  Stack,
} from "@mui/material";
import { keyframes, styled } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

// ---------- Animation ----------
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
`;

// ---------- Styled Components ----------
const AnimatedCard = styled(Card)(({ theme }) => ({
  textAlign: "center",
  padding: theme.spacing(2),
  width: "100%",
  maxWidth: 320,
  height: 350,
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  backgroundColor: "#DDDDDD",
  borderRadius: "16px",
  boxShadow: theme.shadows[5],
  transition: "transform 0.3s ease, box-shadow 0.3s ease, opacity 0.6s ease",
  opacity: 0,
  transform: "translateY(40px)",

  "&.visible": {
    animation: `${fadeIn} 0.6s ease forwards`,
    opacity: 1,
    transform: "translateY(0)",
  },

  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: theme.shadows[10],
  },
}));

const Title = styled(Typography)(({ ismobile }) => ({
  color: "black",
  fontWeight: "bold",
  fontSize: ismobile === "true" ? "1rem" : "1.1rem",
  textAlign: "center",
}));

const Desc = styled(Typography)(({ ismobile }) => ({
  color: "black",
  fontStyle: "italic",
  fontSize: ismobile === "true" ? "0.9rem" : "1rem",
  marginTop: "8px",
  flexGrow: 1,
}));

const ActionButton = styled(Button)({
  backgroundColor: "#153448",
  color: "white",
  fontWeight: "bold",
  width: "100%",
  "&:hover": { backgroundColor: "#1e3a5f" },
});

const CloseBtn = styled(IconButton)({
  position: "absolute",
  top: 10,
  right: 10,
  color: "white",
  backgroundColor: "red",
  "&:hover": { backgroundColor: "#c62828" },
  width: 35,
  height: 35,
});

const TechChip = styled(Chip)({
  backgroundColor: "#A31D1D",
  color: "white",
  fontFamily: "Work Sans, sans-serif",
  fontWeight: "bold",
  fontSize: "0.8rem",
});

// ---------- Doodle Shapes ----------
const doodleShapes = ["★", "●", "◆", "≈", "✦"];
const doodleColors = ["#FF6B6B", "#FFD93D", "#6BCB77", "#4D96FF", "#9D4EDD"];

const DoodleShape = ({ shape, color, top, left, delay, size }) => (
  <motion.div
    initial={{ y: -30, opacity: 0 }}
    animate={{ y: [0, 20, 0], opacity: [0.5, 1, 0.5] }}
    transition={{
      duration: 4,
      repeat: Infinity,
      delay,
      ease: "easeInOut",
    }}
    style={{
      position: "absolute",
      top,
      left,
      fontSize: size,
      color,
      userSelect: "none",
      pointerEvents: "none",
      zIndex: 0,
    }}
  >
    {shape}
  </motion.div>
);

// ---------- Projects Data ----------
const projects = [
  {
    title: "Bank Transactions Analyzer | Flask & Pandas",
    description:
      "Built a web-based financial analyzer using Flask and Pandas to process CSV bank data, perform data cleaning, flag suspicious transactions, and visualize monthly and category-wise spending with Chart.js in a responsive browser UI.",
    link: "https://bank-transactions-analyzer-1.onrender.com/",
    tech: [
      "Flask",
      "Pandas",
      "Chart.js",
      "Python",
      "HTML/CSS",
      "Data Visualization",
    ],
  },
  {
    title: "E-Commerce Website | MERN Stack",
    description:
      "This project includes a React.js frontend and a Node.js, Express, MongoDB backend with features like authentication, shopping cart, order history.",
    link: "https://ecommerce-website-tan-rho.vercel.app/",
    tech: ["React", "Node.js", "Express", "MongoDB", "Bootstrap"],
  },
  {
    title: "Employee Management System | MERN Stack",
    description:
      "Developed a full-stack web application using React, Node.js, and MongoDB. Includes employee CRUD, real-time location tracking, audit trail, and analytics dashboard using ChartJS.",
    link: "https://emp-dashboard-frontend.vercel.app/",
    tech: ["React", "Node.js", "MongoDB", "Chart.js", "Express", "JWT Auth"],
  },
  {
    title: "Coffee Menu | React.js",
    description:
      "Displays a list of coffee products with filtering options, responsive card layout, and animated transitions. Built using functional components and useState for dynamic filtering.",
    link: "https://coffee-listing-flax.vercel.app/",
    tech: ["React", "CSS", "JavaScript", "Responsive Design", "MUI Components"],
  },
  {
    title: "Registration Form | MERN Stack",
    description:
      "Developed a front end using React.js and implemented CRUD Operation with MongoDB, form validation, JWT-based authentication, and responsive UI with Bootstrap components.",
    link: "https://frontend-form-project.vercel.app/",
    tech: ["React", "MongoDB", "Express", "Node.js", "React Bootstrap"],
  },
];

// ---------- Reusable Card ----------
const ProjectCard = ({ project, onOpen, isMobile }) => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <AnimatedCard ref={ref} className={inView ? "visible" : ""}>
      <CardContent sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
        <Title ismobile={isMobile.toString()}>{project.title}</Title>
        <Desc ismobile={isMobile.toString()}>
          {project.description.slice(0, 120)}...
        </Desc>
      </CardContent>
      <ActionButton onClick={() => onOpen(project)}>View Details</ActionButton>
    </AnimatedCard>
  );
};

// ---------- Main Component ----------
const Projects = () => {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProject(null);
  };

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        position: "relative",
        minHeight: "100vh",
        width: "100vw",
        py: isMobile ? 4 : 8,
        fontFamily: "Work Sans, sans-serif",
        backgroundColor: "#ECEEDF",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      {/* Doodle Shapes Layer */}
      {Array.from({ length: 12 }).map((_, idx) => (
        <DoodleShape
          key={idx}
          shape={doodleShapes[idx % doodleShapes.length]}
          color={doodleColors[idx % doodleColors.length]}
          top={`${Math.random() * 90}%`}
          left={`${Math.random() * 90}%`}
          delay={Math.random() * 3}
          size={`${Math.random() * 1.8 + 1}rem`}
        />
      ))}

      <Typography
        variant={isMobile ? "h4" : "h3"}
        gutterBottom
        sx={{
          mb: isMobile ? 3 : 6,
          color: "#1B3C53",
          fontFamily: "Work Sans, sans-serif",
          fontWeight: "bold",
          borderBottom: "3px solid #1B3C53",
          display: "inline-block",
          pb: 1,
          position: "relative",
          zIndex: 2,
        }}
      >
        Projects
      </Typography>

      <Grid container spacing={isMobile ? 3 : 6} justifyContent="center" sx={{ position: "relative", zIndex: 2 }}>
        {projects.map((project, idx) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={idx}>
            <ProjectCard project={project} onOpen={handleOpen} isMobile={isMobile} />
          </Grid>
        ))}
      </Grid>

      {/* ---------- Modal ---------- */}
      <Modal open={open} onClose={handleClose} closeAfterTransition>
        <Fade in={open}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: isMobile ? "90%" : 500,
              bgcolor: "#f9f9f9",
              borderRadius: 3,
              boxShadow: 24,
              p: 4,
              textAlign: "center",
              zIndex: 9999,
            }}
          >
            <CloseBtn onClick={handleClose}>
              <CloseIcon />
            </CloseBtn>

            {selectedProject && (
              <>
                <Typography
                  variant="h5"
                  sx={{ mb: 2, fontWeight: "bold", color: "#153448" }}
                >
                  {selectedProject.title}
                </Typography>

                <Stack
                  direction="row"
                  spacing={1.5}
                  justifyContent="center"
                  flexWrap="wrap"
                  useFlexGap
                  sx={{ mb: 3 }}
                >
                  {selectedProject.tech?.map((tech) => (
                    <TechChip key={tech} label={tech} sx={{ mb: 1 }} />
                  ))}
                </Stack>

                <Typography
                  sx={{
                    mb: 3,
                    color: "#000000ff",
                    fontSize: "1rem",
                    lineHeight: 1.6,
                    fontFamily: "Work Sans, sans-serif",
                    fontStyle: "italic",
                  }}
                >
                  {selectedProject.description}
                </Typography>

                <ActionButton
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Project
                </ActionButton>
              </>
            )}
          </Box>
        </Fade>
      </Modal>
    </Container>
  );
};

export default Projects;
