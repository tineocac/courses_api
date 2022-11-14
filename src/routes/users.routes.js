const { Router } = require("express");
const {
  getAllUsers,
  getUsersbyId,
  getUserWithCourses,
  createUsers,
  updateUserData,
} = require("../controllers/users.controllers");
const router = Router();

router.get("/users", getAllUsers);
router.get("/users/:userId", getUsersbyId);
router.get("/users/:userId/courses", getUserWithCourses);

router.post("/users", createUsers);

router.put("/users/:userId", updateUserData);

module.exports = router;
