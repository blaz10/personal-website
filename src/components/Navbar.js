import React from 'react';
import { AppBar, Toolbar, Button, Box, Container } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Button
            component={RouterLink}
            to="/"
            color="primary"
            sx={{ 
              fontSize: '1.2rem', 
              fontWeight: 600,
              '&:hover': {
                backgroundColor: 'transparent',
              }
            }}
          >
            Blaž Zajec
          </Button>
          <Box>
            <Button
              component={RouterLink}
              to="/"
              color="primary"
              sx={{ mx: 1 }}
            >
              Home
            </Button>
            <Button
              component={RouterLink}
              to="/about"
              color="primary"
              sx={{ mx: 1 }}
            >
              About
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
