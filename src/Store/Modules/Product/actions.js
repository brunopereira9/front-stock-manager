export const loadProduct = (products) => {
  return {
    type: 'LOAD_PRODUCTS',
    products
  }
}

export const addProduct = (product) => {
  return {
    type: 'ADD_PRODUCT',
    product
  }
}

export const updateProduct = (product) => {
  return {
    type: 'UPDATE_PRODUCT',
    product
  }
}

export const removeProduct = (product) => {
  return {
    type: 'REMOVE_PRODUCT',
    product
  }
}

export const onErrorRequest = (error) => {
  return {
    type: 'ERROR_REQUEST',
    error
  }
}