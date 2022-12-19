import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Drawer, Stack, Box } from '@mui/material';
import logo from '../assets/portfolio.png';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import './Header.css';

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <Grid container p={4} className='header-container'>
      <Grid item xs={6} md={2}>
        <img src={logo} width='150px' alt='img'></img>
      </Grid>
      <Grid
        item
        p={2}
        xs={0}
        md={10}
        sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}
      >
        <Stack direction='row' spacing={5} className='navButtons'>
          <Link to='/'>
            <Typography variant='body'>HOME</Typography>
          </Link>
          <Link to='/about'>
            <Typography variant='body'>ABOUT</Typography>
          </Link>
          <Link to='/contact'>
            <Typography variant='body'>CONTACT</Typography>
          </Link>
          <Link to='/skills'>
            <Typography variant='body'>SKILLS</Typography>
          </Link>
        </Stack>
      </Grid>

      <Grid
        item
        xs={6}
        alignItems='center'
        sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end' }}
      >
        <MenuIcon fontSize='large' onClick={() => setOpen(true)} />
        <Drawer anchor='top' open={open} onClose={() => setOpen(false)}>
          <Box role='presentation' sx={{ color: 'black' }}>
            <List>
              <ListItem
                disablePadding
                onClick={() => {
                  setOpen(false);
                  console.log('first');
                }}
              >
                <ListItemButton component={Link} to='/'>
                  <ListItemText primary='HOME' />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  component={Link}
                  to='/about'
                  onClick={() => setOpen(false)}
                >
                  <ListItemText
                    primary='ABOUT'
                    onClick={() => setOpen(false)}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  component={Link}
                  to='/contact'
                  onClick={() => setOpen(false)}
                >
                  <ListItemText primary='CONTACT' />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  component={Link}
                  to='/skills'
                  onClick={() => setOpen(false)}
                >
                  <ListItemText primary='SKILLS' />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </Grid>
    </Grid>
  );
};

export default Header;
