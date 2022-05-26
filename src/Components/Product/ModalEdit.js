import { useContext } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  TextField,
  Typography,
} from '@mui/material';
// import { ProductForm } from './ProductForm';
import { Close as CloseIcon } from '@mui/icons-material';

import { api } from "../../Services/Api";

import { useDispatch } from 'react-redux';
import { addProduct, onErrorRequest, updateProduct } from '../../Store/Modules/Product/actions';
import { ModalLoadingContext } from '../../Contexts/ModalLoading';
import { ProductForm } from './ProductForm';

export const ModalEdit = (props) => {
  const moment = require('moment');
  const dispatch = useDispatch();
  const { handleModalLoading } = useContext(ModalLoadingContext);

  const { productData, onClose, isOpen } = props;

  const handleSubmit = async (product) => {
    if (productData === null) {
      handleModalLoading(true, "Aguarde enquanto cadastramos os dados informados.");
      await api.post("Product", product)
        .then(function (response) {
          dispatch(addProduct(response.data));
          onClose();
        })
        .catch(function(error){
          dispatch(onErrorRequest(error));
        });
    } else {
      handleModalLoading(true, "Aguarde enquanto atualizamos os dados informados.");
      await api.put(`Product/${product.id}`, product)
      .then(function(response){
        dispatch(updateProduct(product));
        onClose();
      })
      .catch(function(error){
        dispatch(onErrorRequest(error));
      });
    }
    handleModalLoading(false);
  };
  return (
    <>
      <Dialog
        open={isOpen}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          padding: 3,
          marginTop: 4,
        }}
      >
        <DialogTitle>
          <Typography component="p" variant="subtitle1" align="center">
            {"Cadastro de Produto"}
          </Typography>
          <IconButton
            aria-label="close"
            onClick={() => onClose()}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.primary.main,
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          {
            (productData) &&
            <Grid container spacing={2} sx={{ pt: 1, pb: 1 }}>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  size="small"
                  label="Dt. Criação"
                  disabled
                  defaultValue={moment(productData.createdAt).format('DD/MM/YYYY')}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  size="small"
                  label="Dt. Alteração"
                  disabled
                  defaultValue={moment(productData.updatedAt).format('DD/MM/YYYY')}
                />
              </Grid>
            </Grid>
          }

          
          <ProductForm
            submitForm={handleSubmit}
            required={true}
            buttonName={(productData !== null) ? "Atualizar" : "Cadastrar"}
            disabledId={productData !== null}
            isRegister={true}
            productData={productData}
            sx={{ pt: 1 }} 
          />
         
        </DialogContent>
      </Dialog>
    </>
  );
}