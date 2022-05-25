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
import { useState } from 'react';

export const TableView = () => {
  const [products, setProducts] = useState(null);

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
            <Grid xs={1} >
              <Button
                variant="contained"
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
                    <TableCell size='small'>Cód.</TableCell>
                    <TableCell align="right">Nome</TableCell>
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
                      <TableCell align="right">{product.name}</TableCell>
                      <TableCell align="right">{product.stockConferences[0].price}</TableCell>
                      <TableCell align="right">{product.stockConferences[0].quantity}</TableCell>
                      <TableCell align="right">
                        <IconButton
                          color="secondary"
                          aria-label="Editar cadastro"
                          component="span"
                        >
                          <EditIcon />
                        </IconButton>
                        <IconButton
                          sx={{ color: (theme) => theme.palette.danger }}
                          aria-label="Deletar Registro"
                          component="span"
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
    </>
  );
}