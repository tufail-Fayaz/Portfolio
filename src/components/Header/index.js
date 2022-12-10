import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Drawer, Stack, Box } from '@mui/material';
import logo from '../assets/portfolio.png';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import './Header.css';

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <Grid container p={4}>
      <Grid item xs={6} md={2} p={1}>
        <img src={logo} width='100px'></img>
      </Grid>
      <Grid
        item
        p={2}
        xs={0}
        md={8}
        sx={{ display: { xs: 'none', md: 'block' } }}
      >
        <Stack
          direction='row'
          spacing={4}
          sx={{ color: 'white', fontWeight: '700' }}
          className='navButtons'
        >
          <Link to='/'>
            <Typography variant='body2'>HOME</Typography>
          </Link>
          <Link to='/about'>
            <Typography variant='body2'>ABOUT</Typography>
          </Link>
          <Link to='/contact'>
            <Typography variant='body2'>CONTACT</Typography>
          </Link>
          <Link to='/skills'>
            <Typography variant='body2'>SKILLS</Typography>
          </Link>
        </Stack>
      </Grid>
      <Grid
        item
        xs={6}
        md={2}
        textAlign='right'
        sx={{ display: { xs: 'none', md: 'block' } }}
      >
        <Button variant='outlined' className='button' color='error'>
          Let's Talk
        </Button>
      </Grid>
      <Grid
        item
        xs={6}
        md={2}
        alignItems='center'
        sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end' }}
      >
        <MenuIcon fontSize='large' onClick={() => setOpen(true)} />
        <Drawer anchor='top' open={open} onClose={() => setOpen(false)}>
          <Box
            role='presentation'
            sx={{
              backgroundColor: '#08084bf2',
              color: 'white',
            }}
          >
            <List>
              <ListItem disablePadding>
                <ListItemButton component={Link} to='/'>
                  <ListItemText primary='HOME' />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component={Link} to='/about'>
                  <ListItemText primary='ABOUT' />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component={Link} to='/contact'>
                  <ListItemText primary='CONTACT' />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component={Link} to='/skills'>
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
