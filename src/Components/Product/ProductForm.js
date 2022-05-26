import { Box, Button, Grid, TextField, Tooltip } from "@mui/material";
import { useState } from "react";
import { toast } from "react-toastify";


export const ProductForm = (props) =>{
  
  const [id, setId] = useState(props?.productData?.id);
  const [name, setName] = useState(props?.productData?.name);
  const [price, setPrice] = useState(props?.productData?.stockConferences[0]?.price);
  const [quantity, setQuantity] = useState(props?.productData?.stockConferences[0]?.quantity);
  
  const moment = require('moment');
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const product = {
      id,
      name,
      stockConference: {
        price,
        quantity
      }
    }
    if(product.name?.length >= 3 || product.id !== null){
      props.submitForm(product);
    }else{
      toast.error('Nome do produto deve conter ao menos 3 caracteres.');
    }
  };
  return (
    <Box
      component="form" 
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
      {...props}
    >
      <Grid container spacing={2}>
        <Grid item xs={(props?.productData || props.isRegister) ? 12 : 8}>
          <Tooltip placement="top-start" arrow title="Insira o nome do produto.">
            <TextField
              required={props.required}
              fullWidth
              size="small"
              id="productName"
              name="productName"
              label="Nome"
              InputLabelProps={{ shrink: true }}
              placeholder="Nome cadastrado"
              value={name}
              onChange={(e)=>setName(e.target.value)}
            />
          </Tooltip>
        </Grid>
        { (props.buttonName != 'Cadastrar') &&
          <Grid item xs={4}>
            <TextField
              required={props.required}
              fullWidth
              size="small"
              id="productId"
              name="productId"
              label="Código"
              disabled={props?.disabledId}
              value={id}
              onChange={(e)=>setId(e.target.value)}
              InputLabelProps={{ shrink: true }}
              placeholder="Código"
            />
          </Grid>
        }
        {
          (props?.productData || props.isRegister) &&
          <>
            <Grid item xs={(props.buttonName == 'Cadastrar') ? 6 : 4}>
              <TextField
                required={props.required}
                fullWidth
                id="productPrice"
                type="number"
                size="small"
                name="productPrice"
                label="Preço"
                InputLabelProps={{ shrink: true }}
                placeholder="Preço"
                value={price}
                onChange={(e) => setPrice(e.target.value)} />
            </Grid><Grid item xs={(props.buttonName == 'Cadastrar') ? 6 : 4}>
              <TextField
                required={props.required}
                fullWidth
                size="small"
                name="productStock"
                id="productStock"
                label="Quantidade"
                type="number"
                InputLabelProps={{ shrink: true }}
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)} />
            </Grid>
          </>
          
        }
        
      </Grid>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        {props.buttonName}
      </Button>
    </Box>
  )
}