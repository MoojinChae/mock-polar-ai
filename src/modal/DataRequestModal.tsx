import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { fetchSlack } from '@/utils/slack';

type DataRequestProps = {
  selectedIndustry: string | undefined;
  selectedTool: string | undefined;
  selectedWindow: string | undefined;
}

const DataRequestModal = (props: DataRequestProps) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [why, setWhy] = React.useState('');
  const [email, setEmail] = React.useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault()

    const requestData = {
      "text": `"${props.selectedIndustry}" "${props.selectedTool}" "${props.selectedWindow}" Data Request Reason: ${why} \n\n ${email}`
    }
    fetchSlack(requestData)
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
          Request
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Data Request</DialogTitle>
          <DialogContent>
            <DialogContentText>
              "{props.selectedIndustry}" "{props.selectedTool}" "{props.selectedWindow}" selected. Please tell us why you need this data. We will get back to you in 1 business day with data!
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="why"
              label="Tell us why you need this data"
              multiline
              minRows={2}
              maxRows={5}
              fullWidth
              variant="standard"
              value={why}
              onChange={e => {setWhy(e.target.value)}}
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

export { DataRequestModal };