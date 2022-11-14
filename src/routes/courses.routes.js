const { Router } = require("express");
const router = Router();
const {
  getAllCourses,
  getCoursesWithInfo,
  createNewCourse,
  updateCourse,
} = require("../controllers/courses.controllers");

router.get("/courses", getAllCourses);
router.get("/courses/categories-videos", getCoursesWithInfo);

router.post("/courses", createNewCourse);

router.put("/courses/:courseId", updateCourse);

module.exports = router;
