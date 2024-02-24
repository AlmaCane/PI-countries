import {Route, Routes, useLocation} from "react-router-dom"
import LandingPage from "../src/views/landingPage/LandingPage"
import './App.css'
import HomePage from "./views/homePage/HomePage"

import Form from "./views/activityCreate/form/form"
import MenuBar from "./views/menuBar/MenuBar";
import ActivityView from "./views/activitiesView/ActivitiesView"
import Detail from "./views/detail/detail"

function App() {


  return (
    <div>
    <MenuBar/>

<Routes>
  <Route path="/" element= {<LandingPage/>}></Route>
 <Route path="/home" element={<HomePage /> }/>
 <Route path="/form" element={<Form/>} />
 <Route path="/activities" element={<ActivityView/>}/>
 <Route path="/detail/:id" element={<Detail/>} />
</Routes>

  </div>
  )
}

export default App
