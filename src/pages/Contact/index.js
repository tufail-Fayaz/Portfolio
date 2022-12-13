import { Button, Grid, Stack, TextField, Typography } from '@mui/material';
import React, { useState, useRef } from 'react';
import envelop from '../../components/assets/contact.png';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const form = useRef();

  const handleData = (e) => {
    e.preventDefault();
    if (
      formData.name === '' ||
      formData.email === '' ||
      formData.message === ''
    ) {
      alert('All feilds are required');
    } else {
      emailjs
        .sendForm(
          'service_6d35ui5',
          'template_17f498q',
          form.current,
          'Ah1OWRzs-Gl6tBPGW'
        )
        .then(
          (result) => {
            // console.log(result.text);
            setFormData({
              name: '',
              email: '',
              message: '',
            });
            toast.success('Message Sent!', { autoClose: 1000 });
          },
          (error) => {
            toast.error('Message Not Sent', { autoClose: 1000 });
            console.log(error.text);
          }
        );
    }
  };

  return (
    <div className='main-container'>
      <Grid container className='container'>
        <Grid item md={12} mb='1'>
          <Typography variant='h4'>Let's Talk</Typography>
        </Grid>
        <Grid
          item
          xs={0}
          md={6}
          sx={{ display: { xs: 'none', md: 'block' }, marginTop: '30px' }}
        >
          <img src={envelop} width='90%' alt='img'></img>
        </Grid>
        <Grid item xs={12} md={6}>
          <form ref={form}>
            <Stack
              direction='column'
              spacing={3}
              className='inputFeilds'
              mt={3}
            >
              <TextField
                required
                label='Name'
                color='error'
                name='name'
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              <TextField
                required
                label='Email'
                color='error'
                name='email'
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />

              <TextField
                required
                label='Message'
                minRows={5}
                color='error'
                multiline
                name='message'
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
              <Button
                variant='outlined'
                className='button'
                color='error'
                size='large'
                sx={{ padding: '13px 0', borderRadius: '50px !important' }}
                onClick={handleData}
              >
                Send Message
              </Button>
            </Stack>
          </form>
        </Grid>
      </Grid>
      <ToastContainer />
    </div>
  );
};

export default Contact;
