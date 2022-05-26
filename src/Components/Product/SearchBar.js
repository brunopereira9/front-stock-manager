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

  const fetchData = async (route, data) => {
    await api.get(`Product/${route}/${data}`)
      .then(function (response) {
        console.log(response.data)
        dispatch(loadProduct([response.data]));
      })
      .catch(function (error) {
        dispatch(onErrorRequest(error));
      });
  }

  const handleSubmit = (product) => {
    handleModalLoading(true, "Aguarde enquanto buscamos os dados informados.");
    if(product?.id > 0){
      fetchData('id', product.id);
    }else if(product?.name.length() > 0){
      fetchData('name', product.name);
    }    
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
          <ProductForm submitForm={handleSubmit} required={false} buttonName={"BUSCAR"} isRegister={false}/>
        </Paper>
      </Container>
    </>
  );
}