import React from "react";
import SearchBar from "../../components/searchBar/searchBar";
import Cards from "../../components/cards/Cards";
import "./home.css"
import { useDispatch } from "react-redux";
import { getCountryByName } from "../../redux/actionsCreate";
import FiltradoBar from "../../components/filtradoBar/FiltradoBar";

export default function HomePage() {
  const dispatch = useDispatch();

  const handleSearch = (query) => {
    dispatch(getCountryByName(query));
  };

  return (
    <div className="home">
      <h1>Buscá el país que quieras!!</h1>
      <SearchBar onSearch={handleSearch} />
      <FiltradoBar/>
    
      <Cards />
    </div>
  );
}
