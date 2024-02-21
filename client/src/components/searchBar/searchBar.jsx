
import { useState } from 'react';


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
         <div className='searchContainer'>
         <input id='buscar' type='search' placeholder='ingresa el nombre del pais que q uieras buscar'
         value={nombre}
         onChange={handleChange} />
         <button id='add' onClick={()=>{handleSearch();limpiarBar();}}>Buscar</button>
         </div>
      </div>
   );
}
