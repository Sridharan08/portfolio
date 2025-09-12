import React, { useState } from "react";
import { Box, Container, Typography, TextField, Button } from "@mui/material";
import emailjs from "emailjs-com";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";
import useScrollFade from "../hooks/useScrollFade";
import BackgroundParticles from "./BackgroundParticles";

const Contact = () => {
  const fadeRef = useScrollFade();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = async () => {
    try {
      setLoading(true);
      await emailjs.send(
        "service_6t0uwox", // your EmailJS service ID
        "template_z0ao41o", // your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "4L2t6rJ2Z0sV49Pnj" // your EmailJS public key
      );
      toast.success("✅ Thanks! Your message has been sent.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Email send error:", error);
      toast.error("❌ Oops! Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!loading) sendEmail();
  };

  // Animations
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  // Shared field styles (same as Skills/Projects color theme)
  const fieldStyles = {
    "& .MuiOutlinedInput-root": {
      "& fieldset": { borderColor: "#5a95bfff" }, // teal
      "&:hover fieldset": { borderColor: "#0b446cff" }, // darker teal
      "&.Mui-focused fieldset": {
        borderColor: "#5a95bfff", // dark green-teal
        boxShadow: "0 0 8px #5a95bfff",
      },
    },
    transition: "all 0.3s ease-in-out",
  };

  return (
    <Box
      id="contact"
      sx={{
        position: "relative",
        py: 12,
        background: "#ECEEDF",
        overflow: "hidden",
      }}
    >
      <BackgroundParticles count={50} color="#000000" />

      <Container
        sx={{ position: "relative", zIndex: 1, textAlign: "center" }}
        ref={fadeRef}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
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
              pb: 1, // deep teal like headings in Skills/Projects
            }}
          >
            Contact Me
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              maxWidth: 600,
              mx: "auto",
              display: "flex",
              flexDirection: "column",
              gap: 3,
              background: "#DDDDDD",
              p: 4,
              borderRadius: 3,
              boxShadow: "0 8px 24px #1d547bff",
            }}
          >
            {["name", "email", "subject", "message"].map((field, i) => (
              <motion.div
                key={field}
                custom={i}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <TextField
                  label={field.charAt(0).toUpperCase() + field.slice(1)}
                  name={field}
                  type={field === "email" ? "email" : "text"}
                  value={formData[field]}
                  onChange={handleChange}
                  variant="outlined"
                  required
                  fullWidth
                  multiline={field === "message"}
                  rows={field === "message" ? 4 : 1}
                  sx={{
                    ...fieldStyles,
                    "&:hover": {
                      boxShadow: "0 0 12px #5a95bfff",
                    },
                  }}
                />
              </motion.div>
            ))}

            <motion.div
              variants={itemVariants}
              custom={4}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Button
                type="submit"
                variant="contained"
                disabled={loading}
                sx={{
                  background: " #153448",
                  "&:hover": {
                    background: "linear-gradient(135deg, #30658bff, #02375dff)",
                    boxShadow: "0 0 18px #236595ff",
                    transform: "scale(1.05)",
                  },
                  transition: "all 0.3s ease-in-out",
                  py: 1.5,
                  fontWeight: "bold",
                  fontFamily: "Work Sans, sans-serif",
                  fontSize: "1rem",
                  borderRadius: "12px",
                }}
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </motion.div>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Contact;
