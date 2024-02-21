import { useNavigate } from "react-router-dom"
import "./landingPage.css"; 

export default function LandingPage(){
const navigate = useNavigate();
    const ingresar =()=>{
        navigate("/home")
    
    }
return( 
   <div>
        <h1>Countries
        </h1>
        <button id="boton" onClick={ingresar}>Ingresar</button>
    </div>
    )
}