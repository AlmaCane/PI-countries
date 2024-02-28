const saveInfo = require("./saveInfo");
const PORT = process.env.PORT ||3001;
const server = require("./server");
const { conn } = require("./src/db");

conn
  .sync({ force: true })
  .then(async () => {
    await saveInfo();
        server.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((error) => console.error(error));
module.exports = server;
