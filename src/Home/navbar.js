import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import { LogoOne } from './images';

const Navbar = () => {
  return (
    <AppBar position="static" elevation={0} sx={{ bgcolor: '#f7f7f7', color: '#000', padding: '0 16px' }}>
      <Toolbar>
        {/* Logo and Title */}
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <LogoOne/>
        </Box>
        {/* Navigation Links */}
        <Box sx={{ display: 'flex', gap: 4 }}>
          <Button
            sx={{
              textTransform: 'none',
              color: '#000',
              fontWeight: 500,
              borderBottom: '2px solid transparent',
              '&:hover': {
                borderBottom: '2px solid #000',
              },
            }}
          >
            Home
          </Button>
          <Button
            sx={{
              textTransform: 'none',
              color: '#000',
              fontWeight: 500,
              borderBottom: '2px solid transparent',
              '&:hover': {
                borderBottom: '2px solid #000',
              },
            }}
          >
            About Us
          </Button>
          <Button
            sx={{
              textTransform: 'none',
              color: '#000',
              fontWeight: 500,
              borderBottom: '2px solid transparent',
              '&:hover': {
                borderBottom: '2px solid #000',
              },
            }}
          >
            Services
          </Button>
          <Button
            sx={{
              textTransform: 'none',
              color: '#000',
              fontWeight: 500,
              borderBottom: '2px solid transparent',
              '&:hover': {
                borderBottom: '2px solid #000',
              },
            }}
          >
            Contact
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
