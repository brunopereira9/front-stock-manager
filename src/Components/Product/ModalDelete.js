import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';

import { useDispatch } from 'react-redux';
import { onErrorRequest, removeProduct } from '../../Store/Modules/Product/actions';
import { api } from '../../Services/Api';

export const ModalDelete = (props) => {
  const dispatch = useDispatch();
  const { onClose, isOpen, product } = props;
  const handleDelete = async (product) => {
    api.delete(`Product/${product.id}`)
    .then(function(response){
      dispatch(removeProduct(product));
      onClose();
    })
    .catch (function(error){
      dispatch(onErrorRequest(error));
    });
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
          <Typography component="h6" variant="h6" align="left" sx={{ minWidth: 380 }}>
            {"Deseja excluir o produto abaixo?"}
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
          <Typography component="p" variant="p" align="left">
            Nome: {product.name}
          </Typography>
          <Typography component="p" variant="p" align="left">
            ID: {product.id}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => onClose()}>Cancelar</Button>
          <Button onClick={() => handleDelete(product)} autoFocus variant="contained">
            Sim
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}