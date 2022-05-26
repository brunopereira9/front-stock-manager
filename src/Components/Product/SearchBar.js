import {
  Container,
  Paper
} from '@mui/material';
import { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { ModalLoadingContext } from '../../Contexts/ModalLoading';
import { api } from '../../Services/Api';
import { loadProduct, onErrorRequest } from '../../Store/Modules/Product/actions';
import { ProductForm } from './ProductForm';
export const SearchBar = () => {
  const dispatch = useDispatch();
  const { handleModalLoading } = useContext(ModalLoadingContext);

  const handleSubmit = async (product) => {
    handleModalLoading(true, "Aguarde enquanto buscamos os dados informados.");
    await api.post("search/Product", product)
      .then(function (response) {
        dispatch(loadProduct(response.data));
      })
      .catch(function (error) {
        dispatch(onErrorRequest(error));
      });
    handleModalLoading(false);
  };
  return (
    <>
      <Container component="main">
        <Paper
          elevation={6}
          sx={{
            padding: 3,
            marginTop: 4,
          }}
        >
          <ProductForm submitForm={handleSubmit} required={false} buttonName={"Buscar"} isRegister={false}/>
        </Paper>
      </Container>
    </>
  );
}