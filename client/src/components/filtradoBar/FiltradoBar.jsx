import { useDispatch, useSelector } from "react-redux";
import { ordenado, filtrado, getAllCountries } from "../../redux/actionsCreate";
import { useState } from "react";
import "./FiltradoBar.css"

export default function FiltradoBar() {
  const countries = useSelector((state) => state.countries);
  const mostrarTodos = ()=>{
  dispatch(getAllCountries())
  }

  const dispatch = useDispatch();
  const handleOrder = (e) => {
    dispatch(ordenado(e.target.value));
  };
  const handleFiltrado = (e) => {
    dispatch(filtrado(e.target.value));
  };
  return (
    <div>

      <select onChange={(e) => handleOrder(e)}>
        <option value="" disabled >Ordenar</option>

       
        <option value="MasArea">Mayor Área</option>
        <option value="MenosArea">Menor Área</option>
      
      </select>
<select onChange={e=>handleOrder(e)}>

<option value="MasPoblacion">Mayor Población</option>
        <option value="MenosPoblacion">Menor Población</option>
</select>

      <select onChange={(e) => handleOrder(e)}>

      <option value="Alfabeticamente">Alfabeticamente</option>
        <option value="Alfabeticamente descendente">Alfabeticamente descendente</option>
      </select>
      <select onChange={(e) => handleFiltrado(e)}>
        <option value="" disabled>Filtrar por continente</option>

        <option value="Africa">Africa</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europa</option>
        <option value="Oceania">Oceanía</option>
        <option value="Americas">Americas</option>
  
      </select>

      <button onClick={mostrarTodos}>Mostrar todos</button>
    </div>
  );
}
