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

module.exports = { getAllCourses, getCoursesWithInfo };
