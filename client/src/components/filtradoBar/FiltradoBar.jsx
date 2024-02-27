import { useDispatch, useSelector } from "react-redux";
import { ordenado, filtrado, getAllCountries, filterActivity} from "../../redux/actionsCreate";
import { useState } from "react";
import "./FiltradoBar.css";

export default function FiltradoBar({setPage}) {

  const countries = useSelector((state) => state.countries);

  const dispatch = useDispatch();

  const [orden, setOrden] = useState("x"); // Estado local para el filtro de orden
  const [filtro, setFiltro] = useState("x");
  const [actFiltro, setActFiltro] = useState("x")

  const mostrarTodos = () => {
    dispatch(getAllCountries());
    setOrden("x"); // Restablecer el filtro de orden
    setFiltro("x");
    setActFiltro("x")
  };


  const handleOrder = (e) => {
    const valor = e.target.value;
    setOrden(valor); 
    dispatch(ordenado(valor)); 
    setPage(1)
  };

  const handleFiltrado = (e) => {
    const valor = e.target.value;
    setFiltro(valor); 
    dispatch(filtrado(valor)); 
    setPage(1)
  };

  const handleActFiltrado = (e)=> {
  const valor = e.target.value;
  setActFiltro(valor);
  dispatch(filterActivity(valor));
  setPage(1)
  }

  return (
    <div>
      <select onChange={(e) => handleOrder(e)}>
        <option value="x">Ordenar</option>

        <option value="MasArea">Mayor Área</option>
        <option value="MenosArea">Menor Área</option>

        <option value="MasPoblacion">Mayor Población</option>
        <option value="MenosPoblacion">Menor Población</option>
        <option value="Alfabeticamente">Alfabeticamente</option>
        <option value="Alfabeticamente descendente">
          Alfabeticamente descendente
        </option>
      </select>

      <select onChange={(e) => handleFiltrado(e)}>
        <option value="x">Filtrar por continente</option>

        <option value="Africa">Africa</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europa</option>
        <option value="Oceania">Oceanía</option>
        <option value="Americas">Americas</option>
      </select>

      <select onChange={(e) => handleActFiltrado(e)}>
        <option value="x">Filtrar por actividad</option>

        <option value="Africa">Verano</option>
        <option value="Asia">Otoño</option>
        <option value="Europe">Invierno</option>
        <option value="Oceania">Primavera</option>
      </select>

      <button onClick={mostrarTodos}>Mostrar todos</button>
    </div>
  );
}
