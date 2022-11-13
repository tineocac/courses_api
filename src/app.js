const db = require("../src/utils/database");
const express = require("express");
const initModels = require("./models/initModels");

// Initializations / Instances
const app = express();
initModels();

// Settings / PORT
const PORT = 8000;

// Authentication / Synchronization
db.authenticate()
  .then(() => console.log("Succesful aunthentication"))
  .catch((error) => console.log(error));

db.sync({force: true})
  .then(() => console.log("Succesfull synchronization"))
  .catch((error) => console.log(error));

// Requests / Responses
app.use("/", (req, res) => {
  res.json({ message: "Succesful request" });
});

// Start server
app.listen(PORT, console.log(`Server is running at port ${PORT}`));
