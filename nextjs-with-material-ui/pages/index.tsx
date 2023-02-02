import Form from '@/components/Form';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function Album() {

  return (
    <>
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Sign in
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Box>
          <Container maxWidth="sm">
            <Form />
          </Container>
        </Box>
      </main>
    </>
  );
}