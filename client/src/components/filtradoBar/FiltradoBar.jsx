import { useDispatch, useSelector } from "react-redux";
import { filtradoYOrdenado, getAllCountries } from "../../redux/actionsCreate";
import { useState } from "react";
import "./FiltradoBar.css";

export default function FiltradoBar({ setPage }) {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);

  // Estados locales para los filtros y el orden
  const [orden, setOrden] = useState("x");
  const [filtro, setFiltro] = useState("x");
  const [actFiltro, setActFiltro] = useState("x");

  // Manejadores para actualizar los estados locales de los filtros y el orden
  const handleOrderChange = (e) => {
    setOrden(e.target.value);
  };

  const handleFiltroChange = (e) => {
    setFiltro(e.target.value);
  };

  const handleActFiltroChange = (e) => {
    setActFiltro(e.target.value);
  };

  // Manejador para aplicar los filtros y el orden cuando se hace clic en el botón "Aplicar"
  const handleApplyFilters = () => {
    dispatch(filtradoYOrdenado(orden, filtro, actFiltro));
    setPage(1); // Reiniciar la página a la primera cuando se aplica el filtrado y ordenamiento
  };

  // Manejador para mostrar todos los países
  const mostrarTodos = () => {
    dispatch(getAllCountries());
    setOrden("x"); // Restablecer el filtro de orden
    setFiltro("x");
    setActFiltro("x");
  };

  return (
    <div>
      <select value={orden} onChange={handleOrderChange}>
        <option value="x">Ordenar</option>
        <option value="MasArea">Mayor Área</option>
        <option value="MenosArea">Menor Área</option>
        <option value="MasPoblacion">Mayor Población</option>
        <option value="MenosPoblacion">Menor Población</option>
        <option value="Alfabeticamente">Alfabeticamente</option>
        <option value="Alfabeticamente descendente">Alfabeticamente descendente</option>
      </select>

      <select value={filtro} onChange={handleFiltroChange}>
        <option value="x">Filtrar por continente</option>
        <option value="Africa">Africa</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europa</option>
        <option value="Oceania">Oceanía</option>
        <option value="Americas">Americas</option>
      </select>

      <select value={actFiltro} onChange={handleActFiltroChange}>
        <option value="x">Filtrar por actividad</option>
        <option value="Verano">Verano</option>
        <option value="Otoño">Otoño</option>
        <option value="Invierno">Invierno</option>
        <option value="Primavera">Primavera</option>
      </select>

      <button className="aplicar" onClick={handleApplyFilters}>Aplicar</button>
      <button className="aplicar" onClick={mostrarTodos}>Mostrar todos</button>
    </div>
  );
}
