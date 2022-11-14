const usersCoursesServices = require("../services/usersCourses.services");

const getAllUsersCourses = async (req, res) => {
  try {
    const result = await usersCoursesServices.getUsersCourses();
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};

const assigneCourseToUser = async (req, res) => {
  try {
    const { userId, courseId } = req.body;
    const data = { userId, courseId };
    const result = await usersCoursesServices.assigneCourse(data);
    res.status(201).json(result);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAllUsersCourses, assigneCourseToUser };
