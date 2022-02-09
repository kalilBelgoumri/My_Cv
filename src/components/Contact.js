import React from 'react'
import {
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
} from '@material-ui/core'
import AccountBoxIcon from '@mui/icons-material/AccountBox'

function Contact() {
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
            <form>
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <TextField
                    sx={<AccountBoxIcon />}
                    placeholder="Enter first name"
                    label="First Name"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>{' '}
                <Grid xs={12} sm={6} item>
                  <TextField
                    placeholder="Enter last name"
                    label="Last Name"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>{' '}
                <Grid item xs={12}>
                  <TextField
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

export default Contact
