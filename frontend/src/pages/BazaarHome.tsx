import { Container, Typography } from '@mui/material';
import Products from './Products';

export default function BazaarHome() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h3" gutterBottom>
        HIT Bazaar
      </Typography>
      <Products />
    </Container>
  );
} 