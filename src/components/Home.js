import React from 'react';
import { Container, Typography, Box, Button, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CodeIcon from '@mui/icons-material/Code';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SchoolIcon from '@mui/icons-material/School';
import profileImage from '../images/profile_v2.jpg';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const highlights = [
    {
      icon: <CodeIcon sx={{ fontSize: 40, color: 'primary.light' }} />,
      title: 'Software Development',
      description: 'Specialized in mobile and web applications using cutting-edge technologies'
    },
    {
      icon: <BusinessCenterIcon sx={{ fontSize: 40, color: 'primary.light' }} />,
      title: 'Project Management',
      description: 'Leading teams and delivering successful technology projects'
    },
    {
      icon: <SchoolIcon sx={{ fontSize: 40, color: 'primary.light' }} />,
      title: 'R&D Engineering',
      description: 'Innovation in medical device development and research'
    }
  ];

  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #F8F9FA 0%, #E9ECEF 100%)',
        minHeight: '100vh',
        pt: 8,
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Hero Section */}
          <Grid container spacing={4} alignItems="center" sx={{ mb: 8 }}>
            <Grid item xs={12} md={7}>
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h1"
                  gutterBottom
                  sx={{
                    background: 'linear-gradient(45deg, #2C3E50 30%, #3498DB 90%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    mb: 3
                  }}
                >
                  Blaž Zajec
                </Typography>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h4"
                  color="text.secondary"
                  gutterBottom
                  sx={{ mb: 3 }}
                >
                  Project Manager & R&D Engineer
                </Typography>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: '600px' }}>
                  Passionate about developing innovative solutions in medical device technology
                  and mobile applications. Experienced in leading teams and delivering
                  successful projects.
                </Typography>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Button
                  component={RouterLink}
                  to="/experience"
                  variant="contained"
                  color="primary"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    mr: 2,
                    px: 4,
                    py: 1.5,
                  }}
                >
                  View My Work
                </Button>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={5}>
              <Box
                component={motion.div}
                variants={itemVariants}
                sx={{
                  height: '400px',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                  position: 'relative',
                }}
              >
                <img
                  src={profileImage}
                  alt="Blaž Zajec"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    transition: 'transform 0.3s ease-in-out',
                  }}
                />
              </Box>
            </Grid>
          </Grid>

          {/* Highlights Section */}
          <Box sx={{ py: 8 }}>
            <Grid container spacing={4}>
              {highlights.map((highlight, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Box
                      sx={{
                        p: 4,
                        height: '100%',
                        backgroundColor: 'background.paper',
                        borderRadius: 4,
                        boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                        transition: 'transform 0.2s ease-in-out',
                        '&:hover': {
                          transform: 'translateY(-8px)',
                        },
                      }}
                    >
                      <Box sx={{ mb: 2 }}>{highlight.icon}</Box>
                      <Typography variant="h5" gutterBottom sx={{ mb: 2 }}>
                        {highlight.title}
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        {highlight.description}
                      </Typography>
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Home;
