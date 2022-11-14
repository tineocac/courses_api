const Categories = require("../models/categories.models");
const Courses = require("../models/courses.models");
const Videos = require("../models/videos.models");

class coursesServices {
  static async getCourses() {
    try {
      const result = await Courses.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getCoursesJoinInfo() {
    try {
      const result = await Categories.findAll({
        attributes: ["name"],
        include: {
          model: Courses,
          attributes: {
            exclude: ["category_id", "createdAt", "updatedAt"],
          },
          include: {
            model: Videos,
            attributes: ["title", "url"],
          },
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async create(newCourse) {
    try {
      const result = await Courses.create(newCourse);
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = coursesServices;
