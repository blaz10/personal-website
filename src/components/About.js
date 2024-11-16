import React from 'react';
import { Container, Typography, Box, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

const About = () => {
  const skills = [
    {
      title: 'Development',
      icon: <CodeIcon sx={{ fontSize: 40 }} />,
      description: 'Experienced Flutter and web developer with a passion for creating efficient, scalable applications.',
    },
    {
      title: 'Project Management',
      icon: <ManageAccountsIcon sx={{ fontSize: 40 }} />,
      description: 'Leading teams and managing projects with a focus on delivering high-quality solutions on time.',
    },
    {
      title: 'R&D Engineering',
      icon: <LightbulbIcon sx={{ fontSize: 40 }} />,
      description: 'Driving innovation through research and development, turning complex problems into elegant solutions.',
    },
  ];

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 700,
              mb: 4,
            }}
          >
            About Me
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Typography
            variant="body1"
            sx={{
              maxWidth: '800px',
              mb: 6,
              color: 'text.secondary',
              fontSize: '1.1rem',
              lineHeight: 1.8,
            }}
          >
            As a Project Manager and R&D Engineer, I combine technical expertise with leadership skills
            to drive innovation and deliver successful projects. My background in Flutter and web
            development allows me to bridge the gap between technical implementation and project management,
            ensuring optimal results for every initiative.
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {skills.map((skill, index) => (
            <Grid item xs={12} md={4} key={skill.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: '100%',
                    backgroundColor: 'background.paper',
                    borderRadius: 2,
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                    },
                  }}
                >
                  <Box sx={{ color: 'primary.main', mb: 2 }}>{skill.icon}</Box>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                    {skill.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {skill.description}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default About;
