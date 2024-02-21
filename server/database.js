const { conn } = require("./src/db"); // Importa la instancia de Sequelize

async function initializeDatabase() {
  try {
    await conn.sync({ force: true }); // Sincroniza la base de datos
    console.log("Base de datos sincronizada correctamente");
  } catch (error) {
    console.error("Error al sincronizar la base de datos:", error);
    throw error; // Relanza el error para manejarlo en el módulo principal
  }
}

module.exports = initializeDatabase;
