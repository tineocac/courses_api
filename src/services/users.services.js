const Users = require("../models/users.models");
const UsersCourses = require("../models/usersCourses");

class usersServices {
  static async getUsers() {
    try {
      const result = await Users.findAll({
        attributes: {
          exclude: ["createdAt", "updatedAt", "password"],
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getById(id) {
    try {
      const result = await Users.findByPk(id, {
        attributes: {
          exclude: ["createdAt", "updatedAt", "password"],
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getUserJoinCourse(id) {
    try {
      const result = await Users.findOne({
        where: { id },
        include: {
          model: UsersCourses,
        },
      });
      return result;
    } catch (error) {}
  }
}

module.exports = usersServices;
