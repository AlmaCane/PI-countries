import {Route, Routes, useLocation} from "react-router-dom"
import LandingPage from "../src/views/landingPage/LandingPage"
import './App.css'
import HomePage from "./views/homePage/HomePage";
import {useState} from "react"
import axios from "axios";
import Form from "./components/form/form"

function App() {


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
