
import { useState } from 'react';
import "./searchBar.css"
import { useSelector } from 'react-redux';

export default function SearchBar({onSearch, setPage}) {
   const [nombre, setNombre] = useState("");
const countries = useSelector(state=> state.countriesCopy);
const coincidencias = countries.filter(country => country.nombre.includes(nombre));
const handleChange = (event) => {
   const newNombre = event.target.value;
   const nombreCapitalizado = newNombre.charAt(0).toUpperCase() + newNombre.slice(1);
   setNombre(nombreCapitalizado);
 }
 
   const limpiarBar = ()=>{
      setNombre("");
   }
   
   const handleSearch = () => {
      if (!isNaN(nombre)) {
         alert("Ingresa un nombre");
         return; 
       }
       if(coincidencias.length === 0){alert("No se encontraron coincidencias");
      return}
   
      onSearch(nombre);
      setPage(1)

   }
   return (
      
      <div id="header">
         <div className='search_container'>
         <input type='text' placeholder='Buscar pais'
         value={nombre}
         onChange={handleChange} />
         <img src="https://www.freeiconspng.com/uploads/search-icon-png-5.png" alt="buscar"  onClick={()=>{handleSearch();limpiarBar();}}/>
         </div>
      </div>
   );
}
