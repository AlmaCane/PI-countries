import React from 'react';
import NavBar from "../../components/navBar/NavBar";
import "./menuBar.css"

export default function MenuBar() {
   
    const [menuVisible, setMenuVisible] = React.useState(false);

  
    function toggleMenu() {
        setMenuVisible(!menuVisible);
    }

    return (
        <div>
            <img id='imagen' src="https://icon-library.com/images/menu-icon-png-3-lines/menu-icon-png-3-lines-15.jpg" alt="menu" onClick={toggleMenu} />

            {menuVisible && <NavBar />}
        </div>
    );
}
