import { Box, Button, Grid, TextField, Tooltip } from "@mui/material";
import { useState } from "react";
import { toast } from "react-toastify";
 
this.setState(prevState => {
  return { product: prevState.product };
});

export const PersonForm = (props) =>{
  
  const [id, setId] = useState(props?.productData.id);
  const [name, setName] = useState(props?.productData.name);
  const [price, setPrice] = useState(props?.productData.stockConferences[0]?.price);
  const [quantity, setQuantity] = useState(props?.productData.stockConferences[0]?.quantity);
  
  const moment = require('moment');
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const product = {
      id,
      name,
      stockConferences: {
        price,
        quantity
      },
    }
    if(product.name.length >= 3){
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
        <Grid item xs={12}>
          <Tooltip placement="top-start" arrow title="Pode-se inserir apenas parte do nome.">
            <TextField
              required={props.required}
              fullWidth
              size="small"
              id="fullName"
              name="fullName"
              label="Nome"
              InputLabelProps={{ shrink: true }}
              placeholder="Nome cadastrado"
              defaultValue={(props.productData !== null && props.productData !== undefined) ? props.productData.name : ""}
            />
          </Tooltip>
        </Grid>
        <Grid item xs={4}>
          <TextField
            required={props.required}
            fullWidth
            size="small"
            id="cpf"
            name="cpf"
            label="CPF"
            disabled={props.disabledCPF}
            value={cpf}
            onChange={(e)=>setCPF(formatCpfCnpj(e.target.value))}
            InputLabelProps={{ shrink: true }}
            placeholder="xxx.xxx.xxx-xx"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            required={props.required}
            fullWidth
            size="small"
            id="phone"
            name="phone"
            label="Telefone"
            InputLabelProps={{ shrink: true }}
            placeholder="(xx) xxxxx-xxxx"
            value={phone}
            onChange={(e)=>setPhone(formatPhone(e.target.value))}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            required={props.required}
            fullWidth
            size="small"
            name="birthday"
            id="birthday"
            label="Data de Nascimento"
            type="date"
            InputLabelProps={{ shrink: true }}
            defaultValue={
              (props.productData !== null && props.productData !== undefined) 
                ? moment(props.productData.birthday).format("YYYY-MM-DD")
                : ""
            }
          />
        </Grid>
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