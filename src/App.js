import { Button } from "@mui/material";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App () {
  const notify = () => toast("Wow so easy !");
  return (
    <>
      <ToastContainer autoClose={8000} style={{ width: "20em" }}/>
      <Button onClick={notify} variant="contained"> Olá Mundo</Button>
    </>
  );
}