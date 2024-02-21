import SearchBar from "../searchBar/searchBar";
import NavBar from "../navBar/NavBar";
export default function HomePage({ onSearch }) {

  return (
    <div>
      <h1>Buscá el país que quieras!!</h1>
      <SearchBar onSearch={onSearch} />
      <NavBar/>
          </div>
  );
}
