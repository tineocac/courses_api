const UsersCourses = require("../models/usersCourses");

class usersCoursesServices {
  static async getUsersCourses() {
    try {
      const result = await UsersCourses.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async assigneCourse(data) {
    try {
      const result = UsersCourses.create(data);
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = usersCoursesServices;
