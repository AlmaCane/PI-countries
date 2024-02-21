export default function Form() {
  return (
    <div>
        <h1>Crea tu actividad</h1>
      <form>
        <label>
          Nombre:
          <input type="text" name="nombre" />
        </label>
        <label>
          Estacion:
          <select name="selectedEstacion">
            <option value="verano">Verano</option>
            <option value="primavera">Primavera</option>
            <option value="otoño">Otoño</option>
            <option value="invierno">Invierno</option>
          </select>
        </label>

        <label>
          Dificultad:
          <select name="selectedDificultad">
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
          <input type="text" name="pais" />
        </label>
        <label>
          Duracion:
          <input type="number" name="pais" />
        </label>

        <button type="subumit">Crear</button>
      </form>
    </div>
  );
}
