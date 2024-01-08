import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { fetchSlack } from '@/utils/slack';

const NeedMoreDataModal = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [request, setRequest] = React.useState('');
  const [email, setEmail] = React.useState('');

  const SlackWebhookURL = "https://hooks.slack.com/services/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"
  const handleSubmit = (e: any) => {
    e.preventDefault()

    const requestData = {
      "text": `Data Request: ${request} \n\n ${email}`
    }
    fetchSlack(SlackWebhookURL, requestData)
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
      <form onSubmit={handleSubmit}>
        <Button variant="contained" size="large" onClick={handleClickOpen}>
          Not in here? Please request!
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Data Request</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please tell us what data you need. We will look into it and get back to you in 1 business day.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="request"
              label="Your Data Request"
              multiline
              minRows={2}
              maxRows={5}
              fullWidth
              variant="standard"
              value={request}
              onChange={e => {setRequest(e.target.value)}}
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
            <Button type="submit" onClick={handleSubmit}>Request</Button>
          </DialogActions>
        </Dialog>
      </form>
    </React.Fragment>
  );
}

export { NeedMoreDataModal };