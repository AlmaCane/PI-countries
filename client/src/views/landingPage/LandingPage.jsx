import { Link } from "react-router-dom";
import "./LandingPage.css"
export default function LandingPage(){

    
return(
<div>
<h1>Bienvenido a tu viaje</h1>
        <div className="divimagen">
       <Link to={"/home"}> <img className="mundo" src="https://graphicriver.img.customer.envatousercontent.com/files/131341929/Vintage_Nautical_Compass-590.jpg?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=26398763ac7a330e563c2c34044f2296" alt="mundo"  /></Link>
      
    </div>

</div>
    )
}