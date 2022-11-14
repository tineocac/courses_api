const { Router } = require("express");
const router = Router();
const {
  getAllCourses,
  getCoursesWithInfo,
  createNewCourse,
} = require("../controllers/courses.controllers");

router.get("/courses", getAllCourses);
router.get("/courses/categories-videos", getCoursesWithInfo);

router.post("/courses", createNewCourse);

module.exports = router;
