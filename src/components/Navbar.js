import React from 'react';
import { AppBar, Toolbar, Button, Typography, Box, useTheme, useMediaQuery } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        <Typography
          variant="h6"
          component={RouterLink}
          to="/"
          sx={{
            flexGrow: 1,
            textDecoration: 'none',
            color: 'inherit',
            fontWeight: 'bold'
          }}
        >
          Blaž Zajec
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            component={RouterLink}
            to="/"
            color="inherit"
            sx={{ display: isMobile ? 'none' : 'block' }}
          >
            Home
          </Button>
          <Button
            component={RouterLink}
            to="/about"
            color="inherit"
            sx={{ display: isMobile ? 'none' : 'block' }}
          >
            About
          </Button>
          <Button
            component={RouterLink}
            to="/experience"
            color="inherit"
            sx={{ display: isMobile ? 'none' : 'block' }}
          >
            Experience
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
