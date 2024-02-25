import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { useState } from "react";

export default function NavBar() {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleNavLinkClick = () => {
    setMenuVisible(false); // Oculta el menú cuando se hace clic en un enlace
  };

  return (
    
    <div className="bar">
      <div className="separador">

      <h2 onClick={() => setMenuVisible(false)}>
        <NavLink to={"/form"} className="nosubrayado" onClick={handleNavLinkClick}>
          Crear actividad
        </NavLink>
      </h2>

      </div>
      <div className="separador2">

      <h2 onClick={() => setMenuVisible(false)}>
        <NavLink to={"/activities"} className="nosubrayado" onClick={handleNavLinkClick}>
          Todas las actividades
        </NavLink>
      </h2>

      </div>
      <div className="separador3">
      <h2 onClick={() => setMenuVisible(false)}>
        <NavLink to={"/home"} className="nosubrayado" onClick={handleNavLinkClick}>
          Página principal
        </NavLink>
      </h2>

      </div>
    </div>
  );
}
