import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Header from '../../components/Header';
import profile from '../../components/assets/dev.png';
import { Stack, Box } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Button from '@mui/material/Button';
import './Home.css';
import Footer from '../../components/Footer';

const Home = () => {
  return (
    <div>
      <Grid container>
        <Grid
          item
          xs={12}
          md={7}
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          <Stack direction='column'>
            <Typography variant='h2' p={2}>
              I'm <span style={{ color: '#e60e0e' }}>Tufail</span> Fayaz
            </Typography>
            <Typography variant='h5' color='white' p={2}>
              Freelance UI/UX designer
            </Typography>
            <Box p={2}>
              <FacebookIcon
                className='svg-icon'
                fontSize='large'
                color='error'
              />
              <InstagramIcon
                className='svg-icon'
                fontSize='large'
                color='error'
              />
              <LinkedInIcon
                className='svg-icon'
                fontSize='large'
                color='error'
              />
              <Button
                variant='outlined'
                color='error'
                href='../../../../../../Downloads/Tufail copy.pdf'
                className='button'
              >
                Resume
              </Button>
            </Box>
          </Stack>
        </Grid>
        <Grid
          item
          xs={0}
          md={5}
          p={2}
          sx={{ display: { xs: 'none', md: 'block' } }}
        >
          <img src={profile} alt='profile' width='80%' />
        </Grid>
      </Grid>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
