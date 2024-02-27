import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Select from "react-select";
import { createActivity, getAllCountries, seleccionarPaises } from "../../../redux/actionsCreate";
import Validation from "./validation";
import MenuBar from "../../menuBar/MenuBar";
import "./Form.css";

export default function Form() {
  const [activityData, setActivityData] = useState({
    nombre: "",
    dificultad: "",
    duracion: "",
    estacion: "",
    countries: [],
  });
  const countries = useSelector((state) => state.countries);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setActivityData({ ...activityData, [name]: value });
    const validationErrors = Validation({ ...activityData, [name]: value });
    setErrors(validationErrors);
  };
  const handleCountrySelect = (selectedOptions) => {
    const selectedCountryIds = selectedOptions.map((option) => option.value);
    setActivityData({ ...activityData, countries: selectedCountryIds });
    const info = {
      countryIds: selectedCountryIds,
      activityName: activityData.nombre
    };
    dispatch(seleccionarPaises(info));
  };
  
  useEffect(() => {
    // Validar al cargar el componente y cada vez que cambie userData
    const validationErrors = Validation(activityData);
    setErrors(validationErrors);
}, [activityData]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isFormComplete()) {
      alert("Por favor, complete todos los campos del formulario.");
      return;
    }
    dispatch(createActivity(activityData));
    console.log(activityData);
    alert("Actividad creada exitosamente");
    resetForm();
  };

  const isFormComplete = () => {
    const { nombre, dificultad, duracion, estacion, countries } = activityData;
    return !!nombre && !!dificultad && !!duracion && !!estacion && countries.length > 0;
  };

  const resetForm = () => {
    setActivityData({
      nombre: "",
      dificultad: "",
      duracion: "",
      estacion: "",
      countries: [],
    });
  };
  const [errors, setErrors] = useState({nombre:'', 
  dificultad:"",
  duracion:"",
  });

 
  // Transforma la lista de países en un formato compatible con react-select
  const countryOptions = countries.map((country) => ({
    value: country.id,
    label: country.nombre,
  }));

  return (
    <div >
      <MenuBar/>
      <h1>Crea tu actividad</h1>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="nombre">
        
          <input
            type="text"
            name="nombre"
            value={activityData.nombre}
            onChange={handleChange}
            id="name"
            placeholder="Nombre de la actividad"
          />
          {errors.nombre &&<p>{errors.nombre}</p>}
        </label>
        <label htmlFor="estacion">
          <select
            name="estacion"
            onChange={handleChange}
            value={activityData.estacion}
            id="estacion"
          >
            <option value="" disabled>Estacion</option>
            <option value="Verano">Verano</option>
            <option value="Primavera">Primavera</option>
            <option value="Otoño">Otoño</option>
            <option value="Invierno">Invierno</option>
          </select>
        </label>
        <label htmlFor="dificultad">
          <select
            name="dificultad"
            onChange={handleChange}
            value={activityData.dificultad}
            id="dificultad"
          >
            <option value="" disabled> Dificultad</option>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="countries" >
    
          <Select
          placeholder="Seleccione los paises en donde se realiza"
            name="countries"
            id="countries"
            isMulti
            isSearchable
            onChange={handleCountrySelect}
            value={countryOptions.filter((option) =>
              activityData.countries.includes(option.value)
            )}
            options={countryOptions}
          />
        </label>
        <label htmlFor="duracion">
          <input
          placeholder="Duración en horas"
            type="number"
            name="duracion"
  
            value={activityData.duracion}
            onChange={handleChange}
            id="duracion"
          />
          {errors.duracion && <p>{errors.duracion}</p>}
        </label>
        <button type="submit" className="crear">Crear</button>
      </form>
    </div>
  );
}