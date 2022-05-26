import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from './Routes';
import { ToastContainer } from 'react-toastify';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ptBR } from '@mui/material/locale';
import { amber, blue, grey, red } from '@mui/material/colors';
import { ModalLoadingProvider } from './Contexts/ModalLoading';
import { Provider } from 'react-redux';
import { store } from './Store';

const theme = createTheme(
  {
    palette: {
      primary: { main: blue[700] },
      secondary: { main: "#d28e19" },
      divider: amber[200],
      danger: red.A700,
      text: {
        primary: grey[900],
        secondary: grey[800],
      },
    },
  },
  ptBR,
);

export default function App() {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <ModalLoadingProvider>
            <BrowserRouter>
              <ToastContainer autoClose={8000} style={{ width: "20em" }} />
              <Routes />
            </BrowserRouter>
          </ModalLoadingProvider>
        </ThemeProvider>
      </Provider>
    </>
  );
}