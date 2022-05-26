import { NavBar } from '../Components/NavBar';
import { SearchBar } from '../Components/Product/SearchBar';
import { TableView } from '../Components/Product/TableView';

export const Home = () => {
  // TODO: criar busca de produtos, listagem das alterações de estoque, gráfico de variação de preço
  return (
    <>
      <NavBar />
      <SearchBar />
      <TableView />
    </>
  );
}