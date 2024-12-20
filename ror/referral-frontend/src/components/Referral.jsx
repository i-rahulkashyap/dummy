import { useState } from 'react';
import { ReferralService } from '../services/auth';
import { TextField, Button, Typography, Container, Box } from '@mui/material';

const Referral = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await ReferralService.sendReferral(email);
      setMessage('Referral email sent successfully!');
    } catch (error) {
      setMessage('Failed to send referral email. Please try again.');
    }
  };

  return (
    <Container maxWidth="sm" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%', mt: 3 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Send Referral
        </Typography>
        <TextField
          label="Email"
          value={email}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
          Send Referral
        </Button>
        {message && (
          <Typography variant="body2" color="error" sx={{ mt: 2 }}>
            {message}
          </Typography>
        )}
      </Box>
    </Container>
  );
};

export default Referral;