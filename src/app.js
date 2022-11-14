const db = require("../src/utils/database");
const express = require("express");
const initModels = require("./models/initModels");
const usersRouter = require("./routes/users.routes");
const usersCoursesRouter = require("./routes/usersCourses.routes");
const coursesRouter = require("./routes/courses.routes");

// Initializations / Instances
const app = express();
app.use(express.json());
initModels();

// Settings / PORT
const PORT = 8000;

// Authentication / Synchronization
db.authenticate()
  .then(() => console.log("Succesful aunthentication"))
  .catch((error) => console.log(error));

db.sync({ force: false })
  .then(() => console.log("Succesfull synchronization"))
  .catch((error) => console.log(error));

// Requests / Responses
app.get("/", (req, res) => {
  res.json({ message: "Succesful request" });
});

// Middlewares
app.use("/api/v1", usersRouter);
app.use("/api/v1", usersCoursesRouter);
app.use("/api/v1", coursesRouter);

// Start server
app.listen(PORT, console.log(`Server is running at port ${PORT}`));
