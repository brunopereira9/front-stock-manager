import{
  AppBar,
  Container,
  Toolbar,
  Typography,
} from '@mui/material';

export const NavBar = () => {


  return (
    <>
      <AppBar position="static">
        <Container>
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}
            >
              {"Stock Manager🚀"}
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};