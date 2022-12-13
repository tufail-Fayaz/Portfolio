import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import profile from '../../components/assets/dev.png';
import { Stack, Box } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Button from '@mui/material/Button';
import './Home.css';

const Home = () => {
  return (
    <div className='main-container'>
      <Grid container className='home-container'>
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
              Frontend developer
            </Typography>
            <Box p={2}>
              <GitHubIcon
                className='svg-icon'
                fontSize='large'
                color='error'
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
                color='error'
              />
              <Button
                variant='outlined'
                color='error'
                href='https://drive.google.com/file/d/17fd8dxVz18SzLOVwog3PSPasnvwyNTZM/view?usp=share_link'
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
    </div>
  );
};

export default Home;
