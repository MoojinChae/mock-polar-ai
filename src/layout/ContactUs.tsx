import * as React from 'react';
import { Button, TextField } from "@mui/material";
import { fetchSlack } from '@/utils/slack';
import { Container } from '@mui/material';

const ContactUs = () => {
  const [contactEmail, setContactEmail] = React.useState('');
  const [contactName, setContactName] = React.useState('');
  const [contactForm, setContactForm] = React.useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault()

    const requestData = {
      "text": `From: ${contactForm} \n\n ${contactEmail}`
    }
    fetchSlack(requestData)
      .then(response => console.log(response))
      .then(data=>{
        return data;
      })
      .catch(err => {
        console.error('There was an error.', err)
      });
  };

  return (
    <Container maxWidth="md">
      <div className="text-3xl font-bold leading-hero text-gray-900">
        We wolud love to work with you!
      </div>
      <div className="text-xl">MockPolar AI is currently in beta but we would love to work with you.</div>
      <div className="mb-4 text-xl">Tell us about your use case and we will get back to you within a day!</div>
      <TextField
        id="request"
        margin="normal"
        label="Name"
        variant="outlined"
        fullWidth
        value={contactName}
        onChange={e => {setContactName(e.target.value)}}
        required
      />
      <TextField
        id="request"
        margin="normal"
        label="Email"
        variant="outlined"
        fullWidth
        value={contactEmail}
        onChange={e => {setContactEmail(e.target.value)}}
        required
      />
      <TextField
        autoFocus
        id="usecase"
        margin="normal"
        label="Your Use Case"
        multiline
        rows={5}
        fullWidth
        variant="outlined"
        value={contactForm}
        onChange={e => {setContactForm(e.target.value)}}
        required
      />
      <Button variant="contained" size="large" type="submit" onClick={handleSubmit}>Send</Button>
    </Container>
  );
}

export { ContactUs };