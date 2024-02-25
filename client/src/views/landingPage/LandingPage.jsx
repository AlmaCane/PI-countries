import { Link } from "react-router-dom";
import "./LandingPage.css"
export default function LandingPage(){

    
return(
    <div className="divimagen">
       <Link to={"/home"}> <img className="mundo" src="https://media.raig.com/product/globo-terraqueo-fisico-y-politico-con-relieve-30cm-800x800.jpeg" alt="mundo"  /></Link>
      
    </div>
    )
}