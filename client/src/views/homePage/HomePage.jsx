import React, { useEffect } from "react";
import SearchBar from "../../components/searchBar/searchBar";
import Cards from "../../components/cards/Cards";
import "./home.css";
import { useDispatch , useSelector} from "react-redux";
import { useState } from "react";
import { getCountryByName } from "../../redux/actionsCreate";
import FiltradoBar from "../../components/filtradoBar/FiltradoBar";

export default function HomePage() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);

  const handleSearch = (query) => {
    dispatch(getCountryByName(query));
  };

  const [countriesToShow, setCountriesToShow] = useState([]);
  useEffect(() => {
    setCountriesToShow([...countries].splice(0, 9));
  }, [countries]);

  const [page, setPage] = useState(1);

  const prevPage = () => {
    const prevPagina = page - 1;
    if (prevPagina <1) return;
    const firstCountry = (prevPagina - 1) * 9;
    setPage(prevPagina);
    setCountriesToShow([...countries].splice(firstCountry,9))
  };

  const nextPage = () => {
    const todosLosPaises = countries.length;
    const nextPagina = page + 1;
    const firstCountry = page*9;
    if (firstCountry>=todosLosPaises) return;
    setPage(nextPagina);
    setCountriesToShow([...countries].splice(firstCountry,9))
  };


  return (
    <div className="home">
      <h1>Buscá el país que quieras!!</h1>
      <SearchBar onSearch={handleSearch} />
      <FiltradoBar />

      <Cards countriesToShow={countriesToShow} 
      prevHandler={prevPage} 
      nextHandler={nextPage}
      pagina={page} />
    </div>
  );
}
