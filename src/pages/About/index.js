import { Grid, Typography, Box, Button } from '@mui/material';
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './About.css';

const About = () => {
  return (
    <>
      <Grid container className='container'>
        <Grid item md={12}>
          <Typography variant='body2' sx={{ textDecoration: 'underline' }}>
            About Me
          </Typography>
        </Grid>
        <Grid item md={12} pt={5}>
          <Typography variant='h5' sx={{ textAlign: 'justify' }}>
            I'm a <span style={{ color: '#e60e0e' }}>web developer</span>{' '}
            passionate about programming and solving problems through code.I am
            graduated in 2018 at University of Kashmir. Fueled by high energy
            levels and boundless enthusiasm, I prefer to keep learning, continue
            challenging myself, and do interesting things that matter. I love
            creating things on web where I am able to actually create enjoyable
            interactions and experiences for everyone.I am excited to work
            alongside other amazing programmers and learn so much more.
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ marginTop: '80px' }}>
          <Box>
            <FacebookIcon className='svg-icon' fontSize='large' color='error' />
            <InstagramIcon
              className='svg-icon'
              fontSize='large'
              color='error'
            />
            <LinkedInIcon className='svg-icon' fontSize='large' color='error' />
            <Button variant='outlined' color='error' className='button'>
              Resume
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default About;
