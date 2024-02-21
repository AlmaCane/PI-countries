import {Route, Routes, useLocation} from "react-router-dom"
import LandingPage from "../src/views/landingPage/LandingPage"
import './App.css'
import HomePage from "./views/homePage/HomePage";
import {useState} from "react"
import axios from "axios";
import Form from "./components/form/form"

function App() {
const [paises, setPaises]= useState([]);
const URL = "http://localhost:5000/countries";

 async function onSearch(nombre) {
    try{  if (!nombre) return alert("Ingresa un nombre, por favor");
   
      if(paises.find(pais => pais.nombre === nombre))return alert("Este país ya está en la lista");
      const response = await axios.get(`${URL}?name=${nombre}`)
      const data = response.data;

            if (data.name) {
               setPaises((oldPaises) => [...oldPaises, data]);
            } else alert("No hay pais con ese nombre")
         }catch(error){
            throw(error.message)
         }}

  return (
  <div>

<Routes>
  <Route path="/" element= {<LandingPage/>}></Route>
 <Route path="/home" element={<HomePage onSearch={onSearch}/> }/>
 <Route path="/form" element={<Form/>} />
</Routes>

  </div>
  )
}

export default App
