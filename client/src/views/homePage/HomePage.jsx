import React, { useEffect } from "react";
import SearchBar from "../../components/searchBar/searchBar";
import Cards from "../../components/cards/Cards";
import "./home.css";
import { useDispatch , useSelector} from "react-redux";
import { useState } from "react";
import { getAllCountries, getCountryByName } from "../../redux/actionsCreate";
import FiltradoBar from "../../components/filtradoBar/FiltradoBar";

export default function HomePage() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const handleSearch = (query) => {
    dispatch(getCountryByName(query));
  };
  useEffect(() => {
    dispatch(getAllCountries()); // ¿Necesitas obtener los países al cargar la página?
  }, [dispatch]);


  const [countriesToShow, setCountriesToShow] = useState([]);
  useEffect(() => {
    setCountriesToShow([...countries].splice(0, 9));
  }, [countries]);

  const [page, setPage] = useState(1);
  const prevPage = () => {
    if (page > 1) {
      const prevPagina = page - 1;
      setPage(prevPagina);
      const firstCountry = (prevPagina - 1) * 9;
      setCountriesToShow([...countries].splice(firstCountry, 9));
    }
  };
  
  const nextPage = () => {
    const totalPages = Math.ceil(countries.length / 9);
    if (page < totalPages) {
      const nextPagina = page + 1;
      setPage(nextPagina);
      const firstCountry = (nextPagina - 1) * 9;
      setCountriesToShow([...countries].splice(firstCountry, 9));
    }
  };
  
  
  return (
    <div className="home">
      <h1>Buscá el país que quieras!!</h1>
      <SearchBar onSearch={handleSearch} />
      <FiltradoBar />

      <Cards countriesToShow={countriesToShow} 
      prevPage={prevPage} 
      nextPage={nextPage}
      pagina={page} />
    </div>
  );
}
