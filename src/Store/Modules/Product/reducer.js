import produce from 'immer';
import { toast } from 'react-toastify';

export const productReducer = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_PRODUCTS':
      return action.products;
    case 'ADD_PRODUCT':
      return produce(state, draft => {
        draft.push(action.product);
        toast.success(`${action.product.name} cadastrado com sucesso!`);
      });
    case 'UPDATE_PRODUCT':
      return produce(state, draft => {
        const productIndex = draft.findIndex(productReducer => productReducer.id === action.product.id);
        if (productIndex >= 0) {
          draft[productIndex] = {
            id: action.product.id,
            name: action.product.name,
            stockConferences: [action.product.stockConference]
          };
          toast.success(`O registro de ${action.product.name} atualizado com sucesso!`);
        }
      });
    case 'REMOVE_PRODUCT':
      return produce(state, draft => {
        const productIndex = draft.findIndex(productReducer => productReducer.id === action.product.id);
        if (productIndex >= 0) {
          draft.splice(productIndex, 1)
          toast.success(`O registro de ${action.product.name} foi excluído com sucesso!`);
        }
      });
    case 'ERROR_REQUEST':
      const { error } = action;
      toast.error(error.message);
      console.log(error);
      return state;
    default:
      return state;
  }
}