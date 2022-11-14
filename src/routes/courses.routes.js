const { Router } = require("express");
const router = Router();
const {
  getAllCourses,
  getCoursesWithInfo,
} = require("../controllers/courses.controllers");

router.get("/courses", getAllCourses);
router.get("/courses/categories-videos", getCoursesWithInfo);

module.exports = router;
