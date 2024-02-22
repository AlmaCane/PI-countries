import {Route, Routes, useLocation} from "react-router-dom"
import LandingPage from "../src/views/landingPage/LandingPage"
import './App.css'
import HomePage from "./views/homePage/HomePage";

import Form from "./components/form/form"
import MenuBar from "./views/menuBar/MenuBar";

function App() {


  return (
    <div>
    <MenuBar/>

<Routes>
  <Route path="/" element= {<LandingPage/>}></Route>
 <Route path="/home" element={<HomePage /> }/>
 <Route path="/form" element={<Form/>} />
</Routes>

  </div>
  )
}

export default App
