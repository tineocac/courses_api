const { Router } = require("express");
const {
  getAllUsers,
  getUsersbyId,
  getUserWithCourses,
} = require("../controllers/users.controllers");
const router = Router();

router.get("/users", getAllUsers);
router.get("/users/:id", getUsersbyId);
router.get("/users/:id/courses", getUserWithCourses);

module.exports = router;
