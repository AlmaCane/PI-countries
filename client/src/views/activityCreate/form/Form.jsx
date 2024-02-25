import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Select from "react-select";
import { createActivity, getAllCountries } from "../../../redux/actionsCreate";
import NavBar from "../../../components/navBar/NavBar";
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
  };

  const handleCountrySelect = (selectedOptions) => {
    const selectedCountryIds = selectedOptions.map((option) => option.value);
    setActivityData({ ...activityData, countries: selectedCountryIds });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isFormComplete()) {
      alert("Por favor, complete todos los campos del formulario.");
      return;
    }
    dispatch(createActivity(activityData));
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

  // Transforma la lista de países en un formato compatible con react-select
  const countryOptions = countries.map((country) => ({
    value: country.id,
    label: country.nombre,
  }));

  return (
    <div>
      <MenuBar/>
      <h1>Crea tu actividad</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">
          Nombre:
          <input
            type="text"
            name="nombre"
            value={activityData.nombre}
            onChange={handleChange}
            id="name"
          />
        </label>
        <label htmlFor="estacion">
          Estacion:
          <select
            name="estacion"
            onChange={handleChange}
            value={activityData.estacion}
          >
            <option value="">- --- -</option>
            <option value="Verano">Verano</option>
            <option value="Primavera">Primavera</option>
            <option value="Otoño">Otoño</option>
            <option value="Invierno">Invierno</option>
          </select>
        </label>
        <label htmlFor="dificultad">
          Dificultad:
          <select
            name="dificultad"
            onChange={handleChange}
            value={activityData.dificultad}
          >
            <option value="">- --- -</option>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="countries">
          Seleccione el País:
          <Select
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
          Duracion:
          <input
            type="number"
            name="duracion"
            placeholder="-- Horas--"
            value={activityData.duracion}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Crear</button>
      </form>
    </div>
  );
}
