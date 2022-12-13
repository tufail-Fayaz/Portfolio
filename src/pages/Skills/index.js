import { Box, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import html from '../../components/assets/html.png';
import css from '../../components/assets/css.png';
import js from '../../components/assets/js.png';
import react from '../../components/assets/react.png';
import nodejs from '../../components/assets/nodejs.png';
import mui from '../../components/assets/mui.png';
import vscode from '../../components/assets/vscode.png';
import mysql from '../../components/assets/mysql.png';
import java from '../../components/assets/java.png';
import git from '../../components/assets/git.png';

const Skills = () => {
  const skillsList = [
    {
      skillName: 'HTML',
      skillimage: html,
    },
    {
      skillName: 'CSS',
      skillimage: css,
    },
    {
      skillName: 'JavaScript',
      skillimage: js,
    },
    {
      skillName: 'React',
      skillimage: react,
    },
    {
      skillName: 'Node',
      skillimage: nodejs,
    },
    {
      skillName: 'MUI',
      skillimage: mui,
    },
    {
      skillName: 'VS Code',
      skillimage: vscode,
    },
    {
      skillName: 'My SQL',
      skillimage: mysql,
    },
    {
      skillName: 'Java',
      skillimage: java,
    },
    {
      skillName: 'Git',
      skillimage: git,
    },
  ];
  return (
    <div className='main-container'>
      <Grid container className='container'>
        <Grid item xs={12}>
          <Typography variant='body2' sx={{ textDecoration: 'underline' }}>
            Skills
          </Typography>
        </Grid>
        <Grid
          item
          mt={4}
          sx={{
            display: 'flex',
            flexFlow: 'row wrap',
            boxSizing: 'border-box',
            justifyContent: 'center',
          }}
        >
          {skillsList.map((item) => (
            <Box
              sx={{
                boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)',
                margin: '15px',
                borderRadius: '10px',
                width: '100px',
              }}
            >
              <Stack direction='column' p={1} spacing={1} alignItems='center'>
                <img src={item.skillimage} width='50px' alt='img' />
                <Typography variant='body'>{item.skillName}</Typography>
              </Stack>
            </Box>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default Skills;
