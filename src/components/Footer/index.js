import React from 'react';
import { Box, Button, Divider, Stack } from '@mui/material';
import logo from '../assets/portfolio.png';
import './Footer.css';

const Footer = () => {
  return (
    <Box className='footerContainer'>
      <Divider sx={{ color: 'black' }} />
      <Stack direction='column'>
        <img src={logo} width='100px'></img>
        <Box>
          <input
            type='text'
            style={{
              padding: '8px',
              borderRadius: '20px',
              backgroundColor: 'transparent',
              color: 'white',
              border: '1px solid #e60e0e',
            }}
          />
          <Button
            className='button'
            variant='outlined'
            color='error'
            sx={{ marginBotton: '0px' }}
          >
            Ok
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default Footer;
