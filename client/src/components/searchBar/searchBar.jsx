
import { useState } from 'react';
import "./searchBar.css"

export default function SearchBar({onSearch}) {
   const [nombre, setNombre] = useState("");


   const handleChange =(event)=>{
      const newNombre = event.target.value;
      setNombre(newNombre);

   }
   const limpiarBar = ()=>{
      setNombre("");
   }
   
   const handleSearch = () => {
      if (!isNaN(nombre)) {
         alert("Ingresa un nombre");
         return; 
       }
   
      onSearch(nombre);
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
