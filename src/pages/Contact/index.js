import {
  Button,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { borderRadius } from '@mui/system';
import React from 'react';
import envelop from '../../components/assets/contact.png';
import './Contact.css';

const Contact = () => {
  return (
    <>
      <Grid container className='container'>
        <Grid item md={12}>
          <Typography variant='h4'>Have Some Questions?</Typography>
        </Grid>
        <Grid
          item
          xs={0}
          md={6}
          sx={{ display: { xs: 'none', md: 'block' }, marginTop: '30px' }}
        >
          <img src={envelop} width='90%'></img>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack direction='column' spacing={3} className='inputFeilds'>
            <TextField label='Name' color='error' />
            <TextField label='Email' color='error' />
            <TextField label='Subject' color='error' />
            <TextField
              label='Your Question...'
              minRows={5}
              color='error'
              multiline
              rows={5}
            />
            <Button
              variant='outlined'
              className='button'
              color='error'
              size='large'
              sx={{ padding: '13px 0', borderRadius: '50px !important' }}
            >
              Send Message
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default Contact;
