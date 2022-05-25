import { BrowserRouter } from 'react-router-dom';
import { Routes } from './Routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App () {
  return (
    <>
      <BrowserRouter>
        <ToastContainer autoClose={8000} style={{ width: "20em" }}/>
        <Routes />
      </BrowserRouter>
    </>
  );
}