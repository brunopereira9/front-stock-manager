import { NavBar } from '../Components/NavBar';
import { SearchBar } from '../Components/Product/SearchBar';
import { TableView } from '../Components/Product/TableView';

export const Home = () => {
  return (
    <>
      <NavBar />
      <SearchBar />
      <TableView />
    </>
  );
}