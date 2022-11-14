const {
  getAllUsersCourses,
  assigneCourseToUser,
} = require("../controllers/usersCoursesControllers");
const { Router } = require("express");
const router = Router();

router.get("/users-courses", getAllUsersCourses);

router.post("/users-courses", assigneCourseToUser);

module.exports = router;
