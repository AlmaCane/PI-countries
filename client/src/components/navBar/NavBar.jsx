import { Link } from "react-router-dom";
import "./NavBar.css";
import { useState } from "react";
export default function NavBar() {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleMenuClick = () => {
    setMenuVisible(!menuVisible); 
    // Cambiar el estado de visibilidad del menú
  };
  return (
    <div className="bar">
        
      <button>
        <Link to={"/form"} onClick={handleMenuClick}>Crear actividad</Link>
      </button>
      <button>
        <Link to={"/activities"} onClick={handleMenuClick}>Todas las actividades</Link>
      </button>
      <button>
        <Link to={"/home"} onClick={handleMenuClick}>Página principal</Link>
      </button>
    </div>
  );
}
