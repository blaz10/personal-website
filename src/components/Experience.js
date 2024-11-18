import React from 'react';
import { Container, Typography, Paper, Box, Grid, Chip, Link } from '@mui/material';
import { motion } from 'framer-motion';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import BuildIcon from '@mui/icons-material/Build';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
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

  const experiences = [
    {
      title: "Project Manager",
      company: "L-TEK d.o.o.",
      period: "2020 - Present · 4 yrs 11 mos",
      location: "Šentjernej, Slovenia",
      skills: ["Mobile Application Development", "Software Development", "Research", "Gitlab", "Flutter", "Project Management", "Microsoft Office", "Medical Device Product Development"]
    },
    {
      title: "Mobile Application Developer",
      company: "Freelance",
      period: "2016 - Present · 8 yrs 11 mos",
      skills: ["Mobile Application Development", "Dart", "Bluetooth Low Energy", "Mqtt", "Android Studio", "Firebase", "Gitlab", "Flutter", "Microsoft Office"]
    },
    {
      title: "Project Engineer",
      company: "TRAC",
      period: "2017 - 2019 · 2 yrs",
      location: "Šentjernej, Slovenia",
      skills: ["Software Development", "Gitlab", "Microsoft Office", "TIA portal", "PLC programming"]
    },
    {
      title: "Android Developer",
      company: "Enolyse d.o.o.",
      period: "2013 - 2016 · 3 yrs",
      skills: ["Mobile Application Development", "Arduino IDE", "Software Development", "Gitlab", "Microsoft Office"]
    }
  ];

  const education = {
    school: "University of Ljubljana, Faculty of Electrical Engineering",
    degree: "Automation Engineer"
  };

  const certifications = [
    {
      title: "Android Office Task Management App Using Firebase(Real App)",
      link: "https://www.udemy.com/certificate/UC-6NTANA2B/",
      skills: ["Mobile Application Development"]
    },
    {
      title: "The Complete 2021 Flutter Development Bootcamp with Dart",
      link: "https://www.udemy.com/certificate/UC-595e0ce1-0de6-4abf-8494-5accd0e17bf9/",
      skills: ["Mobile Application Development"]
    }
  ];

  const patents = [
    {
      title: "Pametni merilnik sladkorja v tekočinah SI 201500210",
      link: "http://www3.uil-sipo.si/PublicationServer/documentpdf.jsp?iDocId=36103&iepatch=.pdf"
    }
  ];

  const skills = [
    "Project management", "Mobile application development", "Flutter", 
    "Medical device product development", "Software development", "Bluetooth low energy",
    "Firebase", "Microsoft office", "Arduino IDE", "MQTT", "Dart", "Android studio",
    "GitLab", "Java", "C++", "Raspberry PI", "PLC programming", "Python"
  ];

  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #F8F9FA 0%, #E9ECEF 100%)',
        minHeight: '100vh',
        pt: 8,
        pb: 12,
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Work Experience Section */}
          <motion.div variants={itemVariants}>
            <Box sx={{ mb: 8 }}>
              <Typography 
                variant="h3" 
                gutterBottom 
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center',
                  mb: 4,
                  background: 'linear-gradient(45deg, #2C3E50 30%, #3498DB 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                <WorkIcon sx={{ mr: 2, fontSize: 40 }} /> Work Experience
              </Typography>
              {experiences.map((exp, index) => (
                <Paper 
                  key={index} 
                  elevation={0}
                  sx={{ 
                    p: 4, 
                    mb: 3,
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                  }}
                >
                  <Typography variant="h5" gutterBottom color="primary">{exp.title}</Typography>
                  <Typography variant="h6" gutterBottom sx={{ color: 'text.secondary' }}>{exp.company}</Typography>
                  <Typography variant="subtitle1" color="text.secondary" gutterBottom>{exp.period}</Typography>
                  {exp.location && (
                    <Typography variant="subtitle2" color="text.secondary" gutterBottom>{exp.location}</Typography>
                  )}
                  <Box sx={{ mt: 3 }}>
                    {exp.skills.map((skill, idx) => (
                      <Chip 
                        key={idx} 
                        label={skill} 
                        sx={{ 
                          m: 0.5,
                          background: 'linear-gradient(45deg, #3498DB 30%, #2C3E50 90%)',
                          color: 'white',
                        }} 
                      />
                    ))}
                  </Box>
                </Paper>
              ))}
            </Box>
          </motion.div>

          {/* Education Section */}
          <motion.div variants={itemVariants}>
            <Box sx={{ mb: 8 }}>
              <Typography 
                variant="h3" 
                gutterBottom 
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center',
                  mb: 4,
                  background: 'linear-gradient(45deg, #2C3E50 30%, #3498DB 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                <SchoolIcon sx={{ mr: 2, fontSize: 40 }} /> Education
              </Typography>
              <Paper 
                elevation={0}
                sx={{ 
                  p: 4,
                  background: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                }}
              >
                <Typography variant="h5" gutterBottom color="primary">{education.school}</Typography>
                <Typography variant="h6" color="text.secondary">{education.degree}</Typography>
              </Paper>
            </Box>
          </motion.div>

          {/* Certifications Section */}
          <motion.div variants={itemVariants}>
            <Box sx={{ mb: 8 }}>
              <Typography 
                variant="h3" 
                gutterBottom 
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center',
                  mb: 4,
                  background: 'linear-gradient(45deg, #2C3E50 30%, #3498DB 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                <CardMembershipIcon sx={{ mr: 2, fontSize: 40 }} /> Certifications
              </Typography>
              {certifications.map((cert, index) => (
                <Paper 
                  key={index} 
                  elevation={0}
                  sx={{ 
                    p: 4, 
                    mb: 3,
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    transition: 'transform 0.2s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                    },
                  }}
                >
                  <Link 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    sx={{ 
                      textDecoration: 'none',
                      color: 'inherit',
                      display: 'block',
                    }}
                  >
                    <Typography variant="h5" gutterBottom color="primary">{cert.title}</Typography>
                  </Link>
                  <Box sx={{ mt: 2 }}>
                    {cert.skills.map((skill, idx) => (
                      <Chip 
                        key={idx} 
                        label={skill} 
                        sx={{ 
                          m: 0.5,
                          background: 'linear-gradient(45deg, #3498DB 30%, #2C3E50 90%)',
                          color: 'white',
                        }}
                      />
                    ))}
                  </Box>
                </Paper>
              ))}
            </Box>
          </motion.div>

          {/* Patents Section */}
          <motion.div variants={itemVariants}>
            <Box sx={{ mb: 8 }}>
              <Typography 
                variant="h3" 
                gutterBottom 
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center',
                  mb: 4,
                  background: 'linear-gradient(45deg, #2C3E50 30%, #3498DB 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                <LightbulbIcon sx={{ mr: 2, fontSize: 40 }} /> Patents
              </Typography>
              {patents.map((patent, index) => (
                <Paper 
                  key={index} 
                  elevation={0}
                  sx={{ 
                    p: 4, 
                    mb: 3,
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    transition: 'transform 0.2s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                    },
                  }}
                >
                  <Link 
                    href={patent.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    sx={{ 
                      textDecoration: 'none',
                      color: 'inherit',
                    }}
                  >
                    <Typography variant="h5" color="primary">{patent.title}</Typography>
                  </Link>
                </Paper>
              ))}
            </Box>
          </motion.div>

          {/* Skills Section */}
          <motion.div variants={itemVariants}>
            <Box sx={{ mb: 6 }}>
              <Typography 
                variant="h3" 
                gutterBottom 
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center',
                  mb: 4,
                  background: 'linear-gradient(45deg, #2C3E50 30%, #3498DB 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                <BuildIcon sx={{ mr: 2, fontSize: 40 }} /> Skills
              </Typography>
              <Paper 
                elevation={0}
                sx={{ 
                  p: 4,
                  background: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                }}
              >
                <Grid container spacing={1}>
                  {skills.map((skill, index) => (
                    <Grid item key={index}>
                      <Chip 
                        label={skill} 
                        sx={{ 
                          m: 0.5,
                          background: 'linear-gradient(45deg, #3498DB 30%, #2C3E50 90%)',
                          color: 'white',
                          fontWeight: 500,
                        }}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Paper>
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Experience;
