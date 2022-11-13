const { Router } = require("express");
const {
  getAllUsers,
  getUsersbyId,
  getUserWithCourses,
  createUsers,
} = require("../controllers/users.controllers");
const router = Router();

router.get("/users", getAllUsers);
router.get("/users/:id", getUsersbyId);
router.get("/users/:id/courses", getUserWithCourses);

router.post("/users", createUsers);

module.exports = router;
