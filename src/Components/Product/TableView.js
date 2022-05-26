import {
  Delete as DeleteIcon,
  Edit as EditIcon,
} from '@mui/icons-material';
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadProduct, onErrorRequest } from '../../Store/Modules/Product/actions';
import { ModalLoadingContext } from '../../Contexts/ModalLoading';
import { api } from '../../Services/Api';
import { ModalEdit } from './ModalEdit';
import { ModalDelete } from './ModalDelete';

export const TableView = () => {
  const products = useSelector(state => state.productReducer);
  const [openModalProductEdit, setOpenModalProductEdit] = useState(false);
  const [openModalProductDelete, setOpenModalProductDelete] = useState(false);
  const [productData, setProductData] = useState(null);
  const dispatch = useDispatch();
  const { handleModalLoading } = useContext(ModalLoadingContext);

  useEffect(()=>{
    const fetchData = async () =>{
      handleModalLoading(true, "Carregando dados cadastrados.");
      await api.get("Product")
      .then( function(response) {
        dispatch(loadProduct(response.data));
        handleModalLoading(false);
      })
      .catch( function(error) {
        dispatch(onErrorRequest(error));
        handleModalLoading(false);
      });
    }
    fetchData();
  },[])

  const handleModalProductEdit = (product = null) => {
    setProductData(product);
    setOpenModalProductEdit(true);
  }
  const handleModalProductDelete = (product) => {
    setProductData(product);
    setOpenModalProductDelete(true);
  }
  return (
    <>
      <Container component="main">
        <Paper
          elevation={6}
          sx={{
            padding: 1,
            marginTop: 4,
          }}
        >
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            float: 'right',
          }}>
            <Grid xs={1} item>
              <Button
                variant="contained"
                onClick={()=>handleModalProductEdit()}
              >
                Cadastrar
              </Button>
            </Grid>
          </Box>
          {
            (!products?.length > 0) &&
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                float: 'center',
              }}
            >
              <Typography
                component="p"
                variant="subtitle1"
                align="center"
                sx={{ margin: 2, fontWeight: "bold" }}
              >
                {"Nenhum produto foi encontrado."}
              </Typography>
            </Box>
          }
          {
            (products?.length > 0) &&
            <TableContainer>
              <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                  <TableRow>
                    <TableCell size='small'>#</TableCell>
                    <TableCell align="left">Nome</TableCell>
                    <TableCell align="right">Preço</TableCell>
                    <TableCell align="right">Quantidade</TableCell>
                    <TableCell align="center"></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {products.map((product) => (
                    <TableRow
                      key={product.id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="product" size='small'>{product.id}</TableCell>
                      <TableCell align="left">{product.name}</TableCell>
                      <TableCell align="right">{product.stockConferences[0]?.price}</TableCell>
                      <TableCell align="right">{product.stockConferences[0]?.quantity}</TableCell>
                      <TableCell align="right">
                        <IconButton
                          color="secondary"
                          aria-label="Editar Produto"
                          component="span"
                          onClick={()=>handleModalProductEdit(product)}
                        >
                          <EditIcon />
                        </IconButton>
                        <IconButton
                          sx={{ color: (theme) => theme.palette.danger }}
                          aria-label="Deletar Registro"
                          component="span"
                          onClick={()=>handleModalProductDelete(product)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          }
        </Paper>
      </Container>
      { openModalProductEdit && <ModalEdit isOpen={openModalProductEdit} onClose={setOpenModalProductEdit} productData={productData} /> }
      { openModalProductDelete && <ModalDelete isOpen={openModalProductDelete} onClose={setOpenModalProductDelete} product={productData}/> }
    </>
  );
}