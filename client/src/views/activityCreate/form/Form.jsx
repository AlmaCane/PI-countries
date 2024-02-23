import { useState } from 'react'; // Import useState
import { useSelector } from 'react-redux';
import Select from 'react-select';
import { createActivity } from '../../../redux/actionsCreate';
import { useDispatch } from 'react-redux';

export default function Form() {
  const countries = useSelector((state) => state.countries);
  const options = countries.map((country) => ({
    value: country.nombre,
    label: country.nombre,
  }));

  const dispatch = useDispatch();
  const [selectedCountry, setSelectedCountry] = useState(null); // State to hold selected country

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const nombre = formData.get('nombre');
    const estacion = formData.get('estacion');
    const dificultad = formData.get('dificultad'); // Corrected typo
    const pais = selectedCountry ? selectedCountry.value : ''; // Access selected country value
    const duracion = formData.get('duracion');
    dispatch(
      createActivity({
        nombre,
        estacion,
        dificultad,
        pais,
        duracion,
      })
    );
  };

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption); // Update selected country
  };

  return (
    <div>
      <h1>Crea tu actividad</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" name="nombre" />
        </label>
        <label>
          Estacion:
          <select name="estacion">
            <option value="Verano">Verano</option>
            <option value="Primavera">Primavera</option>
            <option value="Otoño">Otoño</option>
            <option value="Invierno">Invierno</option>
          </select>
        </label>

        <label>
          Dificultad:
          <select name="dificultad"> {/* Corrected typo */}
            <option value="uno">1</option>
            <option value="dos">2</option>
            <option value="tres">3</option>
            <option value="cuatro">4</option>
            <option value="cinco">5</option>
            <option value="seis">6</option>
            <option value="siete">7</option>
            <option value="ocho">8</option>
            <option value="nueve">9</option>
            <option value="diez">10</option>
          </select>
        </label>
        <label>
          País:
          <Select options={options} onChange={handleCountryChange} value={selectedCountry} />
        </label>
        <label>
          Duracion:
          <input type="number" name="duracion" />
        </label>

        <button type="submit" >Crear</button>
      </form>
    </div>
  );
}
