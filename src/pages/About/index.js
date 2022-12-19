import { Grid, Typography, Box, Button } from '@mui/material';
import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import './About.css';

const About = () => {
  return (
    <div className='main-container'>
      <Grid container className='container'>
        <Grid item md={12}>
          <Typography variant='body2' sx={{ textDecoration: 'underline' }}>
            About Me
          </Typography>
        </Grid>
        <Grid item md={12} pt={5}>
          <Typography variant='h6' sx={{ textAlign: 'justify' }}>
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
            <GitHubIcon
              className='svg-icon'
              fontSize='large'
              onClick={(event) =>
                (window.location.href = 'https://github.com/tufail-Fayaz')
              }
            />

            <LinkedInIcon
              className='svg-icon'
              fontSize='large'
              onClick={(event) =>
                (window.location.href =
                  'https://www.linkedin.com/in/tufail-fayaz-18b031246/')
              }
            />
            <Button
              variant='outlined'
              href='https://drive.google.com/file/d/17fd8dxVz18SzLOVwog3PSPasnvwyNTZM/view?usp=share_link'
              color='error'
              className='button'
            >
              Resume
            </Button>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
