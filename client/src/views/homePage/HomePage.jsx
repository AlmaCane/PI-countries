import React from "react";
import SearchBar from "../../components/searchBar/searchBar";
import MenuBar from "../menuBar/MenuBar";
import Cards from "../../components/cards/Cards";
import { useDispatch } from "react-redux";
import { getCountryByName } from "../../redux/actionsCreate";

export default function HomePage() {
  const dispatch = useDispatch();

  const handleSearch = (query) => {
    dispatch(getCountryByName(query));
  };

  return (
    <div>
      <h1>Buscá el país que quieras!!</h1>
      <SearchBar onSearch={handleSearch} />
      <MenuBar />
      <Cards />
    </div>
  );
}
