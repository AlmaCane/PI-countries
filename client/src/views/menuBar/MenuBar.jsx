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
            <img id='imagen' src="https://th.bing.com/th/id/OIP.svBJWBQ6AfxCvUmZgkOj5AHaHa?rs=1&pid=ImgDetMain" alt="menu" onClick={toggleMenu} />
           
            {menuVisible && <NavBar />}
        </div>
    );
}
