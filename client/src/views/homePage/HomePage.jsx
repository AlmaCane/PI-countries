import SearchBar from "../../components/searchBar/searchBar";
import MenuBar from "../menuBar/MenuBar";
export default function HomePage({ onSearch }) {

  return (
    <div>
      <h1>Buscá el país que quieras!!</h1>
      <SearchBar onSearch={onSearch} />
      <MenuBar/>
    
   
          </div>
  );
}
