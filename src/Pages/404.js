import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
} from '@mui/material';
export const NotFound = () => {
  return (
    <>
      <Container component="main" maxWidth="md">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: 8,
          }}
        >
          <img src="/img/not_found.png" alt="Not Found" width={80}/>
          <Typography variant="h1" component="h1">
            404
          </Typography>
          <Typography variant="h3" component="h2">
            Page Not Found
          </Typography>
          <Typography variant="h5" component="h3">
            A página que você deseja não existe ou não está mais disponível.
          </Typography>
          <Link to="/">Clique aqui para ser redirecionado.</Link>
        </Box>
      </Container>
    </>
  );
}