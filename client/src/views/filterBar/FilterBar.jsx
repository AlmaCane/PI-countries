import React from 'react';
import FiltradoBar from '../../components/filtradoBar/FiltradoBar';

export default function FilterBar() {
   
    const [filtersVisible, setFiltersVisible] = React.useState(false);

  
    function toggleMenu() {
        setFiltersVisible(!filtersVisible);
    }

    return (
        <div>
            <img id='imagen' src="https://th.bing.com/th/id/R.57b44d9391c5f5b2b78f455c79398daf?rik=Ujr%2baz0WVdSD3Q&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_497845.png&ehk=O0yqNNPMWB0QlOXGS7vdSKdn8nxdvNfK4enz1RR0crg%3d&risl=&pid=ImgRaw&r=0" alt="menu" onClick={toggleMenu} />

            {filtersVisible && <FiltradoBar />}
        </div>
    );
}
