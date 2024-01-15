import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { fetchSlack } from '@/utils/slack';

const ContactUsModal = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [message, setMessage] = React.useState('');
  const [email, setEmail] = React.useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault()

    const messageData = {
      "text": `Contact Us: ${message} \n\n ${email}`
    }
    fetchSlack(messageData)
      .then(response => console.log(response))
      .then(data=>{
        return data;
      })
      .catch(err => {
        console.error('There was an error.', err)
      });
    
    handleClose()
  };

  return (
    <React.Fragment>
      <Button variant="outlined" size="medium" onClick={handleClickOpen}>
        Contact Us!
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Contact Us</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Tell us anything! We will get back to you asap!
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="contactus"
            label="Message"
            multiline
            minRows={2}
            maxRows={5}
            fullWidth
            variant="standard"
            value={message}
            onChange={e => {setMessage(e.target.value)}}
            required
          />
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            value={email}
            onChange={e => {setEmail(e.target.value)}}
            required
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export { ContactUsModal };