import {
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
} from '@material-ui/core'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

function ContactUs() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_x0k5kcj',
        'template_kgu1mjm',
        form.current,
        'user_4EdzRaXPPXDOn4bhXcJ4A'
      )
      .then(
        (result) => {
          alert('ok message bien envoyer')
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <div className="App px-10">
      <Typography gutterBottom variant="h3" align="center"></Typography>
      <Grid>
        <Card style={{ maxWidth: 650, padding: '20px 5px', margin: '0 auto' }}>
          <CardContent>
            <Typography gutterBottom variant="h5" className="text-center">
              Contact Us
            </Typography>{' '}
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              gutterBottom
            ></Typography>{' '}
            <form ref={form} onSubmit={sendEmail}>
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <TextField
                    sx={<AccountBoxIcon />}
                    name="user_name"
                    placeholder="Enter first name"
                    label="Name"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>{' '}
                <Grid xs={12} sm={6} item>
                  <TextField
                    placeholder="Enter last name"
                    name="user_name"
                    label="Name"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>{' '}
                <Grid item xs={12}>
                  <TextField
                    name="user_email"
                    type="email"
                    placeholder="Enter email"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>{' '}
                <Grid item xs={12}>
                  <TextField
                    name="phone"
                    type="number"
                    placeholder="Enter phone number"
                    label="Phone"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>{' '}
                <Grid item xs={12}>
                  <TextField
                    name="message"
                    label="Message"
                    multiline
                    rows={4}
                    placeholder="Type your message here"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>{' '}
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    {' '}
                    Submit{' '}
                  </Button>{' '}
                </Grid>{' '}
              </Grid>{' '}
            </form>{' '}
          </CardContent>{' '}
        </Card>{' '}
      </Grid>{' '}
    </div>
  )
}

export default ContactUs
