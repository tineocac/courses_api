const coursesServices = require("../services/courses.servies");

const getAllCourses = async (req, res) => {
  try {
    const result = await coursesServices.getCourses();
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};

const getCoursesWithInfo = async (req, res) => {
  try {
    const result = await coursesServices.getCoursesJoinInfo();
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};

const createNewCourse = async (req, res) => {
  try {
    const newCourse = req.body;
    const result = await coursesServices.create(newCourse);
    res.status(201).json(result);
  } catch (error) {
    console.log(error);
  }
};

const updateCourse = async (req, res) => {
  try {
    const { courseId } = req.params;
    const { description } = req.body;
    const result = await coursesServices.update(courseId, description);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllCourses,
  getCoursesWithInfo,
  createNewCourse,
  updateCourse,
};
