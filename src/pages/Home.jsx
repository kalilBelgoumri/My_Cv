import React from 'react';
import Container from '@mui/material/Container';
import { Button } from '@mui/material';

function Home() {
  return (
    <div>
      <Container maxWidth="sm">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>{' '}
      </Container>
    </div>
  );
}

export default Home;
