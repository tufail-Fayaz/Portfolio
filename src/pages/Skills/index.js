import { Grid, Typography } from '@mui/material';
import React from 'react';
import html from '../../components/assets/html.png';

const Skills = () => {
  const skillsList = [
    {
      skillName: 'HTML',
      skillimage: html,
    },
    {
      skillName: 'HTML',
      skillimage: html,
    },
    {
      skillName: 'HTML',
      skillimage: html,
    },
  ];
  return (
    <>
      <Grid container className='container'>
        <Grid item xs={12}>
          <Typography variant='body2' sx={{ textDecoration: 'underline' }}>
            Skills
          </Typography>
        </Grid>
        {skillsList.map((item) => (
          <Grid
            item
            xs={12}
            md={2}
            mt={4}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-around',
              boxShadow:
                ' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
              borderRadius: '10px',
              padding: '20px 0px',
            }}
          >
            <img src={item.skillimage} alt='img' />
            <Typography variant='body'>{item.skillName}</Typography>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Skills;
